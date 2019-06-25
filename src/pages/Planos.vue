<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  header
    padding-bottom: 1.2rem

  .hero.container
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
    min-height: 1286px
    background-image: url(~@/assets/images/pricing-purple-bg.png)
    margin-top: -250px
    padding-top: 280px

    .list
      display: flex
      width: 100%
      overflow-x: auto

      @media only screen and (max-width: 420px)
        margin: auto
        max-width: 300px

    .plan
      min-width: 275px

      .best-choice
        margin: 0 30px 0
        padding: 10px
        text-align: center
        font-size: 0.8rem
        background-color: $orange
        border-top-left-radius: 160px
        border-top-right-radius: 160px
        height: 40px
        color: $white

      .detail
        margin-top: 70px
        text-align: center
        min-height: 400px
        padding: 60px 30px
        box-shadow: 0 10px 20px rgba(69, 39, 123, 0.09)
        border-radius: 10px

        .title
          font-size: 1rem
          color: $gray-dark

        .price
          font-size: 2.25rem

        .per-user
          font-size: 0.8rem

        .features
          margin: 1.5rem 0
          color: $gray-light
          font-size: 0.85rem
          text-align: left
          padding-inline-start: 30px

          li
            padding: 3px 0

      &:first-child
        .detail
          height: 381px
          background-color: $white-gray

      &:nth-child(2)
        .detail
          height: 515px
          margin-top: 0
          background-color: $white
          // border-radius: 0 10px 10px 0

      &:nth-child(3)
        .detail
          height: 581px
          background-color: $white-gray
          box-shadow: 0 20px 30px rgba(69, 39, 123, 0.18)

      &:last-child
        .detail
          height: 525px
          color: $white-gray
          background-color: $gray-dark
          // border-radius: 0 10px 10px 0

          .title
            color: $white-gray

          .price
            margin-top: 10px
            font-size: 1.7rem
            line-height: 1

          hr
            border-top: 1px solid $gray-soft

          .features
            color: $white-gray
    .help
      margin: auto
      text-align: center
      max-width: 400px
      margin-top: 3rem
      color: $white-gray

      h3
        font-weight: bold
        margin-bottom: 2rem

      p
        font-size: 0.9rem

  section.compare
    margin: 3rem 0

    table.table
      width: 980px
      margin: 1rem auto
      font-size: 0.85rem

      .helper
        color: $gray-light
        cursor: default
        background: $gray-white
        text-align: center
        font-size: 0.7rem
        font-weight: 700
        padding: 4px 8px
        border-radius: 50%

      th, td
        border-top: 0
        color: $gray-light

        &:not(:first-child)
          text-align: center

      th
        text-transform: uppercase
        border-bottom: 1px solid #dee2e6

      td
        width: 15%

        &:first-child
          width: 30%
</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="light")

    .hero.container.text-center
      h1 Simples e prático
        span.dot.green
      p Veja abaixo qual o plano mais se adapta à sua necessidade.
        br
        | Contratação simples, rápida e 100% online.
        br
        span.font-weight-bold De burocrático já basta a concorrência.

    section.plans
      .container
        .row.no-gutters.list
          .plan.col-3(v-for="(plan, index) in plansList")
            .best-choice(v-if="index === 1") Melhor escolha 👌
            .detail
              .title {{ plan.name }}
              .price R$ {{ plan.price_per_user }}
              .per-user por usuário

              hr

              ul.features
                li(v-for=("feature in plan.features")) {{ feature}}

              b-button Testar agora

        .row
          .col-lg-12
            .help
              h3 Não sabe qual escolher?
              p Compare logo abaixo os planos e escolha sua melhor opção de contratação. Você vai se surpreender.

    section.compare
      .container
        .table-responsive
          table.table.table-striped(v-for="table in plansTable")
            thead
              tr
                th(colspan="5") {{ table.name }}
            tbody
              tr(v-for="item in table.items")
                td {{ item.name }}
                  span.helper.ml-2(v-b-tooltip.hover.bottom="item.description", v-if="item.description") ?
                td(v-for="exists in item.plans")
                  g-image(src="~/assets/icons/tick.svg", v-if="exists === true")
                  span(v-else-if="exists > 0 || exists.length > 0") {{ exists }}
                  span(v-else) -
</template>

<script>
  import Plans from '~/data/plans.yaml'
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'
  import { BButton } from 'bootstrap-vue';

  export default {
    components: {
      Layout,
      Nav,
      BButton,
    },

    metaInfo: {
      title: 'Planos e Preços'
    },

    data () {
      return {
        plansList: Plans.list,
        plansTable: Plans.table,
      }
    },

    mounted () {
      console.log(this.plansTable);
    }
  }
</script>
