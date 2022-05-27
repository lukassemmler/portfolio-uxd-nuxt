<template>
  <div
    class="dropdown-button"
    :aria-expanded="expanded + ''"
    v-click-outside="onOutsideClick"
  >
    <simple-button
      :prefixed-icon="prefixedIcon"
      suffixed-icon="caret-down"
      :target="'#' + menuId"
      :id="menuButtonId"
      aria-haspopup="true"
      :aria-owns="menuListId"
      role="button"
      @click.prevent="onButtonClick"
      @keydown.space.prevent=""
      @keydown.enter.prevent=""
      @keyup.space.prevent="onSpace"
      @keyup.enter.prevent="onEnter"
      ref="button"
      >Testing</simple-button
    >
    <dropdown-menu
      :menu="menu"
      :menuId="menuId"
      :menuListId="menuListId"
      :labelledBy="menuButtonId"
      ref="menu"
      @escaped="onMenuEscaped"
      @tabbed="onMenuTabbed"
    ></dropdown-menu>
  </div>
</template>

<script>
import { getScrollParent } from "~/assets/lib/dom-util";
import DropdownMenu from "./DropdownMenu.vue";

// Control is inspired by the Dropdown Button in "WinUI 2 Gallery" (https://github.com/microsoft/WinUI-Gallery)

// TODO To build a complete menu element, we would have to add full keyboard support. Because of time restraints, we will not do that for now.
// See https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role for accessible roles

export default {
  components: { DropdownMenu },
  props: {
    menuId: {
      type: String,
      required: true,
    },
    prefixedIcon: {
      type: String,
      required: false,
    },
    menu: {
      type: Array,
      required: true,
    },
    orientation: {
      type: String,
      required: false,
    },
    refitMenuIfBlocked: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    menuButtonId: function () {
      return this.menuId + "-button";
    },
    menuListId: function () {
      return this.menuId + "-menu";
    },
  },
  data: function () {
    return {
      expanded: false,
    };
  },
  methods: {
    onMenuTabbed: function (event) {
      this.close();
      if (event.shift) this.$refs.button.focus();
    },
    onMenuEscaped: function () {
      if (!this.expanded) return;
      this.close();
      this.$refs.button.focus();
    },
    onSpace: function () {
      this.toggle();
    },
    onEnter: function () {
      this.toggle();
    },
    onButtonClick: function () {
      this.toggle();
    },
    onOutsideClick: function () {
      if (!this.expanded) return;
      this.close();
      this.$refs.button.focus();
    },
    open: function () {
      this.expanded = true;
      this.$refs.menu.focus();
      this.$nextTick(() => {
        if (this.refitMenuIfBlocked) this.refitMenu();
      });
    },
    close: function () {
      this.expanded = false;
      this.$refs.menu.resetFocus();
    },
    toggle: function () {
      if (this.expanded) {
        this.close();
        return;
      }
      this.open();
    },
    refitMenu: function () {
      // TODO this kind of interactive responsiveness is a little too advanced for now (too much time to implement for too little gain).
      /*
      // TODO If we later want to add the option to display the dropdown left or right to the button (instead of top or bottom)
      // we would have to extend this method a little.
      const menu = this.$refs.menu.$el;
      const scrollParent = getScrollParent(menu);
      //const button = this.$refs.button;
      //const buttonBounds = button.getBoundingClientRect();
      const menuBounds = menu.getBoundingClientRect();
      const parentBounds = scrollParent.getBoundingClientRect();
      console.log(menuBounds);
      console.log(parentBounds);
      const overflowFactorsRaw = Object.freeze({
        top: menuBounds.top - parentBounds.top,
        right: scrollParent.clientWidth - menuBounds.x - menuBounds.width,
        bottom: scrollParent.clientHeight - menuBounds.y - menuBounds.height,
        left: menuBounds.left - parentBounds.left,
      });
      console.log("overflow factors: ", overflowFactorsRaw);

      const initialOrientation = this.orientation;
      const overflowFactorsWithButtonRaw = { ...overflowFactorsRaw };
      //if (initialOrientation.startsWith("top-"))
      //  overflowFactorsWithButtonRaw.bottom = overflowFactorsRaw -
      */
    },
  },
};
</script>

<style lang="scss">
.dropdown-button {
  position: relative;
  display: inline-block;

  .dropdown-menu.dropdown-menu {
    display: none;
  }

  &[aria-expanded="true"] {
    .dropdown-menu {
      display: block;
    }
  }
}
</style>