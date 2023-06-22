import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            themes: {
              light: {
                dark: false,
                colors: {
                  primary: "#485162",
                  propurple : "#BEAEE2",
                  prowhite : "#FFFFFF",
                  progreen : "rgb(102,189,174)",
                  protextgray : "#B5B5B5"
                }
              },
            },
          },
})
nuxtApp.vueApp.use(vuetify)
})