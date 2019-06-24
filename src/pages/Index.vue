<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  .nav-item
    .nav-link
      font-weight: 600
      font-size: 0.8rem
      text-align: center
      padding: 9px 25px
      background: $green
      color: $black
      border-radius: 30px

      img
        width: 12px
        margin: 0 0 2px 5px

      &:hover
        color: $gray-dark

  .container.teaser
    text-align: center
    padding-top: 2rem
    padding-bottom: 2rem

    @media only screen and (min-height: 700px) and (max-height: 1200px)
      padding-top: 5rem

    @media only screen and (min-height: 1201px) and (max-height: 1300px)
      padding-top: 7rem

    @media only screen and (min-height: 1301px) and (max-height: 1400px)
      padding-top: 9rem

    @media only screen and (min-height: 1401px)
      padding-top: 13rem

    h2
      margin: auto
      max-width: 500px
      color: $white-gray
      font-size: 3.25rem
      font-weight: 700
      letter-spacing: -0.94px
      line-height: 60px

      @media only screen and (min-width: map-get($grid-breakpoints, 'md')) and (max-width: map-get($grid-breakpoints, 'lg2'))
        font-size: 3.2rem

      @media only screen and (min-width: map-get($grid-breakpoints, 'sm')) and (max-width: map-get($grid-breakpoints, 'md'))
        font-size: 3rem

      @media only screen and (max-width: map-get($grid-breakpoints, 'sm'))
        font-size: 2.5rem
        line-height: 50px

    h3
      margin: auto
      margin-top: 3rem
      max-width: 400px
      color: $white-gray
      font-size: 1.15rem
      font-weight: 400
      letter-spacing: -0.36px
      line-height: 30px

      @media only screen and (min-width: map-get($grid-breakpoints, 'sm')) and (max-width: map-get($grid-breakpoints, 'md'))
        font-size: 1.4rem

      @media only screen and (max-width: map-get($grid-breakpoints, 'sm'))
        font-size: 1.2rem
        margin-top: 4rem

    .email-group
      margin-left: auto
      margin-right: auto
      margin-top: 2.5rem

    .countdown-container
      margin-top: 6rem

      @media only screen and (min-height: 900px) and (max-height: 1100px)
        margin-top: 8rem

      @media only screen and (min-height: 1101px) and (max-height: 1300px)
        margin-top: 14rem

      @media only screen and (min-height: 1301px) and (max-height: 1400px)
        margin-top: 16rem

      @media only screen and (min-height: 1401px)
        margin-top: 18rem
  </style>

<template lang="pug">
  Layout
    .container
      b-navbar.d-flex.nav-layout(type="dark")
        b-navbar-nav.ml-auto
          //- b-nav-item(href="https://ajuda.bulldesk.com.br" target="_blank") Central de Ajuda
          b-nav-item(href="https://app.bulldesk.com.br" target="_blank") Login
            g-image(src="~/assets/icons/play-button@black.svg")

    .container.teaser
      h2 Esteja preparado para uma nova
        .text-green  experiência
        |  em CRM e automação de Marketing
      h3(v-if="! converted") Preencha seu e-mail e seja
        br
        | o primeiro a receber novidades
      email-input(placeholder="Insira seu email aqui" identifier="Teaser 2019" v-if="! converted" @convert="convert")
      h3.message(v-if="converted") Obrigado! Em breve teremos novidades.
      //- teaser-countdown(deadline="June 28, 2019")
</template>

<script>
  import Layout from '../layouts/Teaser'
  import EmailInput from '../components/EmailInput'
  import TeaserCountdown from '../components/TeaserCountdown'

  export default {
    components: {
      Layout,
      EmailInput,
      TeaserCountdown,
    },

    metaInfo: {
      title: 'Inteligência comercial de forma simples'
    },

    data() {
      return {
        converted: false
      }
    },

    methods: {
      convert(converted) {
        this.converted = converted
      }
    }
  }
</script>
