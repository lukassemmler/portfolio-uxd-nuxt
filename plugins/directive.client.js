// Based on https://stackoverflow.com/a/63470049/custom-directive-in-nuxt-js
import Vue from 'vue'

// Based on https://thewebdev.info/2021/05/17/how-to-detect-clicks-outside-an-element-with-vue-js/, by John Au-Yeung, 2021-05-17
Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    const { expression } = binding;
    el.clickOutsideEvent = (event) => {
      if (el !== event.target && !el.contains(event.target))
        vnode.context[expression](event);
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el) {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
});
