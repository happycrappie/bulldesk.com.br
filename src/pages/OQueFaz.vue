<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  header
    background: $black

  .hero
    margin-bottom: 95px
    padding: 40px 0 21.875rem
    color: #fff
    background: center bottom no-repeat url(~@/assets/images/o-que-faz-bg-hero.jpg) $black
    background-size: auto

    h1
      max-width: 750px
      margin: 0 0 80px
      font-size: 4rem
      font-weight: 700
      line-height: 1

    h2
      margin: 0 0 40px
      font-size: 1.125rem
      line-height: 1.33

    ul
      padding: 0
      list-style: none

      li
        margin: 0 0 15px
        font-size: 0.75rem

        img
          margin: 0 15px 0 0

  .topics-a
    h2
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15
      color: $gray-dark

    ul
      margin-left: -25px
      margin-right: -25px
      padding: 0
      list-style: none

      li
        margin-bottom: 60px
        padding-left: 25px
        padding-right: 25px

        h3
          height: 49px
          margin-bottom: 15px
          font-size: 1.125rem
          font-weight: bold
          line-height: 1.33
          color: $gray-dark

        p
          font-size: 0.75rem
          line-height: 2.08
          color: $gray-light

  .topics-b
    position: relative
    margin-bottom: 80px
    padding-top: 15rem
    padding-bottom: 6.25rem
    text-align: center

    &:before
      content: ""
      position: absolute
      bottom: 0
      left: calc(50% - 50vw)
      z-index: -1
      width: 100vw
      height: 1253px
      background: center bottom no-repeat url(~@/assets/images/o-que-faz-bg-topics-b.png)
      background-size: cover

    h2
      margin-bottom: 80px
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15
      color: $gray-dark

    ul
      max-width: 700px
      margin: 0 auto 90px
      padding: 0
      list-style: none

      li
        margin-bottom: 25px
        text-align: left

        h3
          margin-bottom: 15px
          font-size: 0.75rem
          line-height: 2.08
          color: $purple

          img
            margin-right: 10px

        p
          padding-left: 27px
          font-size: 0.75rem
          line-height: 2.08
          color: $gray-light




</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="dark" logo="white")

    section.hero
      .container
        h1 Esqueça as planilhas e organize o seu processo comercial de uma vez por todas
          span.dot.green

        div.row.justify-content-between.align-items-center
          div.col-lg-3
            h2 Conheça o Bulldesk, um software que vai mudar a forma na qual você vende. Com o Bulldesk você pode:

            ul
              li.d-flex.align-items-center
                g-image(src='~/assets/icons/check.svg')
                | Importe seus contatos
              li.d-flex.align-items-center
                g-image(src='~/assets/icons/check.svg')
                | Envie emails
              li.d-flex.align-items-center
                g-image(src='~/assets/icons/check.svg')
                | Crie campanhas de whatsapp
              li.d-flex.align-items-center
                g-image(src='~/assets/icons/check.svg')
                | Priorize os atendimento
              li.d-flex.align-items-center
                g-image(src='~/assets/icons/check.svg')
                | Controle o seu funil de vendas
              li.d-flex.align-items-center
                g-image(src='~/assets/icons/check.svg')
                | Veja seus relatórios

          div.col-lg-8
            g-image(src='~/assets/images/video-placeholder.jpg')

    section.container.topics-a
      .row
        .col-lg-4
          h2 Como o Bulldesk CRM ajuda a sua empresa a vender mais?

        .col-lg-8
          ul.row.d-flex
            li.col-lg-6
              h3 Organize o seu processo comercial
              p Todo empresa possuí um processo comercial. Não é simplesmente só vender. Para isso, você pode utilizar o nosso funil de vendas e ter visão geral de tudo o que está sendo negociado na sua empresa.

            li.col-lg-6
              h3 Tenha um raio-x da sua área comercial
              p Acompanhe de perto todo o progresso da sua equipe de vendas. Saiba quantas atividades cada vendedor está fazendo, quanto tempo leva para fechar um negócio ou até mesmo qual é o seu melhor vendedor.

            li.col-lg-6
              h3 Todos os seus clientes em um único lugar
              p Você pode importar a sua lista de contatos ou integrar diretamente com formulários do seu site. O importante é que você pode ter todos os seus clientes em um único lugar, trabalhando de forma personalizada com cada um deles.

            li.col-lg-6
              h3 Vá além de informações básicas
              p Cada interação com um lead é armazenada em uma linha do tempo organizada que inclui chamadas, e-mails, reuniões e anotações. Você não precisará mais procurar em uma caixa de entrada lotada ou uma planilha confusa para descobrir em que ponto ficou uma determinada relação. Automaticamente o Bulldesk consegue para saber quais conteúdos seu lead consumiu e personalizar sua abordagem.

    section.container.topics-b
      h2 Use o Bulldesk CRM e acelere suas vendas

      ul.row.d-flex.justify-content-between
        li.col-lg-5
          h3.d-flex.align-items-center
            g-image(src='~/assets/icons/check.svg')
            | Envie sequências personalizadas
          p Crie uma série de e-mails e envie-os para os seus prospects de acordo com o interesse e programação que você estabelecer.

        li.col-lg-5
          h3.d-flex.align-items-center
            g-image(src='~/assets/icons/check.svg')
            | Monte campanhas de Whatsapp
          p Trabalhe o relacionamento com os seus clientes pelo whatsapp e assim que alguém responder, ele vai diretamente para o celular do seu vendedor.

        li.col-lg-5
          h3.d-flex.align-items-center
            g-image(src='~/assets/icons/check.svg')
            | Gerencie sua equipe comercial
          p Distribua igualitariamente entre a sua equipe comercial todos os leads que entram no seu site. Dessa forma todos podem atender os novos clientes.

        li.col-lg-5
          h3.d-flex.align-items-center
            g-image(src='~/assets/icons/check.svg')
            | Marque mais reuniões
          p Com a funcionalidade calendário, você pode ver todos os agendamentos e compromissos que existem com os seus leads.

      a.btn-default.d-none.d-lg-inline
        | Quero fazer um teste gratuito
        g-image(src='~/assets/icons/play-button@black.svg')



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
      title: 'O que faz'
    }
  }
</script>
