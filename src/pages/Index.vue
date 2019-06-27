<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  header
    background-position: 80px 0
    background-position: 100px 0
    background-repeat: no-repeat
    background-size: auto 100%
    height: 100%
    min-height: 800px

    @media only screen and (min-width: 440px)
      background-position: 150px

    @media only screen and (min-width: 640px)
      background-position: 200px

    @media only screen and (min-width: 840px)
      background-position: 250px

    @media only screen and (min-width: 1026px)
      background-position: 200px 0

    @media only screen and (min-width: 1140px)
      background-position: 250px 0

    @media only screen and (min-width: 1240px)
      background-position: 300px 0

    @media only screen and (min-width: 1340px)
      background-position: 400px 0

    @media only screen and (min-width: 1440px)
      background-position: 450px 0

    @media only screen and (min-width: 1640px)
      background-position: 550px 0

    @media only screen and (min-width: 1840px)
      background-position: 650px 0

    @media only screen and (max-width: 1025px)
      background-image: url(~@/assets/images/header@700.jpg)

    @media only screen and (max-width: 1440px)
      background-image: url(~@/assets/images/header@1000.jpg)

    @media only screen and (max-width: 2000px)
      background-image: url(~@/assets/images/header@1600.jpg)

    @media only screen and (min-width: 2001px)
      background-image: url(~@/assets/images/header@2200.jpg)
      background-position: 750px 0

    @media only screen and (min-width: 2200px)
      background-position: 850px 0

    @media only screen and (min-width: 2401px)
      background-position: 950px 0

    .doted-square-a
      position: absolute
      top: 190px

      @media only screen and (max-width: 1500px)
        display: none !important

      @media only screen and (min-width: 1500px) and (max-width: 1600px)
        left: 5rem

      @media only screen and (min-width: 1601px) and (max-width: 1800px)
        left: 8rem

      @media only screen and (min-width: 1801px) and (max-width: 2000px)
        left: 13rem

      @media only screen and (min-width: 2001px) and (max-width: 2200px)
        left: 18rem

      @media only screen and (min-width: 2201px) and (max-width: 2400px)
        left: 23rem

      @media only screen and (min-width: 2401px)
        left: 30rem

    .hero
      height: 100%
      max-width: 480px

      h1.title
        max-width: 300px

        @media only screen and (max-width: 400px)
          font-size: 2.6rem

        @media only screen and (min-width: 401px) and (max-width: 700px)
          font-size: 3rem

        span
          color: $pink

      p.subtitle
        margin-top: 1.5rem
        max-width: 420px

      form
        margin-left: 0px

      .email-paragraph
        width: auto
        max-width: 265px
        height: 53px
        color: $gray-light
        font-size: 0.625rem
        font-weight: 400
        letter-spacing: 0.2px
        line-height: 20px
        margin: 1.4rem 0rem 0rem 1.9rem

      .doted-square-b
        position: absolute
        top: 554px

        @media only screen and (max-width: 820px)
          display: none !important

        @media only screen and (min-width: 820px) and (max-width: 1300px)
          left: 40rem

        @media only screen and (min-width: 1301px) and (max-width: 1400px)
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

  .section-a
    height: 1156px
    margin-top: -23rem
    background-repeat: no-repeat
    background-size: cover
    background-image: url(~@/assets/images/home-bg-a.png)
    background-position: -40rem

    @media only screen and (min-width: 800px) and (max-width: 1800px)
      background-position: -35rem

    @media only screen and (max-width: 990px)
      background-image: url(~@/assets/images/home-bg-a.png), url(~@/assets/images/home-bg-a.png)
      background-position: -40rem 0rem, -40rem 15rem

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

      @media only screen and (max-width: 670px)
        padding-top: 36rem

      .subtitle
        width: auto
        max-width: 286px
        margin-top: 1.2rem

        @media only screen and (max-width: 990px)
          max-width: 100%

      .steps-col
        margin-top: -1.5rem

        @media only screen and (max-width: 990px)
          margin-top: 2.5rem

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
              font-size: 0.625rem
              letter-spacing: 0.2px
              line-height: 25px
              text-transform: uppercase

              @media only screen and (max-width: 400px)
                font-size: 0.325rem
                line-height: 15px
                padding: 0.3rem 0.3rem

              @media only screen and (min-width: 401px) and (max-width: 600px)
                font-size: 0.425rem
                line-height: 15px
                padding: 0.3rem 0.5rem

          .nav-item.active
            .nav-link
              background-color: $purple
              color: $white-gray
              border-radius: 25px

        .examples
          margin-top: 4rem

          img
            width: 100%


  .section-b
    margin-top: 6rem
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

    @media only screen and (min-width: 1025px) and (max-width: 1600px)
      margin-top: 2rem

    @media only screen and (min-width: 1601px) and (max-width: 1900px)
      margin-top: 4rem

    @media only screen and (min-width: 1901px) and (max-width: 2200px)
      margin-top: 6rem

    @media only screen and (min-width: 2201px)
      margin-top: 8rem

    h3
      span
        font-weight: normal

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
        font-size: 0.75rem
        font-weight: 400
        letter-spacing: 0.2px
        line-height: 25px

        @media only screen and (max-width: 440px)
          font-size: 0.65rem
          padding: 30px 0px

        img
          margin-right: 10px

    .know-more
      margin-top: 3rem

      @media only screen and (max-width: 600px)
        text-align: center
        padding-top: 0.5rem

      .btn-default
        background-color: $purple
        color: $white-gray

    .right-col
      height: 500px
      letter-spacing: 0.2px

      @media only screen and (max-width: 990px)
        margin-top: 80px

      .header
        width: 336px
        height: 61px
        border-radius: 10px
        font-size: 0.75rem
        font-weight: 500
        line-height: 61px
        background-color: $white-gray
        padding: 0 20px
        margin: auto
        box-shadow: 0 10px 20px rgba(101, 68, 159, 0.2)

        @media only screen and (max-width: 480px)
          width: 236px
          text-align: center

        @media only screen and (max-width: 990px)
          font-size: 0.65rem

        &:after
          content: ''
          display: block
          position: absolute
          background-image: url(~@/assets/images/doted-line.png)
          width: 5px
          min-height: 27px
          left: 50%
          top: 62px

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
        font-size: 0.75rem
        color: $gray-light
        box-shadow: 0 10px 20px rgba(101, 68, 159, 0.2)

        @media only screen and (max-width: 480px)
          width: 300px
          max-height: 340px
          font-size: 0.65rem

        @media only screen and (min-width: 481px) and (max-width: 990px)
          font-size: 0.65rem

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

    @media only screen and (max-width: 440px)
      margin-top: -28rem
      background-position: -48rem 3rem

    @media only screen and (min-width: 441px) and (max-width: 990px)
      margin-top: -28rem
      background-position: -58rem

    @media only screen and (min-width: 990px) and (max-width: 1200px)
      background-position: -54rem

    @media only screen and (min-width: 1201px) and (max-width: 1400px)
      background-position: -50rem

    @media only screen and (min-width: 1401px) and (max-width: 1600px)
      background-position: -46rem

    @media only screen and (min-width: 1601px) and (max-width: 1800px)
      background-position: -42rem

    @media only screen and (min-width: 1801px) and (max-width: 2000px)
      background-position: -38rem

    @media only screen and (min-width: 2001px) and (max-width: 2200px)
      background-position: -32rem

    @media only screen and (min-width: 2201px) and (max-width: 2300px)
      background-position: -26rem

    @media only screen and (min-width: 2301px) and (max-width: 2400px)
      background-position: -22rem

    @media only screen and (min-width: 2401px) and (max-width: 2500px)
      background-position: -18rem

    @media only screen and (min-width: 2501px)
      background-position: -14rem

    .doted-square
      position: absolute
      left: 62%
      top: 3100px

      @media only screen and (max-width: 1025px)
        display: none

      @media only screen and (max-width: 1600px)
        left: 70%

    .container
      padding-top: 57rem

      @media only screen and (max-width: 990px)
        padding-top: 38rem

      @media only screen and (max-width: 440px)
        padding-top: 34rem

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
            width: 0px

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
            height: 280px
            margin-left: 20px

          @media only screen and (min-width: 401px) and (max-width: 690px)
            width: 100%
            height: 350px
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
          text-align: center

        h4
          font-size: 0.875rem
          font-weight: 700
          letter-spacing: -0.15px
          line-height: 30px

        .subtitle
          width: auto
          font-size: 0.75rem
          font-weight: 400
          letter-spacing: 0.2px
          line-height: 25px
          color: $white-gray

        table
          margin-top: 10px
          margin-bottom: 30px

          @media only screen and (max-width: 990px)
            margin-left: auto
            margin-right: auto

          tr
            td
              padding: 8px 16px 8px 0px
              font-size: 0.75rem
              font-weight: 400
              letter-spacing: 0.2px
              line-height: 25px

  .section-d
    margin-top: 2rem
    background-repeat: no-repeat
    background-image: url(~@/assets/images/home-bg-d.png)
    background-size: 2560px auto
    background-position: 0rem 0rem
    height: 1128px
    z-index: 9
    position: relative

    @media only screen and (max-width: 2400px)
      background-position: -10rem

    @media only screen and (max-width: 2300px)
      background-position: -12rem

    @media only screen and (max-width: 2200px)
      background-position: -18rem

    @media only screen and (max-width: 2000px)
      background-position: -22rem

    @media only screen and (max-width: 1800px)
      background-position: -26rem

    @media only screen and (max-width: 1600px)
      background-position: -32rem

    @media only screen and (max-width: 1400px)
      background-position: -40rem -2rem

    @media only screen and (max-width: 1200px)
      background-position: -46rem -2rem

    @media only screen and (max-width: 1200px)
      background-position: -52rem -2rem

    @media only screen and (max-width: 1000px)
      background-position: -54rem -2rem
      margin-top: -2rem

    @media only screen and (max-width: 800px)
      background-position: -60rem -2rem
      margin-top: -4rem

    @media only screen and (max-width: 600px)
      background-position: -68rem -4rem
      margin-top: -6rem

    @media only screen and (max-width: 400px)
      background-position: -74rem -6rem

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
            background-size: 99%
            background-repeat: no-repeat
            width: 50px
            height: 50px
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
            font-size: 0.75rem
            letter-spacing: 0.2px
            text-align: center
            margin-top: 2rem
            margin-left: auto
            margin-right: auto
            width: 70%

          .author
            color: $gray-light
            font-size: 0.625rem
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
            font-size: 0.75rem
            font-weight: 400
            letter-spacing: 0.2px
            line-height: 20px

            @media only screen and (max-width: 640px)
              text-align: center

            @media only screen and (max-width: 990px)
              font-size: 0.65rem
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
    background-size: 2560px auto
    background-image: url(~@/assets/images/home-bg-e.png)
    background-position: 0rem -4rem
    height: 1623px
    margin-top: -50rem
    z-index: 1
    position: relative

    @media only screen and (max-width: 2300px)
      background-position: -14rem

    @media only screen and (max-width: 2200px)
      background-position: -22rem

    @media only screen and (max-width: 2000px)
      background-position: -28rem

    @media only screen and (max-width: 1800px)
      background-position: -38rem

    @media only screen and (max-width: 1600px)
      background-position: -48rem

    @media only screen and (max-width: 1400px)
      background-position: -60rem

    @media only screen and (max-width: 1200px)
      background-position: -66rem

    @media only screen and (max-width: 1000px)
      background-position: -72rem

    @media only screen and (max-width: 800px)
      background-position: -82rem

    @media only screen and (max-width: 600px)
      background-position: -92rem

    @media only screen and (max-width: map-get($grid-breakpoints, 'md'))
      background-size: 2560px 100%
      margin-top: -18rem
      height: 1023px

    .container
      padding-top: 45rem

      @media only screen and (max-width: 990px)
        padding-top: 35rem
        text-align: center

      @media only screen and (max-width: map-get($grid-breakpoints, 'md'))
        padding-top: 12rem

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
          padding: 1rem
          margin-bottom: 4rem

        img
          width: 100%

      .btn-default
        img
          width: 12px
