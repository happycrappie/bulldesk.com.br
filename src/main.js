import Layout from '~/layouts/Default.vue'

import './assets/styles/main.sass'

import { TooltipPlugin } from 'bootstrap-vue'

export default function (Vue, { router, head, isClient }) {
  Vue.use(TooltipPlugin);

  head.htmlAttrs = { lang: 'pt-br' }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap'
  })
}
