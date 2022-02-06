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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

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
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // based on https://dev.to/wearethreebears/globally-accessible-css-and-scss-in-your-nuxt-component-files-1ann
  styleResources: {
    scss: [
      '~/assets/style/main.scss',
    ]
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
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    }
  }
}
