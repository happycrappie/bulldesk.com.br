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
    padding-top: 200px

    .plan
      background: $white-gray

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
        .row
          .plan.col-md-3(v-for="edge in $page.plans.edges" :key="edge.node.id")
            | {{ edge.node.name }} R$ {{ edge.node.price_per_user }}

          .plan-col-md-3.enterprise


</template>

<page-query>
  query Plans {
    plans: allMonthlyPlans {
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
