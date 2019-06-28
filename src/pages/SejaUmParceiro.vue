<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  header
    position: relative
    z-index: 2

  .hero
    position: relative
    z-index: 1
    margin-bottom: 190px
    padding-top: 50px
    padding-bottom: 190px
    color: $white-gray

    &:before
      content: ""
      position: absolute
      top: -72px
      left: 0
      z-index: -1
      width: 100vw
      height: 1023px
      background: top center no-repeat url(~@/assets/images/seja-um-parceiro-bg-hero.png)
      pointer-events: none

    h1
      margin-bottom: 30px
      font-size: 3.9375rem
      font-weight: bold
      line-height: 0.87

    p
      max-width: 330px
      margin-bottom: 25px
      line-height: 1.56

  .section-a
    margin-bottom: 75px

    h2
      margin-bottom: 50px
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15
      color: $gray-dark

    p
      margin-bottom: 30px
      line-height: 1.56
      color: $gray-dark

    ul
      margin-top: 35px
      margin-bottom: 40px
      list-style: none

      li
        margin-bottom: 30px

        img
          margin-bottom: 20px

        p
          margin-bottom: 0
          font-size: 0.75rem
          line-height: 2.08
          color: $gray-light

  .section-b
    position: relative
    z-index: 1
    margin-bottom: 90px
    padding-top: 200px
    padding-bottom: 90px

    &:before
      content: ""
      position: absolute
      top: -400px
      left: 0
      z-index: -1
      width: 100vw
      height: 1453px
      min-height: calc(100% + 800px)
      background: top center no-repeat url(~@/assets/images/seja-um-parceiro-bg-section-b.png)
      background-size: cover
      pointer-events: none

    h2
      margin-bottom: 40px
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15
      color: $gray-dark

    ul
      margin-left: -30px
      margin-right: -30px
      margin-bottom: 0
      padding-left: 0
      list-style: none

      li
        margin-bottom: 30px
        padding-left: 30px
        padding-right: 30px

        h3
          margin: 0 0 15px
          font-size: 0.75rem
          line-height: 2.08
          color: $purple

          img
            margin-right: 10px

        p
          margin-bottom: 0
          padding-left: 27px
          font-size: 0.75rem
          line-height: 2.08
          color: $gray-light

  .section-c
    margin-bottom: 220px

    .row
      &:first-child
        margin-bottom: 60px

      &:nth-child(2)
        margin-bottom: 60px

    h2
      margin-bottom: 50px
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15
      color: $gray-dark

    p
      margin-bottom: 30px
      line-height: 1.56
      color: $gray-dark

    .left-col
      position: relative
      z-index: 1
      margin-bottom: 30px
      letter-spacing: 0.2px

      &:before
        content: ""
        position: absolute
        left: -180px
        top: 35px
        z-index: -1
        display: block
        width: 440px
        height: 436px
        background: center no-repeat url(~@/assets/images/seja-um-parceiro-bg-section-c.png)
        background-size: contain

      @media only screen and (max-width: 990px)
        margin-top: 80px

      .header
        max-width: 336px
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
        max-width: 518px
        max-height: 365px
        border-radius: 10px
        background-color: $white
        margin: 2rem auto 2.5rem
        padding: 30px 30px 12px
        font-size: 0.75rem
        color: $gray-light
        box-shadow: 0 10px 20px rgba(101, 68, 159, 0.2)

        @media only screen and (max-width: 480px)
          max-width: 300px
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
          max-width: calc(100% + 60px)

    ul
      list-style: none

      li
        h3
          font-size: 0.75rem
          font-weight: bold

        p
          font-size: 0.75rem
          line-height: 2.08
          color: $gray-light

  .section-d
    position: relative
    z-index: 1
    margin-bottom: 130px
    padding-top: 180px
    padding-bottom: 120px
    color: $white-gray

    &:before
      content: ""
      position: absolute
      top: -470px
      left: 0
      z-index: -1
      width: 100vw
      height: 1228px
      background: center top no-repeat url(~@/assets/images/seja-um-parceiro-bg-section-d.png)

    h2
      margin-bottom: 40px
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15

    p
      margin-bottom: 80px
      line-height: 1.56

    ul
      margin-bottom: 30px
      padding-left: 0
      list-style: none

      li
        margin-bottom: 30px

        img
          display: inline-block
          max-width: 100%

