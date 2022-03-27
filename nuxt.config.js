export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio-uxd-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Based on https://router.vuejs.org/api/#exact-active-class
  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact-active',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/directive.client.js',
    '~/plugins/directive.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    '~/templates',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxt/image',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
    '@nuxtjs/markdownit',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // See https://nuxtjs.org/docs/configuration-glossary/configuration-render/#bundleRenderer (Nuxt renderer keyword)
  // See https://vuejs.org/guide/scaling-up/ssr.html#renderer-options (Vue SSR API)
  // NOT WORKING; TODO: Add debugging to vscode -- https://medium.com/js-dojo/debugging-nuxt-js-with-vs-code-60a1a9e75cf6
  render: {
    bundleRenderer: {
      directives: {
        banana(el, dir) {
          el.id = dir.value;
        }
        /*
        ssrTest: {
          mounted(el, binding) {
            // client-side implementation:
            // directly update the DOM
            el.id = binding.value
          },
          getSSRProps(binding) {
            // server-side implementation:
            // return the props to be rendered.
            // getSSRProps only receives the directive binding.
            return {
              id: binding.value
            };
          },
          
        },
        */
      },
    },
  },

  // It is not recommended to use `process.env` for security reasons. Instead, we are gonna use the Nuxt runtime config.
  // See https://nuxtjs.org/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config/#migrating-to-the-nuxt-runtime-config-from-the-env-property
  publicRuntimeConfig: {
    // Make sure to update the localhost fallback if the default local server changes.
    // See https://nuxtjs.org/docs/features/configuration/#edit-host-and-port
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },

  privateRuntimeConfig: {
    // Use for secrets like API keys.
  },

  // based on https://dev.to/wearethreebears/globally-accessible-css-and-scss-in-your-nuxt-component-files-1ann
  styleResources: {
    scss: [
      '~/assets/style/main.scss',
    ],
    hoistUseStatements: true,
  },

  // see https://www.npmjs.com/package/@nuxtjs/fontawesome
  fontawesome: {
    component: 'FontAwesome',
    icons: {
      solid: [
        "faBriefcase"
      ]
    }
  },

  // see https://image.nuxtjs.org/api/options/
  image: {
    // Options
  },

  // see https://i18n.nuxtjs.org/options-reference
  i18n: {
    langDir: "~/locales/",
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'de', iso: 'de-DE', file: 'de.json' }
    ],
    defaultLocale: 'de',
    vueI18n: {
      fallbackLocale: 'de',
    },
    strategy: 'prefix_and_default', //doesnt seem to work; default locale is supposed to show up in path
    seo: true,
  },

  // See https://github.com/nuxt-community/markdownit-module
  // See https://github.com/markdown-it/markdown-it
  // See https://markdown-it.github.io/markdown-it/#MarkdownIt.new
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    typographer: true,
  },

  // Based on https://stackoverflow.com/a/64214970/nuxt-js-static-site-and-404-page by Baker Web Solutions, 2020-10-05
  generate: {
    fallback: '404.html'
  },
}
