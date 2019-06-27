<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  .hero
    margin-top: 45px
    margin-bottom: 25px

    h1
      font-size: 3.9375rem
      font-weight: bold
      line-height: 0.87
      color: $gray-dark

    .row
      div
        position: relative

        img
          position: absolute
          z-index: 3
          top: calc(100% - 70px)
          display: block
          max-width: 100%

  .section-a
    position: relative
    z-index: 2
    padding-top: 115px
    padding-bottom: 160px

    &:before
      content: ""
      position: absolute
      bottom: 0
      left: 0
      z-index: -1
      display: block
      width: 100vw
      height: 1075px
      background: bottom center no-repeat url(~@/assets/images/case-bg-section-a.png)

    h2
      margin: 0 0 45px
      font-size: 1.125rem
      font-weight: bold
      color: $gray-dark

    p
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

  .section-b
    position: relative
    z-index: 1
    padding-top: 90px
    padding-bottom: 265px
    color: $white-gray

    @media only screen and (max-width: map-get($grid-breakpoints, 'lg'))
      text-align: center

    &:before
      content: ""
      position: absolute
      left: 0
      bottom: -80px
      z-index: -1
      display: block
      width: 100vw
      height: 1621px
      background: bottom center no-repeat url(~@/assets/images/case-bg-section-b.png)

    h2
      margin-bottom: 30px
      font-size: 1.625rem
      font-weight: bold

    p
      margin: 0 0 30px
      font-size: 0.75rem
      line-height: 2.08

    a
      @media only screen and (max-width: map-get($grid-breakpoints, 'lg'))
        margin-bottom: 30px

  .section-c
    position: relative
    z-index: 2
    margin-top: 50px
    margin-bottom: 125px

    h2
      margin-top: 55px
      margin-bottom: 32px
      font-size: 1.625em
      font-weight: bold
      line-height: 1.15

    p
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

    img
      display: block
      margin-left: -7.5%
      max-width: 115%

  .section-d
    position: relative
    z-index: 2
    padding-top: 85px
    padding-bottom: 160px
    color: $white-gray

    &:before
      content: ""
      position: absolute
      left: 0
      bottom: -60px
      z-index: -1
      display: block
      width: 100vw
      height: 1192px
      background: bottom center no-repeat url(~@/assets/images/case-bg-section-d.png)

    .row:first-of-type
      margin-bottom: 40px

      h2
        font-size: 1.625rem
        font-weight: bold

      p
        font-size: 0.75rem
        line-height: 2.08
        color: $white-gray

    .row:last-of-type
      p
        font-size: 0.75rem
        line-height: 2.08

      .bg
        padding-left: 0
        padding-right: 30px

        div
          padding: 84px 57px 64px 81px
          background: bottom center no-repeat url(~@/assets/images/case-bg-2-section-d.png)
          background-size: 100% 100%

        p
          font-size: 0.75rem
          line-height: 1

        q
          position: relative
          display: block
          font-size: 1rem
          font-style: italic
          line-height: 1.56

          &:before
            content: "“"
            position: absolute
            right: 102%
            bottom: 98%
            font-size: 4.75rem
            line-height: 0.1

          &:after
            content: "“"
            position: absolute
            left: 100%
            top: 80%
            font-size: 4.75rem
            line-height: 0.1
            transform: rotate(180deg)

  .section-e
    position: relative
    z-index: 1
    padding-top: 90px
    padding-bottom: 255px
    color: $white-gray

    &:before
      content: ""
      position: absolute
      left: 0
      bottom: 0px
      z-index: -1
      display: block
      width: 100vw
      height: 1228px
      background: bottom center no-repeat url(~@/assets/images/case-bg-section-e.png)

    &:after
      content: ""
      position: absolute
      left: 0
      bottom: 100%
      z-index: -1
      display: block
      width: 100vw
      height: 200px
      background: $black

    h2
      margin-bottom: 75px
      font-size: 1.625rem
      font-weight: bold

    p
      font-size: 0.75rem
      line-height: 2.08


