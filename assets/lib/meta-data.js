export function getMetaData({ url, siteName, title, titleTemplate, description, keywords, author, thumbnail, thumbnailAlt }) {
  // For all config options, see https://vue-meta.nuxtjs.org/api/
  // titleTemplate can also be a function, e.g. `(chunk) => `${chunk} \u2013 Lukas Semmler`
  // Recommended meta tags are from https://css-tricks.com/essential-meta-tags-social-media/ by Adam Coti, 2021-11-12
  return {
    title: title,
    titleTemplate: titleTemplate,
    meta: [
      { hid: "description", name: "description", content: description },
      { property: "keywords", content: keywords },
      { property: "author", content: author },
      { property: "og:title", content: title, template: titleTemplate },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:image", content: thumbnail },
      { property: "og:url", content: url },
      { property: "og:site_name", content: siteName },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image:alt", content: thumbnailAlt },
    ],
  };
}
