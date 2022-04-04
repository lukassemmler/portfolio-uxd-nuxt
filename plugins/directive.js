import Vue from 'vue'
import { replacePlaceholders, replaceLinksWithLocalizedLinks } from '~/assets/lib/string-util';

// https://stackoverflow.com/questions/55791388/how-do-i-write-server-side-only-custom-directives-with-nuxt-js
// Problem: This directive does only render on the client. Use the <MarkdownBlock> component instead.
Vue.directive('markdown', function (el, binding, vnode) {
  const valueIsObject = typeof binding.value === "object";
  if (Array.isArray(binding.value))
    throw new Error(`Cannot handle type 'array' of string '${binding.value}'. `);
  const markup = valueIsObject ? binding.value.markup : binding.value;
  const placeholders = valueIsObject ? binding.value.format : null;
  const { context: { $md, localePath } } = vnode;
  if ($md === undefined)
    throw new Error(`Cannot find instance property '$md'. Make sure you have '@nuxtjs/markdownit' installed. `);
  if (localePath === undefined)
    throw new Error(`Cannot find instance function 'localePath()'. Make sure you have '@nuxtjs/i18n' installed. `);
  let formattedMarkup = markup;
  if (placeholders !== null)
    formattedMarkup = replacePlaceholders(formattedMarkup, placeholders);
  formattedMarkup = replaceLinksWithLocalizedLinks(formattedMarkup, localePath);
  const html = $md.render(formattedMarkup);
  el.innerHTML = html;
});


Vue.directive('test', function(el, binding, vnode) {
  el.innerHTML = "<h2>This is a test directive!</h2>";
});
