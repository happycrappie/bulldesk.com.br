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

  .section
    h3
      width: auto
      color: $gray-dark
      font-size: 1.6rem
      font-weight: 700
      letter-spacing: -0.39px
      line-height: 30px

      @media only screen and (max-width: 670px)
        font-size: 1.2rem
        padding-top: 20px

    .subtitle
      color: $gray-light
      font-size: 0.8rem
      font-weight: 400
      letter-spacing: 0.24px
      line-height: 25px

  .section-a
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

    h3
      max-width: 294px

      @media only screen and (max-width: 990px)
        max-width: 100%

    .container
      padding-top: 38rem
      font-size: 1rem

      @media only screen and (max-width: 670px)
        padding-top: 32rem

      @media only screen and (min-width: 671px) and (max-width: 1000px)
        padding-top: 34rem

      .subtitle
        width: auto
        max-width: 286px
        margin-top: 1.2rem

        @media only screen and (max-width: 990px)
          max-width: 100%

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
            color: $gray-soft
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
            color: $white-gray
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

            .step-title
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

            .step-icon
              background-color: $white
              height: 92px
              width: 92px
              line-height: 92px
              border-radius: 45px
              margin: auto
              z-index: 2
              position: relative

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

              &:after
                content: ''
                background-image: url(~@/assets/images/line.png)
                background-repeat: no-repeat
                position: relative
                display: block
                top: -50%
                right: -100%
                height: 5px
                width: 110%
                z-index: 0

            .step-subtitle
              height: 36px
              max-width: 162px
              margin: auto
              margin-top: 20px

              @media only screen and (max-width: 440px)
                font-size: 0.5rem

              @media only screen and (min-width: 441px) and (max-width: 990px)
                font-size: 0.6rem

              @media only screen and (min-width: 991px) and (max-width: 1300px)
                font-size: 0.7rem

          &:last-child
            .step
              .step-icon
                background-color: $pink
                border: 0px

                &:after
                  background-image: none

  .section-b
    margin-top: 10rem

    .subtitle
      width: auto
      max-width: 286px
      margin-top: 2rem

    .items
      padding: 0px
      margin-top: 1rem

      .item
        color: $purple
        height: 25px
        padding: 20px 0px
        font-size: 0.8rem
        font-weight: 400
        letter-spacing: 0.24px
        line-height: 25px

        img
          margin-right: 10px

    .know-more
      margin-top: 3rem

      .btn-know-more
        background-color: $purple
        color: $white-gray
        border-radius: 30px
        font-size: 0.8rem
        font-weight: 700
        padding: 20px 25px

        &:hover
          cursor: pointer

        img
          margin-left: 5px

    .right-col
      .header
        width: 336px
        height: 61px
        border-radius: 10px
        font-size: 0.8rem
        font-weight: 500
        letter-spacing: 0.24px
        line-height: 61px
        background-color: $white-gray
        padding: 0 20px
        margin: auto

        .contacts
          float: right
          color: $gray-soft
          font-weight: 400

      .content
        width: 518px
        height: 342px
        box-shadow: 0 10px 20px rgba(165, 131, 224, 0.18)
        border-radius: 10px
        background-color: $white
        margin: 2rem auto
        padding: 30px
        font-size: 0.8rem
        color: $gray-light

        .name
          background-color: $white-gray
          border-radius: 30px
          padding: 10px
          font-weight: 600
          margin-left: 10px

        img
          margin-top: 20px
          margin-left: -30px
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
                  g-image(src='~/assets/icons/play-button@black.svg')
            p.email-paragraph
              | Experimente de graça.
              br
              | Nenhum cartão de crédito é necessário.
              br
              | Configuração simples e rápida
          g-image(src='~/assets/images/doted-square.jpg' class='doted-square d-none d-xl-block')
          g-image(src='~/assets/images/doted-square.jpg' class='doted-square d-none d-xl-block')

    .section.section-a
      .container
        .row
          .col-lg-4
            h3 Direcione campanhas multicanais para cada momento da jornada do cliente
            p.subtitle Veja como organizar essas e outras campanhas em réguas de relacionamento
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
                    .step-title &nbsp;
                    .step-icon
                      g-image(src='~/assets/icons/person.svg')
                    .subtitle.step-subtitle Bruno vai fazer aniversário
                li
                  .step
                    .step-title 10 Dias antes
                    .step-icon
                      g-image(src='~/assets/icons/envelope@black.svg')
                    .subtitle.step-subtitle Email:
                      strong  "seu aniversário está chegando"
                li
                  .step
                    .step-title 1 Dia antes
                    .step-icon
                      g-image(src='~/assets/icons/envelope@black.svg')
                    .subtitle.step-subtitle Email:
                      strong  "é amanhã"
                li
                  .step
                    .step-title No dia do aniversário
                    .step-icon
                      g-image(src='~/assets/icons/envelope@white.svg')
                    .subtitle.step-subtitle Email:
                      strong  “mensagem de aniversário + cupom desconto”

    .section.section-b
      .container
        .row
          .col-lg-6
            h3 Uma ferramenta completa
              br
              span.text-pink para criar |
            .subtitle De maneira simples e intuitiva, criamos um software com tudo que você precisa quando o assunto é marketing e vendas. Conheça o Bulldesk e comece a gerar mais resultados através da inteligência comercial.

            .container.items
              .row.no-gutters
                .col-4.item
                  g-image(src='~/assets/icons/check.svg')
                  | CRM de vendas
                .col-4.item
                  g-image(src='~/assets/icons/check.svg')
                  | Automações prontas
              .row.no-gutters
                .col-4.item
                  g-image(src='~/assets/icons/check.svg')
                  | Campanhas
                .col-4.item
                  g-image(src='~/assets/icons/check.svg')
                  | Relatórios ao vivo

            .know-more
              a.btn-know-more
                | Conheça mais
                g-image(src='~/assets/icons/play-button@white.svg')

          .col-lg-6.right-col
            .header
              | Segmento:
              strong.text-pink  Novos leads
              span.contacts 180 contatos
            .content
                | Olá,
                span.text-pink.name Fulano de tal
                br
                br
                br
                | Seja bem-vindo ao seu editor de mensagem e e-mail personalizado.
                br
                br
                br
                | A partir de agora você pode selecionar todos seus  contatos e disparar um determinado conteúdo para seus clusters selecionados.
                br
                br
                br
                | Atenciosamente,
                br
                | - Bulldesk
                g-image(src='~/assets/images/editor-footer.png')
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
