export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'floatingdreams',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/scrollmagic.js', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    'vue-scrollto/nuxt',
    'nuxt-facebook-pixel-module',
    '@nuxtjs/google-gtag',
  ],
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '999999999999999',
    disabled: false,
  },
  'google-gtag': {
    id: 'UA-111111111-11', // required
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: true, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: [
          'floatingdreams.tw',
          'www.floatingdreams.tw',
          'core.spgateway.com',
        ],
      },
      debug: process.env.NODE_ENV !== 'production',
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
