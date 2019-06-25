<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  header
    padding-bottom: 1.2rem

  .hero.container
    h1
      3rem
      font-weight: 700
      color: $gray-dark
      line-height: 1
      font-size: 4rem
      margin-bottom: 2rem

    p
      color: $gray-light
      font-size: 0.8rem
      line-height: 2

  .scrollable-control
    .left, .right
      top: 600px
      cursor: pointer
      position: absolute
      font-size: 2.5rem
      padding: 10px
      z-index: 9999

    .left
      left: 0

    .right
      right: 0

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
        padding: 0 25px

    .plan
      transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)
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
        color: $gray-dark
        margin-top: 70px
        text-align: center
        min-height: 400px
        padding: 60px 30px 40px
        box-shadow: 0 10px 20px rgba(69, 39, 123, 0.09)
        border-radius: 10px

        .title
          font-size: 0.75rem

          span
            font-size: 1.125rem
            color: $purple

        .price
          font-size: 2.25rem

        .per-user
          font-size: 0.8rem

        .features
          margin: 1.5rem 0
          color: $gray-light
          font-size: 0.75rem
          text-align: left
          padding-inline-start: 30px

          li
            padding: 3px 0

        .contact
          color: $white-gray

          h4
            font-size: 1.0625rem
            text-align: center
            margin-bottom: 0.85rem

        form
          input
            margin: 0 auto 0.625rem
            border-radius: 30px
            font-size: 0.625rem
            padding: 16px 25px
            background-color: #49405B
            color: $gray-soft
            border: none
            height: auto
            max-width: 185.86px

      // Start
      &:first-child
        .detail
          // min-height: 381px
          background-color: $white-gray

      // Standard
      &:nth-child(2)
        // @media only screen and (max-width: 420px)
        //   margin-top: 70px

        .detail
          // min-height: 515px
          margin-top: 0
          background-color: $white
          // border-radius: 0 10px 10px 0

      // Premium
      &:nth-child(3)
        .detail
          // min-height: 581px
          background-color: $white-gray
          box-shadow: 0 20px 30px rgba(69, 39, 123, 0.18)

      // Enterprise
      &:last-child
        .detail
          // min-height: 525px
          color: $white-gray
          background-color: $gray-dark
          // border-radius: 0 10px 10px 0

          .title
            color: $white-gray

            span
              color: $pink

          .price
            margin-top: 10px
            font-size: 1.7rem
            line-height: 1

          hr
            border-top: 1px solid #4E4560

          .features
            color: $white-gray
    .help
      margin: auto
      text-align: center
      max-width: 400px
      margin-top: 3.25rem
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
      .scrollable-control.d-xl-none
        a.left(href="#", @click.prevent="scrollTo(-280)" v-if="scroll.left")
          | 👈
        a.right(href="#", @click.prevent="scrollTo(280)" v-if="scroll.right")
          | 👉

      .container
        .row.no-gutters.flex-nowrap.list(ref="scrollable")
          .plan.col-3(v-for="(plan, index) in plansList")
            .best-choice(v-if="index === best") Melhor escolha 👌
            .detail
              .title Plano
                span  {{ plan.name }}
              .price {{ plan.price_per_user }}
              .per-user(v-if="index < 3") por usuário

              hr

              ul.features
                li(v-for="feature in plan.features") {{ feature}}

              b-button(href="https://app.bulldesk.com.br/cadastro", :variant="index === best ? 'green' : 'default'", v-if="index < 3") Testar agora
                img(src="../assets/icons/play-button@black.svg", alt="")

              .contact(v-else)
                h4 Solicite uma demonstração

                form(@submit.prevent="submitForm()")
                  b-form-input(placeholder="Nome", v-model="form.name", required)
                  b-form-input(type="email", placeholder="E-mail", v-model="form.email", required)
                  b-button(type="submit", variant="pink", :disabled="form.busy")
                    | Solicitar Contato
                    img(src="../assets/icons/play-button@white.svg", alt="" v-if="! form.busy")
                    b-spinner.ml-1(small, v-else)

        .row
          .col-lg-12
            .help
              h3 Não sabe qual escolher?
              p Compare logo abaixo os planos e escolha sua melhor opção de contratação. Você vai se surpreender.

              img.mt-5(src="../assets/icons/down-purple.svg")
              img.mt-5(src="../assets/icons/down-purple.svg", alt="")

    section.compare
      .container
        .table-responsive
          table.table
            tbody
              tr
                td
                td
                  b-button(variant="gray") Start
                    img(src="../assets/icons/play-button@black.svg", alt="")
                td
                  b-button(variant="green") Standard
                    img(src="../assets/icons/play-button@black.svg", alt="")
                td
                  b-button(variant="gray") Premium
                    img(src="../assets/icons/play-button@black.svg", alt="")
                td
                  b-button(variant="pink") Enterprise
                    img(src="../assets/icons/play-button@white.svg", alt="")

          table.table.table-striped(v-for="table in plansTable")
            thead
              tr
                th(colspan="5") {{ table.name }}
            tbody
              tr(v-for="item in table.items")
                td {{ item.name }}
                  span.helper.ml-2(v-b-tooltip.hover.bottom="item.description", v-if="item.description") ?
                td(v-for="exists in item.plans")
                  img(src="../assets/icons/tick.svg", alt="", v-if="exists === true")
                  span(v-else-if="exists > 0 || exists.length > 0") {{ exists }}
                  span(v-else) -
</template>

<script>
  import Plans from '~/data/plans.yaml'
  import Nav from '../components/Nav'
  import Layout from '../layouts/Default'
  import { BButton, BInputGroup, BFormInput, BSpinner } from 'bootstrap-vue';
  import axios from 'axios'

  export default {
    components: {
      Layout,
      Nav,
      BButton,
      BInputGroup,
      BFormInput,
      BSpinner
    },

    metaInfo: {
      title: 'Planos e Preços'
    },

    data () {
      return {
        plansList: Plans.list,
        plansTable: Plans.table,
        best: 1,
        form: {
          name: '',
          email: '',
          busy: false,
        },
        scroll: {
          left: false,
          right: true
        }
      }
    },

    methods: {
      submitForm () {
        if (! this.form.name.length || ! this.form.name.length) {
          return;
        }

        this.form.busy = true;

        let data = {
          token: process.env.GRIDSOME_BULLDESK_TOKEN,
          identifier: 'Contato Enterprise',
          name: this.form.name,
          email: this.form.email
        };

        try {
          data.client = window.BulldeskSettings.client;
          data.domain = window.BulldeskSettings.domain;
        } catch (e) {
          //
        }

        axios.post(process.env.GRIDSOME_BULLDESK_API_URL + '/conversion', data)
          .then((response) => {
            this.form.busy = false;

            this.form.name = '';
            this.form.email = '';
          })
          .catch((error) => {
            console.log(error);
          });
      },

      scrollTo (px) {
        const el = this.$refs.scrollable;

        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)'
        )

        el.scrollLeft += px;

        this.scroll.left = el.scrollLeft > 0;
        this.scroll.right = (el.offsetWidth + el.scrollLeft) < el.scrollWidth;
      }
    }
  }
</script>
