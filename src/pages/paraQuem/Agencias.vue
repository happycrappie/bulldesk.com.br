<style lang="sass" scoped>
  @import '../../assets/styles/_variables.scss'

  header
    background-image: url(~@/assets/images/verticals-header.png)
    background-size:cover
    background-repeat: no-repeat
    height: 1200px

    .hero
      padding-top: 3rem
      max-width: 550px

      h1
        color: $gray-dark
        line-height: 1
        font-size: 4rem
        font-weight: 700
        color: $white-gray
        letter-spacing: -0.94px
        line-height: 55px

        @media only screen and (max-width: 400px)
          font-size: 3.1rem

        @media only screen and (min-width: 401px) and (max-width: 700px)
          font-size: 3.5rem

      p
        color: $white-gray
        font-size: 1.2rem
        font-weight: 400
        letter-spacing: -0.24px
        line-height: 25px
        width: auto
        max-width: 325px
        margin-top: 2rem

    .icon
      position: absolute
      left: 48%
      top: 620px

  .section-a
    margin-top: -24rem

    .item
      padding: 1.5rem 2rem

      h4
        color: $gray-dark
        font-size: 1.2rem
        font-weight: 700
        letter-spacing: -0.27px
        line-height: 24px

      p
        color: $gray-light
        font-size: 0.8rem
        font-weight: 400
        letter-spacing: 0.24px
        line-height: 25px
        margin-top: 1.5rem

  .section-b
    background-image: url(~@/assets/images/verticals-bg-b.png)
    background-size: cover
    height: 911px
    margin-top: -14rem

    .container
      text-align: center
      padding-top: 29rem

      h3
        width: auto
        max-width: 362px
        margin: auto
        color: $white-gray

      .subtitle
        width: auto
        max-width: 228px
        margin: auto
        margin-top: 1.5rem
        color: $white-gray

      .email-group
        margin-left: auto
        margin-right: auto

  .section-c
    margin-top: 6rem
    background-image: url(~@/assets/images/verticals-bg-c.png)
    background-repeat: no-repeat
    background-position: 30% 300px
    min-height: 900px

    .col-left
      .subtitle
        margin-top: 2rem
        padding-right: 1.2rem

    .col-right
      padding-left: 6rem

      ul
        list-style: none
        padding: 0px

        li
          color: $gray-dark
          font-size: 0.8rem
          font-weight: 400
          letter-spacing: 0.24px
          line-height: 30px
          padding-bottom: 0.5rem

          img
            margin-right: 10px

      .doted-square-a
        margin-top: 5rem
        margin-left: 6rem

      h3
        margin-top: 5rem
        max-width: 260px

      .subtitle
        margin-top: 2rem
        max-width: 600px

  .section-d
    background-image: url(~@/assets/images/verticals-bg-d.png)
    background-repeat: no-repeat
    background-size: cover
    height: 1000px
    margin-top: -10rem
    text-align: center

    h3
      margin: auto
      margin-top: 18rem

    .cases
      margin-top: 12rem

      .col
        padding: 0rem 3.2rem

        img
          max-width: 120px

        p
          color: $gray-white
          font-size: 0.8rem
          font-weight: 400
          letter-spacing: 0.24px
          line-height: 25px
          margin-top: 2rem

        .description
          min-height: 85px

        .author
          color: $gray-light
          font-size: 0.7rem
          font-weight: 700
          letter-spacing: 0.2px
          line-height: 20px
          text-transform: uppercase
