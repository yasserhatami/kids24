// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
  ],

  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass', '~/assets/css/main.css', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

})
