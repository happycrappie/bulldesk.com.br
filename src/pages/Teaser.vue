<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  .container
    text-align: center
    padding-top: 10rem

  h2
    margin: auto
    max-width: 600px
    color: $white-gray
    font-size: 4rem
    font-weight: 700
    letter-spacing: -0.94px
    line-height: 60px

  h3
    margin: auto
    margin-top: 4rem
    max-width: 500px
    color: $white-gray
    font-size: 2rem
    font-weight: 400
    letter-spacing: -0.36px
    line-height: 30px
</style>

<template lang="pug">
  Layout
    .container
      h2 Esteja preparado para uma nova
        .text-green  experiência
        |  em CRM e automação de Marketing

      h3 Preencha seu e-mail e seja o primeiro a receber novidades
</template>

<script>
  import Layout from '../layouts/Teaser'

  export default {
    components: {
      Layout
    },

    metaInfo: {
      title: 'Inteligência comercial de forma simples'
    },
  }
</script>