</style>

<template lang="pug">
  Layout
    div
      header.d-flex
        g-image(src="~/assets/images/doted-square@3x2.png" class="doted-square-a" alt="")
        .container
          Nav(type="dark")

          .hero.d-flex.align-items-center
            div
              h1.title Inteligência comercial de forma simples
                span.dot.green
              p.subtitle Ferramenta de controle vendas, gerenciamento de contatos e automação de relacionamento.
              email-input(placeholder="Insira seu email aqui" identifier="home")
              p.email-paragraph
                | Experimente de graça.
                br
                | Nenhum cartão de crédito é necessário.
                br
                | Configuração simples e rápida
            g-image(src="~/assets/images/doted-square@3x4.png" class="doted-square-b" alt="")

      .section.section-a
        .container
          .row
            .col-lg-4
              h3 Direcione campanhas multicanais para cada momento da jornada do cliente
              p.subtitle Veja como organizar essas e outras campanhas em réguas de relacionamento
            .col-lg-8.steps-col
                b-nav(pills)
                  b-nav-item(:class="{ active: example == 0 }" @click="example = 0") Aniversário
                  b-nav-item(:class="{ active: example == 1 }" @click="example = 1") Reaquecimento
                  b-nav-item(:class="{ active: example == 2 }" @click="example = 2") Inbound Marketing
                  b-nav-item(:class="{ active: example == 3 }" @click="example = 3") Whatsapp
                  b-nav-item(:class="{ active: example == 4 }" @click="example = 4") Check-in Hotel
                .examples
                  g-image(src="~/assets/images/timeline/aniversario.png" alt="Fluxo de Aniversário" v-if="example == 0")
                  g-image(src="~/assets/images/timeline/reaquecimento.png" alt="Fluxo de Reaquecimento" v-if="example == 1")
                  g-image(src="~/assets/images/timeline/inbound-marketing.png" alt="Fluxo de Inbound Marketing" v-if="example == 2")
                  g-image(src="~/assets/images/timeline/whatsapp.png" alt="Fluxo de Whatsapp" v-if="example == 3")
                  g-image(src="~/assets/images/timeline/check-in-hotel.png" alt="Fluxo de Check-in Hotel" v-if="example == 4")

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
                    g-image(src='~/assets/icons/check.svg' alt='Check')
                    | CRM de vendas
                  .col-6.col-xl-4.item
                    g-image(src='~/assets/icons/check.svg' alt='Check')
                    | Automações prontas
                .row.no-gutters
                  .col-6.col-xl-4.item
                    g-image(src='~/assets/icons/check.svg' alt='Check')
                    | Campanhas
                  .col-6.col-xl-4.item
                    g-image(src='~/assets/icons/check.svg' alt='Check')
                    | Relatórios ao vivo

              .know-more
                b-button(href="https://app.bulldesk.com.br/cadastro", variant="purple")
                  | Conheça mais
                  g-image(src="../assets/icons/play-button@white.svg", alt="")

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
                  g-image(src='~/assets/images/editor-footer.png' alt='')

      .section.section-c
        g-image(src="~/assets/images/doted-square@3x4.png" class="doted-square" alt="")
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
                  tbody
                    tr
                      td
                        g-image(src='~/assets/icons/content.svg' alt='Conteudo')
                      td
                        | Organizar o seu processo comercial
                    tr
                      td
                        g-image(src='~/assets/icons/income.svg' alt='Renda')
                      td
                        | Automatizar marketing e vendas
                b-button(href="https://app.bulldesk.com.br/cadastro", variant="green")
                  | Teste grátis
                  g-image(src="../assets/icons/play-button@black.svg", alt="")

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
                          g-image(src='~/assets/images/cases/buscape.png' alt='Imagem')
                        .col-12.col-md-6.content
                          .logo
                            g-image(src='~/assets/images/cases/buscape-logo.png' alt='Buscape')
                          .description Com o Bulldesk foi possível captar dados, enviar e-mails automáticos, e-mail que acontecem em tempo real.
                          .author ANTÔNIO FRANCISCO
                  swiper-slide
                    .container
                      .row
                        .col-12.col-md-6.image
                          g-image(src='~/assets/images/cases/buscape.png' alt='Imagem')
                        .col-12.col-md-6.content
                          .logo
                            g-image(src='~/assets/images/cases/buscape-logo.png' alt='Buscape')
                          .description Com o Bulldesk foi possível captar dados, enviar e-mails automáticos, e-mail que acontecem em tempo real.
                          .author ANTÔNIO FRANCISCO
                  swiper-slide
                    .container
                      .row
                        .col-12.col-md-6.image
                          g-image(src='~/assets/images/cases/buscape.png' alt='Imagem')
                        .col-12.col-md-6.content
                          .logo
                            g-image(src='~/assets/images/cases/buscape-logo.png' alt='Buscape')
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
                g-image(src='~/assets/images/cases/other-cases.png' alt='Cases')
            .row.button-row
              .col-12
                b-button(href="/cases", variant="purple")
                  | Veja mais histórias de sucesso
                  g-image(src="../assets/icons/play-button@white.svg", alt="")

      .section.section-e
        .container
          .row
            .col-12.col-lg-3
              h3 Ainda está com dúvidas?
              .subtitle
                | Veja como funciona o Bulldesk e suas principais funções em um vídeo direto ao ponto.
                strong  Você vai se surpreender.
              b-button.d-none.d-lg-inline(href="https://app.bulldesk.com.br/cadastro", variant="green")
                | Teste grátis
                g-image(src="../assets/icons/play-button@black.svg", alt="")
            .col-12.col-lg-9
              .video-container
                g-image(src='~/assets/images/home-video.png' alt='Video')
              b-button.d-inline.d-lg-none(href="https://app.bulldesk.com.br/cadastro", variant="green")
                | Teste grátis
                g-image(src="../assets/icons/play-button@black.svg", alt="")
</template>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'
  import EmailInput from '../components/EmailInput'
  import { BNav, BNavItem, BButton, } from 'bootstrap-vue'

  import 'swiper/dist/css/swiper.css'

  export default {
    components: {
      Layout,
      Nav,
      EmailInput,
      BNav,
      BNavItem,
      BButton,
      swiper: () =>
        import ('vue-awesome-swiper')
        .then(m => window ? m.swiper : null)
        .catch(),
      swiperSlide: () =>
        import ('vue-awesome-swiper')
        .then(m => window ? m.swiperSlide : null)
        .catch(),
    },

    metaInfo: {
      title: 'Inteligência comercial de forma simples'
    },

    data() {
      return {
        email: '',
        example: 0,
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
