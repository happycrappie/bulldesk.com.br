<style lang="sass" scoped>
  @import '../../assets/styles/_variables.scss'

  header
    background-image: url(~@/assets/images/forWhom/agencies-header-b.png), url(~@/assets/images/forWhom/agencies-header-a.png)
    background-size: 50%, cover
    background-repeat: no-repeat
    background-position: 75% 10%
    height: 100%
    min-height: 800px

    .hero
      padding-top: 3rem
      max-width: 550px

      h1
        color: $gray-dark
        line-height: 1
        font-size: 4rem
        font-weight: 700
        color: $white-gray
        letter-spacing: -0.94px
        line-height: 55px

        @media only screen and (max-width: 400px)
          font-size: 3.1rem

        @media only screen and (min-width: 401px) and (max-width: 700px)
          font-size: 3.5rem

      p
        color: $white-gray
        font-size: 1.2rem
        font-weight: 400
        letter-spacing: -0.24px
        line-height: 25px
        width: auto
        max-width: 325px
        margin-top: 2rem
</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="dark")

        .hero.d-flex.align-items-center
          div
            h1 Transforme sua agência em uma máquina de resultados
              span.dot.green
            p Conheça o software mais completo de CRM com Automação de Marketing com o melhor custo benefício para a sua agência. Você duvida?
</template>

<script>
  import Layout from '../../layouts/Default'
  import Nav from '../../components/Nav'

  export default {
    components: {
      Layout,
      Nav,
    },

    metaInfo: {
      title: 'Agências'
    },

    data() {
      return {
      }
    }
  }
</script>
