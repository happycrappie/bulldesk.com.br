<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  .cursor-default
    cursor: default

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
        background: rgb(255,127,0)
        background: linear-gradient(90deg, rgba(255,127,0,1) 0%, rgba(243,19,87,1) 43%)
        // background-color: $orange
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

        ul.features
          list-style: none
          list-style-type: none
          margin: 1.5rem 0
          color: $gray-light
          font-size: 0.75rem
          text-align: left
          padding-inline-start: 30px

          li
            padding: 3px 0

            &:before
              content: ' '
              position: absolute
              background: url(~@/assets/icons/bullet@purple.svg) no-repeat
              width: 50px
              height: 18px
              margin-left: -25px
              margin-top: 2px

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
      &:nth-child(3)
        // @media only screen and (max-width: 420px)
        //   margin-top: 70px

        .detail
          // min-height: 515px
          margin-top: 0
          // background-color: $white
          background-color: $white-gray
          // border-radius: 0 10px 10px 0

      // Premium
      &:nth-child(2)
        .detail
          // min-height: 581px
          // background-color: $white-gray
          background-color: $white
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

            li:before
              background: url(~@/assets/icons/bullet@pink.svg) no-repeat

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
    z-index: 10
    position: relative
    margin: 3rem 0 -240px

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

      tr
        &:nth-child(even)
          td:first-child
            background-color: $white

        &:nth-child(odd)
          td:first-child
            background-color: $white-gray

      th, td
        border-top: 0
        color: $gray-light

        &:first-child
          position: sticky
          left: 0

        &:not(:first-child)
          text-align: center

      th
        text-transform: uppercase
        border-bottom: 1px solid #dee2e6

      td
        width: 15%

        &:first-child
          width: 30%

        .price
          color: $black
          font-size: 1rem
          line-height: 25px

        .focus
          color: $black
          font-size: 0.75rem
          line-height: 25px

      @media only screen and (max-width: 480px)
        td:first-child
          width: 15%

  section.faq
    z-index: 9
    position: relative
    background-position: top center
    background-repeat: no-repeat
    min-height: 1622px
    background-image: url(~@/assets/images/plans-faq-bg.jpg)
    padding-top: 620px
    color: #F4F2F7

    h3
      text-align: center
      font-weight: bold
      font-size: 1.625rem

    h4
      font-size: 1rem
      line-height: 25px
      font-weight: bold

    h5
      font-size: 0.75rem
      font-weight: bold

    p
      margin-top: 1rem
      font-size: 0.75rem
      line-height: 25px
      color: #C9C1D5

</style>

