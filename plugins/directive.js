import Vue from 'vue'
import { replacePlaceholders, replaceLinksWithLocalizedLinks } from '~/assets/lib/string-util';

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
