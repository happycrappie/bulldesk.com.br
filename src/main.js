import Layout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.sass'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap'
  })
}
