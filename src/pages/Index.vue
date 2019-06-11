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
        left: 986px

        &:nth-child(1n)
          top: 724px

        &:nth-child(2)
          top: 754px

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