</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="light" logo="black")

    .hero
      .container
        .row
          .col-lg-7
            h1 Como o Hotel Zion cresceu 175% em dois anos com a ajuda do Bulldesk
              span.dot.green

          .col-5.d-none.d-lg-block
            g-image(src='~/assets/images/case-zion-bg-hero.png')

    .section-a
      .container
        .row
          .col-lg-5.col-xl-4
            h2 O Hotel Zion
            p O Hotel Zion é um hotel executivo localizado na cidade de São José, em de Santa Catarina. Criado em 2010 a partir de um sonho do proprietário Marcelo Müller e Joisaine Moresco Müller, o hotel conta com uma localização privilegiada, próximo à beira-mar de São José. Seu público é composto principalmente por executivos e representantes comerciais que vêm até a região à negócios, uma vez que a cidade é um pólo industrial e comercial.
              br
              br
              | A estrutura do hotel conta com 7 andares e 55 acomodações, que são atendidos por até 15 funcionários durante a alta temporada de verão. O café da manhã oferece, além de deliciosos quitutes, uma vista incrível para a beira-mar da cidade.

    .section-b
      .container
        .row.justify-content-between.align-items-center
          .col-lg-3
            h2 Confira quais estratégias foram usadas
            p Veja como funciona o Bulldesk e suas principais funções em um vídeo direto ao ponto.
              strong Você vai se surpreender.

            b-button(href="https://app.bulldesk.com.br/cadastro", variant="green")
                | Teste grátis
                g-image(src="../assets/icons/play-button@black.svg", alt="")

          .col-lg-8
            VideoLauncher(videoID="q7kIWRT_zPs" image="/assets/static/src/assets/images/video-placeholder.jpg")

    .section-c
      .container
        .row.justify-content-between
          .col-md-7
            g-image(src="~/assets/images/case-zion-section-c.png", alt="")

          .col-md-4
            h2 Sobre o problema
            p De acordo com a diretora comercial do Zion, Marina Elisa Müller, o hotel tinha a necessidade de desenhar seu processo comercial. Com um atendimento que acontecia apenas no balcão do hotel, o Zion contava com um site pouco atrativo e nenhuma prospecção de clientes. Dessa forma, a equipe percebeu que era hora de mudar esse cenário e começou a buscar alternativas para marcar presença no mundo digital.

    .section-d
      .container
        .row
          .col-auto
            h2 Sobre a solução

          .col
            p Diante da necessidade eminente de novas formas de fazer negócio, Marina fez uma pesquisa em busca de plataformas que facilitam e automatizam processos no marketing digital. Ao se deparar com o Bulldesk, a escolha foi feita e a estrutura comercial começou a se desenhar. Para ela, as razões de optar pelo Bulldesk foram o preço bom e o fato da plataforma ser completa.

        .row.justify-content-between.align-items-center
          .col-7.bg
            div
              p
                q Vindo essa necessidade, junto com o Bulldesk, a gente criou esse setor (comercial). A gente fez um site novo, todo apelativo para vendas mesmo, com formulário, landing page. O Bulldesk nos auxiliou a organizar também: o lead entra ali e rapidamente a gente já responde pra tentar converter a venda,
                br
                | conta Marina

          .col-5
           p Sendo Assim, o Bulldesk foi implantado na empresa no ano de 2017. Para Marina, a adaptação à plataforma foi natural, já que o setor comercial mal existia antes desse processo e a interface é de fácil compreensão.
              br
              br
              | As ferramentas mais usadas pelo Zion são a criação de e-mail marketing, formulários e landing pages. Além disso, é claro, aproveitam as funcionalidades de CRM do Bulldesk, acompanhando o lead do contato inicial até a hospedagem.

    .section-e
      .container
        .row
          .col-12.text-center
            h2 Os resultados

        .row
          .col-4
            p É por conta dessa abordagem, onde nenhum cliente se perde ou fica sem resposta, que o atendimento do hotel é elogiado sempre. “Eu notei, principalmente depois que a gente usou o Bulldesk, que a gente tem um rápido retorno. Os clientes elogiam muito o nosso atendimento na parte de reservas.”, diz Marina.

          .col-4
            p De acordo com ela, os resultados começaram a aparecer rapidamente. “A gente utiliza já faz dois anos e de resultado a gente teve um crescimento bem grande porque o lead não se perde mais.”. Além do mais, a ajuda do Bulldesk para compor um site voltado para vendas também foi fundamental. “Antes, com o site antigo, era só tem um site de hotel, agora não. Agora a gente tem um site voltado para venda.”.

          .col-4
            p Falando em números, o crescimento após dois anos de Bulldesk foi em torno de 175%. E a expectativa da equipe comercial é que o crescimento continue a crescer junto com o Bulldesk.

</template>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'
  import EmailInput from '../components/EmailInput'
  import { BButton } from 'bootstrap-vue'
  import VideoLauncher from '../components/VideoLauncher'

  export default {
    components: {
      Layout,
      Nav,
      EmailInput,
      BButton,
      VideoLauncher,
    },

    metaInfo: {
      title: 'O que é CRM?',
    },

    data () {
      return {
        email: ''
      }
    }
  }
</script>
