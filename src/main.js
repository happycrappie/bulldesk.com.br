import Layout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.sass'

import VueScrollReveal from 'vue-scroll-reveal';

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.use(VueScrollReveal);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap'
  })
}
