<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  header
    padding-bottom: 1.2rem

  .container
    h1
      margin-top: 3rem
      font-weight: 700
      color: $gray-dark
      line-height: 1
      font-size: 4rem
      margin-bottom: 2rem

    p
      color: $gray-light
      font-size: 0.8rem
      line-height: 2

  section.plans
    background-position: center
    background-repeat: no-repeat
    height: 1286px
    background-image: url(~@/assets/images/pricing-purple-bg.png)
    margin-top: -200px
    padding-top: 280px

    .plan
      @media only screen and (max-width: 992px)
        margin-left: 15%
        margin-right: 15%

      .best-choice
        margin: -40px 30px 0
        padding: 10px
        text-align: center
        font-size: 0.8rem
        background-color: $orange
        border-top-left-radius: 160px
        border-top-right-radius: 160px
        height: 40px
        color: $white

      .detail
        text-align: center
        min-height: 400px
        padding: 60px 30px
        box-shadow: 0 10px 20px rgba(69, 39, 123, 0.09)
        border-radius: 10px 0 0 10px

        .title
          font-size: 1rem
          color: $gray-dark

        .price
          font-size: 2.25rem

        .per-user
          font-size: 0.8rem

      &:first-child
        .detail
          background-color: $white-gray

      &:nth-child(2)
        margin-top: -30px

        .detail
          background-color: $white
          height: 400px + 30px
          border-radius: 0 10px 10px 0

      &:nth-child(3)
        .detail
          background-color: $white-gray
          box-shadow: 0 20px 30px rgba(69, 39, 123, 0.18)

      &:last-child
        .detail
          color: $white-gray
          background-color: $gray-dark
          border-radius: 0 10px 10px 0

          .title
            color: $white-gray

          .price
            margin-top: 10px
            font-size: 1.7rem
            line-height: 1

          hr
            border-top: 1px solid $gray-soft
</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="light")

    .container.text-center
      h1 Simples e prático
        span.dot.green
      p Veja abaixo qual o plano mais se adapta à sua necessidade.
        br
        | Contratação simples, rápida e 100% online.
        br
        span.font-weight-bold De burocrático já basta a concorrência. 🤪

    section.plans
      .container
        .row.no-gutters
          .plan.col-lg-3(v-for="(edge, index) in $page.plans.edges" :key="edge.node.id")
            .best-choice(v-if="index === 1") Melhor escolha 👌
            .detail
              .title {{ edge.node.name }}
              .price R$ {{ edge.node.price_per_user }}
              .per-user por usuário
              hr
              //- | {{ edge.node.name }} R$ {{ edge.node.price_per_user }}
              //- b-button Testar agora

          .plan.col-lg-3
            .detail
              .title Enterprise
              .price Valor sob consulta
              hr
</template>

<page-query>
  query Plans {
    plans: allMonthlyPlans(sortBy: "price_per_user", order: ASC, limit: 3) {
      edges {
        node {
          id
          name
          price_per_user
        }
      }
    }
  }
</page-query>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'

  export default {
    components: {
      Layout,
      Nav,
    },

    metaInfo: {
      title: 'Planos e Preços'
    },
  }
</script>