<template lang="pug">
  Layout
    div
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
                  g-image(src="../assets/icons/play-button@black.svg", alt="")

                .contact(v-else)
                  h4 Solicite uma demonstração

                  form(@submit.prevent="submitForm()")
                    b-form-input(placeholder="Nome", v-model="form.name", required, ref="nameInput")
                    b-form-input(type="email", placeholder="E-mail", v-model="form.email", required)
                    b-button(type="submit", variant="pink", :disabled="form.busy")
                      | Solicitar Contato
                      g-image(src="../assets/icons/play-button@white.svg", alt="" v-if="! form.busy")
                      b-spinner.ml-1(small, v-else)

          .row
            .col-lg-12
              .help
                h3 Não sabe qual escolher?
                p Compare logo abaixo os planos e escolha sua melhor opção de contratação. Você vai se surpreender.

                g-image.mt-5(src="../assets/icons/down-purple.svg", alt="")

      section.compare
        .container
          .table-responsive
            table.table
              tbody
                tr
                  td.bg-white
                  td
                    b-button.cursor-default(variant="gray") Start
                      g-image(src="../assets/icons/play-button@black.svg", alt="")
                  td
                    b-button.cursor-default(variant="green") Standard
                      g-image(src="../assets/icons/play-button@black.svg", alt="")
                  td
                    b-button.cursor-default(variant="gray") Premium
                      g-image(src="../assets/icons/play-button@black.svg", alt="")
                  td
                    b-button.cursor-default(variant="pink") Enterprise
                      g-image(src="../assets/icons/play-button@white.svg", alt="")

            table.table.table-striped(v-for="table in plansTable")
              thead
                tr
                  th {{ table.name }}
                  th
                  th
                  th
                  th

              tbody
                tr(v-for="item in table.items")
                  td {{ item.name }}
                    span.helper.ml-2(v-b-tooltip.hover.bottom="item.description", v-if="item.description") ?
                  td(v-for="exists in item.plans")
                    tick-svg(v-if="exists === true")
                    span(v-else-if="exists > 0 || exists.length > 0") {{ exists }}
                    span(v-else) -

            table.table
              tbody
                tr
                  td.bg-white
                  td(v-for="(plan, index) in plansList")
                    div(v-if="index < 3")
                      span.price {{ plan.price_per_user }}

                      b-button.mt-3(href="https://app.bulldesk.com.br/cadastro", :variant="index === best ? 'green' : 'default'") Testar agora
                        g-image(src="../assets/icons/play-button@black.svg", alt="")

                    div(v-else)
                      span.focus Consulte preços

                      b-button.mt-3(@click.prevent="focus()", variant="pink") Solicitar
                        g-image(src="../assets/icons/play-button@white.svg", alt="")

      section.faq
        .container
          .row.mb-5
            .col-md-12
              h3 Ainda está com dúvidas?
                br
                | Veja abaixo as mais frequentes:

          .row.mb-5.pt-3
            .col-md-4
              h5 Existe algum tempo mínimo de contrato?
              p Não, o Bulldesk não tem nenhuma taxa de implementação ou fidelidade. Você contrata online, caso não queira mais usar é só cancelar. Prezamos pela satisfação dos nossos clientes.

            .col-md-4
              h5 Não tenho tempo para implementar, o que eu faço?
              p Entramos em contato para agendar com você duas reuniões de implementação, para parametrizar as configurações iniciais de CRM e Automação de Marketing. Além de mostrar as melhores práticas de uso do sistema.

            .col-md-4
              h5 Minhas informações estão seguras?
              p Sim. Utilizamos as mesmas tecnologias de plataformas como Spotify, Amazon e AirBnb utilizam. Seus dados não são compartilhados com terceiros e todas as informações são criptografaras.

          .d-sm-none.d-md-block
            .row.mb-5
              .col-md-4
                h5 Existe algum tempo mínimo de contrato?
                p Não, o Bulldesk não tem nenhuma taxa de implementação ou fidelidade. Você contrata online, caso não queira mais usar é só cancelar. Prezamos pela satisfação dos nossos clientes.

              .col-md-4
                h5 Não tenho tempo para implementar, o que eu faço?
                p Entramos em contato para agendar com você duas reuniões de implementação, para parametrizar as configurações iniciais de CRM e Automação de Marketing. Além de mostrar as melhores práticas de uso do sistema.

              .col-md-4
                h5 Minhas informações estão seguras?
                p Sim. Utilizamos as mesmas tecnologias de plataformas como Spotify, Amazon e AirBnb utilizam. Seus dados não são compartilhados com terceiros e todas as informações são criptografaras.

          .row.pt-3
            .col-md-12.text-center
              h4 Não perca mais tempo procurando um software
                br
                | de CRM e outro de Automação de Marketing.
                br
                | Com o Bulldesk você só precisa do Bulldesk.

              b-button.mt-4(href="https://app.bulldesk.com.br/cadastro", variant="green") Testar agora
                g-image(src="../assets/icons/play-button@black.svg", alt="")


</template>

<script>
  import Plans from '~/data/plans.yaml'
  import Nav from '../components/Nav'
  import Layout from '../layouts/Default'
  import TickSvg from '../assets/icons/inline.tick.svg'
  import { BButton, BInputGroup, BFormInput, BSpinner } from 'bootstrap-vue';
  import axios from 'axios'

  export default {
    components: {
      Layout,
      Nav,
      BButton,
      BInputGroup,
      BFormInput,
      BSpinner,
      TickSvg
    },

    metaInfo: {
      title: 'Planos e Preços'
    },

    data () {
      return {
        plansList: Plans.list,
        plansTable: Plans.table,
        best: 2,
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
      },

      focus () {
        this.$refs.nameInput[0].focus();
      }
    }
  }
</script>
