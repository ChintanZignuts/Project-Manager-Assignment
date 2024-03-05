import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.config.globalProperties.$axios = axios
axios.defaults.baseURL = import.meta.env.VITE_API_API_URL
axios.interceptors.request.use(function (config) {
  config.headers['X-Binarybox-Api-Key'] = import.meta.env.VITE_API_API_KEY
  return config
})

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
