import Layout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.component('Layout', Layout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
  })
}