</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="dark" logo="white")

    section.hero
      .container
        .row
          .col-lg-7
            h1 Seus clientes querem muito mais que leads
            p Seja um parceiro Bulldesk e transforme os resultados que sua agência entrega.
            b-button(href="https://app.bulldesk.com.br/cadastro", variant="purple")
              | Quero transformar meus resultados
              g-image(src="../assets/icons/play-button@white.svg", alt="")

    section.section-a
      .container
        .row.justify-content-center
          .col-9.justify-content-center.text-center
            h2.col-lg-8.mx-auto Seu cliente não quer apenas leads. Ele quer vendas realizadas.
            p Entregar resultados incríveis é a chave para a retenção dos clientes da agência.
            p Quando sua agência trabalha com um cenário complexo, prevendo as estratégias de marketing e o processo de vendas, os resultados são muito mais relevantes para seu cliente.

        ul.row.justify-content-around
          li.col-md-6.col-lg-auto.text-center
            g-image(src="../assets/icons/seja-um-parceiro-icon-target.svg", alt="")
            p Saia do comum.
              br
              | Seja uma agência que
              br
              | está na vanguarda
              br
              | da revolução digital.
          li.col-md-6.col-lg-auto.text-center
            g-image(src="../assets/icons/seja-um-parceiro-icon-first.svg", alt="")
            p Com o Bulldesk, você automatiza
              br
              | processos de marketing digital
              br
              | e otimiza o processo de vendas
              br
              | do seu cliente.
          li.col-md-6.col-lg-auto.text-center
            g-image(src="../assets/icons/seja-um-parceiro-icon-interactive.svg", alt="")
            p Nós somos a melhor solução
              br
              | de CRM com automação
              br
              | em marketing do mercado.
          li.col-md-6.col-lg-auto.text-center
            g-image(src="../assets/icons/seja-um-parceiro-icon-server.svg", alt="")
            p Tenha o marketing
              br
              | e as vendas em
              br
              | um só lugar.

        .row
          .col.text-center
            b-button(href="https://app.bulldesk.com.br/cadastro", variant="green")
              | Quero falar com um consultor
              g-image(src="../assets/icons/play-button@black.svg", alt="")

    section.section-b
      .container
        .row
          .col-12
            h2 Por que o Bulldesk?

        ul.row
          li.col-lg-4.col-md-6.col-sm-12
            h3.d-flex.align-items-center
              g-image(src="~/assets/icons/check.svg" alt="")
              | Gestão de Leads integrada
            p Trace um perfil social, personalizado e automático de cada Lead dentro da sua base.

          li.col-lg-4.col-md-6.col-sm-12
            h3.d-flex.align-items-center
              g-image(src="~/assets/icons/check.svg" alt="")
              | Templates exclusivos para e-mail e landing pages
            p Mais agilidade para o operacional.

          li.col-lg-4.col-md-6.col-sm-12
            h3.d-flex.align-items-center
              g-image(src="~/assets/icons/check.svg" alt="")
              | Link Tracker e Lead Scoring personalizado
            p Monitoramento 24/7 da jornada de compra do Lead.

          li.col-lg-4.col-md-6.col-sm-12
            h3.d-flex.align-items-center
              g-image(src="~/assets/icons/check.svg" alt="")
              | Automação de leads
            p Eficiência no acompanhamento do lead no funil.

          li.col-lg-4.col-md-6.col-sm-12
            h3.d-flex.align-items-center
              g-image(src="~/assets/icons/check.svg" alt="")
              | Relatórios para Business Intelligence
            p Análise detalhada do funil de marketing e vendas.

          li.col-lg-4.col-md-6.col-sm-12
            h3.d-flex.align-items-center
              g-image(src="~/assets/icons/check.svg" alt="")
              | Formulários com domínio customizado
            p Personalização e aumento na geração de Leads.

          li.col-lg-4.col-md-6.col-sm-12
            h3.d-flex.align-items-center
              g-image(src="~/assets/icons/check.svg" alt="")
              | Agenda e marcador de negócios
            p Acompanhamento das taxas de conversão do fundo do funil e análise de resultados dos SQLs e MQLs.

        .row
          .col.text-center
            b-button(href="https://app.bulldesk.com.br/cadastro", variant="green")
              | Quero falar com um consultor
              g-image(src="../assets/icons/play-button@black.svg", alt="")

    section.section-c
      .container
        .row.justify-content-center
          .col-lg-8.text-center
            h2.col-lg-10.mx-auto Ainda não sabe como o Bulldesk te ajuda a ser uma agência de excelência?
            p
              b Uma ferramenta eficiente para estratégias eficientes

            p Saiba quem é, onde está e o que seu Lead busca. Organize o funil de marketing e integre com eficiência os seus objetivos com os do time de vendas do cliente.

        .row.justify-content-end.align-items-end
          .col-lg-6.left-col
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

          .col-lg-5
            ul
              li
                h3 Muito além do “Olá, *Primeiro_Nome*”
                p Faça mais do que “quatro e-mails + CTA”. Impulsione as taxas de conversão criando automações personalizadas baseadas nas páginas visitadas pelo Lead.
              li
                h3 Ganhe tempo na gestão de leads
                p Não invista mais tempo do que o necessário no operacional. Rastreie automaticamente o progresso das campanhas de marketing e libere tempo para desenvolver estratégias ainda mais eficientes.
              li
                h3 Transforme objetividade em eficiência
                p Integre ferramentas avançadas de marketing digital, como Lead Scoring e Link tracker no dia a dia da agência e veja os resultados dispararem.

        .row
          .col-12.text-center
            p
              b Agora sim, estou pronto para me tornar uma agência de excelência.
            b-button(href="https://app.bulldesk.com.br/cadastro", variant="green")
              | Quero falar com um consultor
              g-image(src="../assets/icons/play-button@black.svg", alt="")

    section.section-d
      .container
        .row.justify-content-center
          .col-lg-12.text-center
            h2 As agências que saíram na frente e já utilizam o Bulldesk
            p.col-lg-10.mx-auto Fuja da burocracia dos grandes players e faça parte da comunidade crescente que usa o Bulldesk para transformar a agência em uma máquina de geração de leads.

        //- ul.row.justify-content-around
          li.col-lg-auto.col-md-4.col-sm-2.text-center
            g-image(src="../assets/images/seja-um-parceiro-logos-section-d.png", alt="")
          li.col-lg-auto.col-md-4.col-sm-2.text-center
            g-image(src="../assets/images/seja-um-parceiro-logos-section-d.png", alt="")
          li.col-lg-auto.col-md-4.col-sm-2.text-center
            g-image(src="../assets/images/seja-um-parceiro-logos-section-d.png", alt="")
          li.col-lg-auto.col-md-4.col-sm-2.text-center
            g-image(src="../assets/images/seja-um-parceiro-logos-section-d.png", alt="")
          li.col-lg-auto.col-md-4.col-sm-2.text-center
            g-image(src="../assets/images/seja-um-parceiro-logos-section-d.png", alt="")
          li.col-lg-auto.col-md-4.col-sm-2.text-center
            g-image(src="../assets/images/seja-um-parceiro-logos-section-d.png", alt="")

        .row
          .col-12.text-center
            b-button(href="https://app.bulldesk.com.br/cadastro", variant="green")
              | Quero falar com um consultor
              g-image(src="../assets/icons/play-button@black.svg", alt="")

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
      title: 'Seja um Parceiro',
    },

    data () {
      return {
        email: ''
      }
    }
  }
</script>
