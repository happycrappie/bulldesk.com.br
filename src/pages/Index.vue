<style lang="sass" scoped>
  @import '../assets/styles/_variables.sass';

  header
    background-size: 70%
    background-position: 100% 0
    background-repeat: no-repeat
    height: 80%
    min-height: 600px

    @media only screen and (max-width: 980px)
      background-image: url(~@/assets/images/header@700.png)

    @media only screen and (max-width: 1440px)
      background-image: url(~@/assets/images/header@1000.png)

    @media only screen and (max-width: 2000px)
      background-image: url(~@/assets/images/header@1600.png)

    @media only screen and (min-width: 2001px)
      background-image: url(~@/assets/images/header@2200.png)

    .hero
      height: 100%
      max-width: 480px

      h1
        color: $gray-dark
        line-height: 1
        font-size: 4.5rem

        @media only screen and (max-width: 700px)
          font-size: 3.5rem

        span
          color: $pink

      p
        margin-top: 1rem
        font-size: 1.1rem
        font-weight: 100
        max-width: 420px
</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="dark")

        .hero.d-flex.align-items-center
          div
            h1.font-weight-bold Inteligência comercial de forma simples
              span.dot.green
            p Ferramenta de controle vendas, gerenciamento de contatos e automação de relacionamento.
</template>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'

  export default {
    components: {
      Layout,
      Nav,
    },

    metaInfo: {
      title: 'Inteligência comercial de forma simples'
    }
  }
</script>
