<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

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
        font-weight: 700

        @media only screen and (max-width: 400px)
          font-size: 3.1rem

        @media only screen and (min-width: 401px) and (max-width: 700px)
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

        @media only screen and (max-width: 400px)
          max-width: 320px

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
        max-width: 265px
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

  .section-a
    height: 1076px
    margin-top: -23rem
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
      max-width: 304px

      @media only screen and (max-width: 990px)
        max-width: 100%

    .container
      padding-top: 38rem
      font-size: 1rem

      @media only screen and (max-width: 670px)
        padding-top: 33rem

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

            @media only screen and (max-width: 400px)
              font-size: 0.3rem
              line-height: 15px
              padding: 0.3rem 0.3rem

            @media only screen and (min-width: 401px) and (max-width: 600px)
              font-size: 0.4rem
              line-height: 15px
              padding: 0.3rem 0.5rem

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
    margin-top: 8rem
    background-image: url(~@/assets/images/elipse@opaque.png), url(~@/assets/images/home-bg-b.png)
    background-size: 160px 160px, 400px 400px
    background-position: 52% 320px, 60% 20px
    background-repeat: no-repeat

    @media only screen and (max-width: 600px)
      background-image: url(~@/assets/images/home-bg-b.png)
      background-size: 400px 400px
      background-position: -120px 495px

    @media only screen and (min-width: 601px) and (max-width: 750px)
      background-image: url(~@/assets/images/home-bg-b.png)
      background-size: 400px 400px
      background-position: 0px 455px

    @media only screen and (min-width: 751px) and (max-width: 990px)
      background-image: url(~@/assets/images/home-bg-b.png)
      background-size: 400px 400px
      background-position: 85px 445px

    @media only screen and (min-width: 1300px) and (max-width: 1800px)
      background-size: 160px 160px, 450px 400px

    @media only screen and (min-width: 1801px)
      background-size: 160px 160px, 500px 400px
      background-position: 52% 320px, 55% 20px

    @media only screen and (min-width: 1600px) and (max-width: 1900px)
      margin-top: 10rem

    @media only screen and (min-width: 1901px) and (max-width: 2200px)
      margin-top: 12rem

    @media only screen and (min-width: 2201px)
      margin-top: 14rem

    .subtitle
      width: auto
      max-width: 286px
      margin-top: 2rem

      @media only screen and (max-width: 990px)
        max-width: 100%

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

        @media only screen and (max-width: 440px)
          font-size: 0.7rem
          padding: 30px 0px

        img
          margin-right: 10px

    .know-more
      margin-top: 3rem

      .btn-default
        background-color: $purple
        color: $white-gray

    .right-col
      height: 500px

      @media only screen and (max-width: 990px)
          margin-top: 80px

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
        box-shadow: 0 10px 20px rgba(165, 131, 224, 0.18)

        @media only screen and (max-width: 480px)
          width: 236px
          text-align: center

        @media only screen and (max-width: 990px)
          font-size: 0.7rem

        .contacts
          float: right
          color: $gray-soft
          font-weight: 400

      .content
        width: 418px
        max-height: 365px
        border-radius: 10px
        background-color: $white
        margin: 2rem auto
        padding: 30px
        font-size: 0.8rem
        color: $gray-light
        box-shadow: 0 10px 20px rgba(165, 131, 224, 0.18)

        @media only screen and (max-width: 480px)
          width: 300px
          max-height: 340px
          font-size: 0.7rem

        @media only screen and (min-width: 481px) and (max-width: 990px)
          font-size: 0.7rem

        .name
          background-color: $white-gray
          border-radius: 30px
          padding: 10px
          font-weight: 600
          margin-left: 10px

        img
          margin-top: 20px
          margin-left: -30px
          width: inherit

  .section-c
    height: 1800px
    margin-top: -42rem
    background-repeat: no-repeat
    background-size: cover
    background-image: url(~@/assets/images/home-bg-c.png)
    background-position: -42rem

    @media only screen and (max-width: 990px)
      margin-top: -30rem
      background-position: -58rem

    .container
      padding-top: 57rem

      @media only screen and (max-width: 990px)
        padding-top: 35rem

      .col-left

        .title
          width: auto
          max-width: 480px
          float: right
          margin-right: 40px

          h3
            color: $white-gray
            text-align: center

            @media only screen and (max-width: 990px)
              color: $purple

        .image-a
          width: 80%
          height: 500px
          margin: 50px auto
          background-image: url(~@/assets/images/home-bg-c-2.png)
          background-size: 100%
          background-repeat: no-repeat

        .image-b
          height: 250px
          width: 40%
          background-image: url(~@/assets/images/elipse@opaque.png)
          background-size: 100%
          background-repeat: no-repeat
          margin-top: -220px
          margin-left: 255px

          @media only screen and (max-width: 990px)
            background-image: none

        .image-c
          width: 145%
          height: 580px
          background-image: url(~@/assets/images/home-bg-c-3.png)
          background-size: 100%
          background-repeat: no-repeat
          margin-top: -570px
          margin-left: -275px

          @media only screen and (max-width: 400px)
            width: 90%
            height: 300px
            margin-left: 20px

          @media only screen and (min-width: 401px) and (max-width: 690px)
            width: 100%
            height: 420px
            margin-left: -20px

          @media only screen and (min-width: 691px) and (max-width: 990px)
            width: 120%
            height: 480px
            margin-left: -160px

      .col-right
        padding-top: 105px
        margin-left: -20px
        color: $white-gray

        @media only screen and (max-width: 990px)
          margin-left: 0px
          padding-top: 0px

        h4
          font-size: 1rem
          font-weight: 700
          letter-spacing: -0.21px
          line-height: 30px

        .subtitle
          width: auto
          font-family: Montserrat
          font-size: 0.7rem
          font-weight: 400
          letter-spacing: 0.24px
          line-height: 25px
          color: $white-gray

        table
          margin-top: 10px
          margin-bottom: 30px

          tr
            td
              padding: 8px 16px 8px 0px
              font-size: 0.7rem
              font-weight: 400
              letter-spacing: 0.24px
              line-height: 25px

        .btn-default
          img
            width: 12px

  .section-d
    margin-top: 80px
    background-repeat: no-repeat
    background-size: 100% 1022px
    background-image: url(~@/assets/images/home-bg-d.png)
    background-position: 0px 0px
    height: 1128px
    z-index: 9
    position: relative

    @media only screen and (max-width: 440px)
      margin-top: -120px
      height: 1378px
      background-size: 160% 1222px
      background-position: -125px 125px

    @media only screen and (min-width: 441px) and (max-width: 990px)
      margin-top: -120px
      height: 1328px
      background-size: 160% 1222px
      background-position: -150px 100px

    .container
      h3
        margin: auto
        text-align: center

      .swiper
        margin-top: 60px

        .swiper-button-prev
          background-image: none

          .button:before
            content: ''
            background-image: url(~@/assets/images/cases/swiper-prev.png)
            background-size: cover
            width: 45px
            height: 45px
            display: block


        .swiper-button-next
          background-image: none
          right: 25px

          .button:before
            content: ''
            background-image: url(~@/assets/images/cases/swiper-next.png)
            background-size: cover
            width: 45px
            height: 45px
            display: block

        .image
          img
            width: 100%

        .content
          .logo
            text-align: center
            margin-top: 4rem

            img
              width: 25%

          .description
            color: $gray-dark
            font-size: 0.8rem
            text-align: center
            margin-top: 2rem
            margin-left: auto
            margin-right: auto
            width: 70%

          .author
            color: $gray-light
            font-size: 0.7rem
            font-weight: 700
            letter-spacing: 0.2px
            line-height: 20px
            text-transform: uppercase
            text-align: center
            margin-top: 4rem
            margin-bottom: 2rem

      .footer
        margin-top: 6rem

        .image-row
          p
            color: $gray-dark
            font-size: 0.8rem
            font-weight: 400
            letter-spacing: 0.24px
            line-height: 20px

            @media only screen and (max-width: 640px)
              text-align: center

            @media only screen and (max-width: 990px)
              font-size: 0.7rem
              line-height: 15px

          img
            width: 90%
            margin: 10px auto

        .button-row
          margin-top: 2rem
          text-align: center

          .btn-default
            background-color: $purple
            color: $white-gray
            max-width: 300px
            width: auto
            margin: auto

  .section-e
    background-repeat: no-repeat
    background-size: 120% 100%
    background-image: url(~@/assets/images/home-bg-e.png)
    background-position: 30% 0px
    height: 1623px
    margin-top: -50rem
    z-index: 1
    position: relative

    @media only screen and (max-width: 440px)
      background-size: 180% 100%

    @media only screen and (max-width: 990px)
      margin-top: -50rem

    .container
      padding-top: 45rem

      @media only screen and (max-width: 990px)
        padding-top: 42rem
        text-align: center

      h3
        margin-top: 8rem
        color: $white-gray

        @media only screen and (max-width: 1400px)
          margin-top: 6rem

      .subtitle
        color: $gray-soft
        margin-top: 1.5rem
        margin-bottom: 3rem

      .video-container
        width: 100%
        padding-top: 2.2rem
        padding-left: 2rem

        @media only screen and (max-width: 990px)
          padding-top: 0rem
          margin-bottom: 4rem

        img
          width: 100%

      .btn-default
        img
          width: 12px
