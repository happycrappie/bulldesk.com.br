<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss';

  header
    background-size: 70%
    background-position: 100% 0
    background-repeat: no-repeat
    height: 100%
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

      .email-group
        text-align: left
        margin-top: 2.1rem
        padding-right: 0.5rem
        width: auto
        max-width: 381px

      .email-input
        box-shadow: 0 10px 20px rgba(165, 131, 224, 0.18)
        background-color: $white
        border-radius: 30px
        padding-left: 30px
        font-size: 0.9rem
        height: 68px

      .email-button
        width: 56px
        height: 56px
        border: 0px
        border-radius: 28px
        margin-left: -3.9rem
        margin-top: 0.4rem
        z-index: 999
        background-color: $green

        img
          margin-left: 0.3rem

      .email-paragraph
        width: auto
        max-width: 207px
        height: 53px
        color: $gray-light
        font-size: 0.7rem
        font-weight: 400
        letter-spacing: 0.2px
        line-height: 20px
        margin: 1.4rem 0rem 0rem 1.9rem

      .doted-square
        position: absolute

        @media only screen and (max-height: 820px)
          display: none !important

        @media only screen and (min-width: 1300px) and (max-width: 1400px)
          left: 44rem

        @media only screen and (min-width: 1401px) and (max-width: 1600px)
          left: 50rem

        @media only screen and (min-width: 1601px) and (max-width: 1800px)
          left: 56rem

        @media only screen and (min-width: 1801px) and (max-width: 2000px)
          left: 62rem

        @media only screen and (min-width: 2001px) and (max-width: 2200px)
          left: 68rem

        @media only screen and (min-width: 2201px) and (max-width: 2400px)
          left: 74rem

        @media only screen and (min-width: 2401px)
          left: 80rem

        &:nth-child(1n)
          top: 724px

        &:nth-child(2)
          top: 754px

  .campaigns
    height: 1076px
    margin-top: -25rem
    background-repeat: no-repeat
    background-size: cover
    background-image: url(~@/assets/images/home-bg-a.png)
    background-position: -40rem

    @media only screen and (min-width: 800px) and (max-width: 1800px)
      background-position: -35rem

    @media only screen and (min-width: 1801px) and (max-width: 1990px)
      background-position: -30rem

    @media only screen and (min-width: 1991px) and (max-width: 2150px)
      background-position: -25rem

    @media only screen and (min-width: 2151px) and (max-width: 2300px)
      background-position: -15rem

    @media only screen and (min-width: 2301px)
      background-position: 0rem

    .container
      padding-top: 38rem
      font-size: 1rem

      @media only screen and (max-width: 670px)
        padding-top: 32rem

      @media only screen and (min-width: 671px) and (max-width: 1000px)
        padding-top: 34rem

      h3
        width: auto
        max-width: 294px
        color: $gray-dark
        font-size: 1.6rem
        font-weight: 700
        letter-spacing: -0.39px
        line-height: 30px

        @media only screen and (max-width: 670px)
          font-size: 1.2rem
          padding-top: 20px

      .sub-title
        width: auto
        max-width: 286px
        color: $gray-light
        font-size: 0.8rem
        font-weight: 400
        letter-spacing: 0.24px
        line-height: 25px
        margin-top: 1.2rem

      .steps-col
        margin-top: -55px

        @media only screen and (max-width: 990px)
          margin-top: 60px

      .nav
        padding-left: 20px

        @media only screen and (max-width: 990px)
          padding-left: 0px

        @media only screen and (min-width: 991px) and (max-width: 1300px)
          padding-left: 30px

      .nav-item
        width: 20%
        text-align: center
        vertical-align: middle

        .nav-link
          color: #c9c1d5
          font-weight: 700
          font-size: 0.6rem
          letter-spacing: 0.2px
          line-height: 25px
          text-transform: uppercase

          @media only screen and (max-width: 600px)
            font-size: 0.4rem
            line-height: 15px

          @media only screen and (min-width: 1300px)
            white-space: nowrap
            font-size: 0.7rem

        .active
          background-color: $purple
          color: #f6f5f8
          border-radius: 25px

    .steps
      list-style: none
      padding: 0px
      margin-top: 80px
      margin-left: -50px

      @media only screen and (max-width: 1300px)
        margin-top: 60px
        margin-left: -25px

      li
        text-align: center
        display: list-item
        float: left
        width: 25%

        .step
          padding: 0 10px
          z-index: 999

          // &:after
          //   content: ''
          //   background-image: url(~@/assets/images/line.png)
          //   background-repeat: no-repeat
          //   position: relative
          //   display: block
          //   top: -102px
          //   right: -135px
          //   width: 150px
          //   height: 5px
          //   z-index: 1

          //   @media only screen and (max-width: 600px)
          //     right: -94px
          //     width: 32px
          //     top: -97px

          //   @media only screen and (min-width: 601px) and (max-width: 1024px)
          //     right: -110px
          //     width: 78px
          //     top: -97px

          //   @media only screen and (min-width: 1025px) and (max-width: 1440px)
          //     right: -135px
          //     width: 100px

          .title
            height: 20px
            color: $pink
            font-size: 0.8rem
            font-weight: 700
            letter-spacing: 0.2px
            line-height: 20px
            text-transform: uppercase
            margin-bottom: 30px

            @media only screen and (max-width: 440px)
              font-size: 0.5rem

            @media only screen and (min-width: 441px) and (max-width: 990px)
              font-size: 0.6rem

            @media only screen and (min-width: 991px) and (max-width: 1300px)
              font-size: 0.7rem

          .icon
            background-color: $white
            height: 92px
            width: 92px
            line-height: 92px
            border-radius: 41px
            margin: auto

            @media only screen and (max-width: 440px)
              border: 1px solid $gray-light
              height: 42px
              width: 42px
              line-height: 42px

            @media only screen and (min-width: 441px) and (max-width: 990px)
              border: 1px solid $gray-light
              height: 62px
              width: 62px
              line-height: 62px

            @media only screen and (min-width: 991px) and (max-width: 1300px)
              height: 82px
              width: 82px
              line-height: 82px

            img
              @media only screen and (max-width: 440px)
                width: 14px

              @media only screen and (min-width: 441px) and (max-width: 990px)
                width: 22px

          .subtitle
            color: $gray-light
            height: 36px
            max-width: 162px
            margin: auto
            font-size: 0.8rem
            font-weight: 400
            letter-spacing: 0.24px
            line-height: 20px
            margin-top: 20px

            @media only screen and (max-width: 440px)
              font-size: 0.5rem

            @media only screen and (min-width: 441px) and (max-width: 990px)
              font-size: 0.6rem

            @media only screen and (min-width: 991px) and (max-width: 1300px)
              font-size: 0.7rem
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
            b-input-group.email-group
              b-form-input.email-input(placeholder='Insira seu email aqui' v-model='email')
              b-input-group-append
                b-button.email-button
                  g-image(src='~/assets/icons/play-button.svg')
            p.email-paragraph
              | Experimente de graça.
              br
              | Nenhum cartão de crédito é necessário.
              br
              | Configuração simples e rápida
          g-image(src='~/assets/images/doted-square.jpg' class='doted-square d-none d-xl-block')
          g-image(src='~/assets/images/doted-square.jpg' class='doted-square d-none d-xl-block')

    .campaigns
      .container
        .row
          .col-lg-4
            h3 Direcione campanhas multicanais para cada momento da jornada do cliente
            p.sub-title Veja como organizar essas e outras campanhas em réguas de relacionamento
          .col-lg-8.steps-col
              b-nav(pills)
                b-nav-item(active) Aniversário
                b-nav-item Reaquecimento
                b-nav-item Inbound Marketing
                b-nav-item Whatsapp
                b-nav-item Check-in Hotel
              ul.steps
                li
                  .step
                    .title &nbsp;
                    .icon
                      g-image(src='~/assets/icons/person.svg')
                    .subtitle Bruno vai fazer aniversário
                li
                  .step
                    .title 10 Dias antes
                    .icon
                      g-image(src='~/assets/icons/envelope.svg')
                    .subtitle Email:
                      strong  "seu aniversário está chegando"
                li
                  .step
                    .title 1 Dia antes
                    .icon
                      g-image(src='~/assets/icons/envelope.svg')
                    .subtitle Email:
                      strong  "é amanhã"
                li
                  .step
                    .title No dia do aniversário
                    .icon
                      g-image(src='~/assets/icons/envelope.svg')
                    .subtitle Email:
                      strong  “mensagem de aniversário + cupom desconto”
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
