<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  .hero
    margin-top: 80px
    margin-bottom: 30px

    h1
      margin-bottom: 40px
      font-size: 3.9375rem
      font-weight: bold
      line-height: 0.87
      color: $gray-dark

      @media only screen and (max-width: 450px)
        font-size: 2.6rem

    h2
      font-size: 1rem
      line-height: 1.56
      color: $gray-dark

  .section-a
    position: relative
    z-index: 1
    margin-bottom: 40px

    &:before
      content: ""
      position: absolute
      top: -273px
      left: 0
      z-index: -1
      display: block
      width: 100vw
      height: calc(100% + 273px)
      // min-height: 1285px
      background: top center no-repeat url(~@/assets/images/quem-somos-bg-section-a.png)
      background-size: cover

    img
      max-width: 100%
      margin-bottom: 30px

    .row
      >div
        text-align: right

        &:first-child
          @media only screen and (min-width: 640px)
            margin-top: 15px

          img
            &:last-of-type
              @media only screen and (min-width: 640px)
                max-width: 75%

        &:nth-child(2)
          @media only screen and (min-width: 640px)
            margin-top: 80px

  .section-b
    margin-bottom: 190px

    .container
      padding-left: 30px
      padding-right: 30px

    .row
      margin-left: -30px
      margin-right: -30px

    .col
      padding-left: 30px
      padding-right: 30px

    img
      width: 100%
      max-width: 615px

    h2
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15
      color: $gray-dark

    h3
      font-size: 1.625rem
      line-height: 1.15
      color: $purple

    p
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

  .section-c
    position: relative
    z-index: 1
    padding-top: 115px
    padding-bottom: 120px
    margin-bottom: 160px

    &:before
      content: ""
      position: absolute
      top: -260px
      left: 0
      z-index: -1
      display: block
      width: 100vw
      height: calc(100% + 260px + 130px)
      min-height: 39vw
      background: top center no-repeat url(~@/assets/images/quem-somos-bg-section-c.png)
      background-size: cover

    h2
      margin-bottom: 15px
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15
      color: $gray-dark

    p
      margin-bottom: 100px
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light


</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="light" logo="black")

    .hero
      .container
        .row.justify-content-center
          .col-md-7.text-center
            h1 Apaixonados por o que fazemos
              span.dot.green

            h2.col-md-11 Nossa equipe é composta por estrategistas, programadores e designers, que trabalham com apenas um objetivo em comum:
              b  gerar resultados reais para nossos clientes.

    section.section-a
      .container
        .row
          .col-md-4
            g-image(src="~/assets/images/quem-somos-foto-1@2x.png")
            g-image(src="~/assets/images/quem-somos-foto-2@2x.png")

          .col-md-4
            g-image(src="~/assets/images/quem-somos-foto-3@2x.png")
            g-image(src="~/assets/images/quem-somos-foto-4@2x.png")
            g-image(src="~/assets/images/quem-somos-foto-5@2x.png")

          .col-md-4
            g-image(src="~/assets/images/quem-somos-foto-6@2x.png")
            g-image(src="~/assets/images/quem-somos-foto-7@2x.png")

    section.section-b
      .container
        .row.justify-content-center.align-items-center.flex-md-row-reverse
          .col.col-lg-3
            h2 Floripa
            h3 A ilha
            p Não era de se duvidar que o Bulldesk é de Florianópolis, afinal as melhores empresas de tecnologia do Brasil nascem aqui. Quando vier para cá, não deixe de nos fazer uma visita.

          .col.col-12.col-md-auto
            g-image(src="~/assets/images/quem-somos-bg-section-b@2x.png")

    section.section-c
      .container
        .row.justify-content-center
          .col-md-7.text-center
            h2 Quer saber quem confia na gente? As maiores empresas do Brasil
            p Faça igual eles, comece a organizar e mensurar o seu sucesso ainda hoje.

        .row
          .col-12.text-center
            b-button(href="https://app.bulldesk.com.br/cadastro", variant="purple")
              | Veja mais histórias de sucesso
              g-image(src="../assets/icons/play-button@white.svg", alt="")

</template>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'
  import { BButton } from 'bootstrap-vue'

  export default {
    components: {
      Layout,
      Nav,
      BButton,
    },

    metaInfo: {
      title: 'Quem somos',
    },

    data () {
      return {
        email: ''
      }
    }
  }
</script>
