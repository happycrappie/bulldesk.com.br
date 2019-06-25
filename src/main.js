import Layout from '~/layouts/Default.vue'

import './assets/styles/main.sass'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap'
  })
}