</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="dark" logo="white")

        .hero.d-flex.align-items-center
          div
            h1 Transforme sua agência em uma máquina de resultados
              span.dot.green
            p Conheça o software mais completo de CRM com Automação de Marketing e com o melhor custo benefício para a sua agência. Você duvida?

    .section.section-a
      .container
        .row
          .item.col-4
            h4 Crie campanhas de marketing com alguns cliques
            p Já enviamos até um carro em direção a marte e você ainda perde horas de trabalho criando campanhas? Com o Bulldesk em alguns cliques suas campanhas de inbound, geração de leads, qualificação e etc, estarão prontas.
          .item.col-4
            h4 Comprove o ROI e o fee da sua agência
            p Você só continuará clientes se continuar comprovando o ROI frequentemente. Já pensou ter informações como Custo de Aquisição de Cliente (CAC), Custo por Lead (CPL), Origem do Lead, Quantidade de Leads, entre outras métricas importantes em tempo real? No Bulldesk todos os resultados são atrelados ao nosso bigdata analytics e exibidos em tempo real.
          .item.col-4
            h4 Aumente seu lucro sem diminuir os seus custos
            p Nossos preços foram pensados em você. Por isso que você não irá encontrar no Brasil nenhuma ferramenta com todas as funcionalidades que oferecemos no preço que oferecemos. Garantimos isso, se encontrar, vem falar com a gente.
        .row
          .item.col-4
            h4 Trabalhe em parceria com o seu cliente
            p Do que adianta a sua agência gerar diversos leads mas o seu cliente não conseguir gerar nenhuma venda? Assim que você gerar os leads, coloque os vendedores do seu cliente no CRM do Bulldesk para que eles possam dar atendimento aos leads gerados e você possa acompanhar as vendas.
          .item.col-4
            h4 Crie campanhas omnichannel
            p Mandar email é fácil. Mas quero ver mandar uma campanha que começa com um visitante preenchendo um formulário em uma landing page, depois recebe um email, se abrir o email entra em uma campanha de SMS e termina com o lead recebendo um Whatsapp de um vendedor. É fácil também, mas só no Bulldesk.
          .item.col-4
            h4 Fuja da burocracia
            p Pagar uma taxa de implementação obrigatória? Não ter privilégios por não ser Diamond? Ser parceiro Gold por 8 meses e depois virar member porque perdeu 1 cliente? Por isso que o Bulldesk tem uma única categoria de parceiro e um programa de parcerias simples. Venha conhecer!

    .section.section-b
      .container
        h3 Se ainda faltam motivos faça um teste gratuito e veja na prática
        .subtitle Insira seu e-mail abaixo e crie sua conta agora mesmo
        b-input-group.email-group
          b-form-input.email-input(placeholder='Email' v-model='email')
          b-input-group-append
            b-button.email-button
              g-image(src='~/assets/icons/play-button@black.svg')

    .section.section-c
      .container
        .row
          .col-4.col-left
            h3 Toda as ferramentas que você precisa em um único lugar
            .subtitle Porque utilizar diversas ferramentas quando a gente tem tudo a sua agência precisa?
          .col-8.col-right
            ul
              li
                g-image(src='~/assets/icons/check.svg')
                | Receba os contatos do seu chat dentro do Bulldesk
              li
                g-image(src='~/assets/icons/check.svg')
                | Envie campanhas de WhatsApp
              li
                g-image(src='~/assets/icons/check.svg')
                | Integre com portais como Zap Imóveis, Vivá Real, e outros
              li
                g-image(src='~/assets/icons/check.svg')
                | Crie campanhas de email marketing divulgando seus empreendimentos
              li
                g-image(src='~/assets/icons/check.svg')
                | Acompanhe todo o processo comercial em um único lugar
              li
                g-image(src='~/assets/icons/check.svg')
                | Construa páginas específicas para divulgar determinados empreendimentos
              li
                g-image(src='~/assets/icons/check.svg')
                | Automação de marketing: Automatize os processos que ninguém tem tempo de gerenciar
              li
                g-image(src='~/assets/icons/check.svg')
                | Email marketing: Construa sua marca e seja referência para seus clientes e leads
              li
                g-image(src='~/assets/icons/check.svg')
                | Omnichannel: Crie campanhas que comecem por email, SMS ou WhatApp

            g-image.doted-square-a(src='~/assets/images/doted-square.jpg')

            h3 Porque ser nosso parceiro?
            .subtitle Nosso programa de parceria é simples, oferecemos uma conta gratuita para a sua agência assim que você coloca um cliente pagante para o Bulldesk e além disso uma comissão recorrente de 20%. Sem burocracia, sem taxa de implementação, sem níveis ou seja lá o que for para complicar o que tem que ser descomplicado.

    .section.section-d
      .container
        .row
          h3
            | Fique tranquilo,
            br
            | você está em boa companhia
        .row.cases
          .col-6.col
            g-image(src='~/assets/images/cases/buscape-logo.png')
            p.description O jeito mais rápido e simples que encontramos para criar automações de marketing para nós e nossos clientes. Super recomendo!
            p.author BEATRIZ ALMEIDA
          .col-6.col
            g-image(src='~/assets/images/cases/buscape-logo.png')
            p.description Com o Bulldesk foi possível captar dados, enviar e-mails automáticos, e-mail marketing e diversas outras funcionalidades que acontecem em tempo real.
            p.author ANTÔNIO FRANCISCO
</template>

<script>
  import Layout from '../../layouts/Default'
  import Nav from '../../components/Nav'

  export default {
    components: {
      Layout,
      Nav,
    },

    metaInfo: {
      title: 'Agências'
    },

    data() {
      return {
        email: ''
      }
    }
  }
</script>