</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="dark")

        .hero.d-flex.align-items-center
          div
            h1 Inteligência comercial de forma simples
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
                .col-6.col-xl-4.item
                  g-image(src='~/assets/icons/check.svg')
                  | CRM de vendas
                .col-6.col-xl-4.item
                  g-image(src='~/assets/icons/check.svg')
                  | Automações prontas
              .row.no-gutters
                .col-6.col-xl-4.item
                  g-image(src='~/assets/icons/check.svg')
                  | Campanhas
                .col-6.col-xl-4.item
                  g-image(src='~/assets/icons/check.svg')
                  | Relatórios ao vivo

            .know-more
              a.btn-default
                | Conheça mais
                g-image(src='~/assets/icons/play-button@white.svg')

          .col-lg-6.right-col
            .header
              | Segmento:
              strong.text-pink  Novos leads
              span.contacts.d-none.d-sm-block 180 contatos
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

    .section.section-c
      .container
        .row
          .col-lg-9.col-left
              .title
                h3 Você vai conhecer o verdadeiro software de automação
                .image-a
                .image-b
                .image-c
          .col-lg-3.col-right
              h4 O que você pode fazer com o Bulldesk?
              .subtitle São diversas funcionalidades que oferecemos dentro da ferramenta. Entre elas, podemos destacar as seguintes:
              table
                tr
                  td
                    g-image(src='~/assets/icons/content.svg')
                  td
                    | Organizar o seu processo comercial
                tr
                  td
                    g-image(src='~/assets/icons/income.svg')
                  td
                    | Automatizar marketing e vendas
              a.btn-default
                | Teste grátis
                g-image(src='~/assets/icons/play-button@white.svg')

    .section.section-d
      .container
        .row
          .col-12
            h3
              | Fique tranquilo,
              br
              | você está em boa companhia
        .row
          .col-12.swiper
            ClientOnly
              swiper(ref='swiper' :options='swiperOptions')
                swiper-slide
                  .container
                    .row
                      .col-12.col-md-6.image
                        g-image(src='~/assets/images/cases/buscape.png')
                      .col-12.col-md-6.content
                        .logo
                          g-image(src='~/assets/images/cases/buscape-logo.png')
                        .description Com o Bulldesk foi possível captar dados, enviar e-mails automáticos, e-mail que acontecem em tempo real.
                        .author ANTÔNIO FRANCISCO
                swiper-slide
                  .container
                    .row
                      .col-12.col-md-6.content.d-none.d-md-block
                        .logo
                          g-image(src='~/assets/images/cases/buscape-logo.png')
                        .description Com o Bulldesk foi possível captar dados, enviar e-mails automáticos, e-mail que acontecem em tempo real.
                        .author ANTÔNIO FRANCISCO
                      .col-12.col-md-6.image
                        g-image(src='~/assets/images/cases/buscape.png')
                      .col-12.col-md-6.content.d-block.d-md-none
                        .logo
                          g-image(src='~/assets/images/cases/buscape-logo.png')
                        .description Com o Bulldesk foi possível captar dados, enviar e-mails automáticos, e-mail que acontecem em tempo real.
                        .author ANTÔNIO FRANCISCO
                swiper-slide
                  .container
                    .row
                      .col-12.col-md-6.image
                        g-image(src='~/assets/images/cases/buscape.png')
                      .col-12.col-md-6.content
                        .logo
                          g-image(src='~/assets/images/cases/buscape-logo.png')
                        .description Com o Bulldesk foi possível captar dados, enviar e-mails automáticos, e-mail que acontecem em tempo real.
                        .author ANTÔNIO FRANCISCO
                .swiper-button-prev(slot='button-prev')
                  .button
                .swiper-button-next(slot='button-next')
                  .button
        .footer
          .row.image-row
            .col-12.col-md-3
              p Veja alguns outros clientes que também utilizam Bulldesk
            .col-12.col-md-9
              g-image(src='~/assets/images/cases/other-cases.png')
          .row.button-row
            .col-12
              .btn-default
                | Veja mais histórias de sucesso
                g-image(src='~/assets/icons/play-button@white.svg')

    .section.section-e
      .container
        .row
          .col-12.col-lg-3
            h3 Ainda está com dúvidas?
            .subtitle
              | Veja como funciona o Bulldesk e suas principais funções em um vídeo direto ao ponto.
              strong  Você vai se surpreender.
            a.btn-default.d-none.d-lg-inline
              | Teste grátis
              g-image(src='~/assets/icons/play-button@black.svg')
          .col-12.col-lg-9
            .video-container
              g-image(src='~/assets/images/home-video.png')
            a.btn-default.d-inline.d-lg-none
              | Teste grátis
              g-image(src='~/assets/icons/play-button@black.svg')
</template>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'

  import 'swiper/dist/css/swiper.css'

  export default {
    components: {
      Layout,
      Nav,
      swiper: () =>
        import ('vue-awesome-swiper')
        .then(m => m.swiper)
        .catch(),
      swiperSlide: () =>
        import ('vue-awesome-swiper')
        .then(m => m.swiperSlide)
        .catch(),
    },

    metaInfo: {
      title: 'Inteligência comercial de forma simples'
    },

    data() {
      return {
        email: '',
        swiperOptions: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>
