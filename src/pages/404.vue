<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  h1
    font-weight: 400
    font-size: 4.5rem
</style>

<template lang="pug">
  Layout
    .container
      Nav(type="dark")

    .container.d-flex.h-100.align-items-center.justify-content-center
      .content.text-center
        h1 404
        p Página não encontrada.
        a.btn(href="/") Voltar
</template>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'

  export default {
    components: {
      Layout,
    },

    metaInfo: {
      title: 'Inteligência comercial de forma simples'
    },
  }
</script>
