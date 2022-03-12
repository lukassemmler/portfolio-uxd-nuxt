import Vue from 'vue'

Vue.directive('markdown', function (el, binding, vnode) {
  const { value: markup } = binding;
  const { context: { $md, localePath } } = vnode;
  if ($md === undefined)
    throw new Error(`Cannot find instance property '$md'. Make sure you have '@nuxtjs/markdownit' installed. `);
  if (localePath === undefined)
    throw new Error(`Cannot find instance function 'localePath()'. Make sure you have '@nuxtjs/i18n' installed. `);
  const markupWithLocalizedLinks = replaceLinksWithLocalizedLinks(markup, localePath);
  const html = $md.render(markupWithLocalizedLinks);
  el.innerHTML = html;
});

function replaceLinksWithLocalizedLinks(string, linkReplacer) {
  // Turns `[Some link](~/some/link)` into `[Some link](/en/some/link)` (output is based on locale settings) 
  const regex = /\[(.+?)\]\(\~(.+?)\)/g;
  const replacer = (match, p1, p2) => {
    return `[${p1}](${linkReplacer(p2)})`;
  }
  const replacedString = string.replace(regex, replacer);
  console.log(replacedString);
  return replacedString;
};
