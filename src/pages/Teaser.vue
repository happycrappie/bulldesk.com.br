<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  .container
    text-align: center
    padding-top: 3rem
    padding-bottom: 2rem

    @media only screen and (min-height: 700px) and (max-height: 1200px)
      padding-top: 6rem

    @media only screen and (min-height: 1201px) and (max-height: 1300px)
      padding-top: 8rem

    @media only screen and (min-height: 1301px) and (max-height: 1400px)
      padding-top: 10rem

    @media only screen and (min-height: 1401px)
      padding-top: 14rem

    h2
      margin: auto
      max-width: 500px
      color: $white-gray
      font-size: 3.5rem
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
      margin-top: 4.5rem
      max-width: 400px
      color: $white-gray
      font-size: 1.5rem
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
      h2 Esteja preparado para uma nova
        .text-green  experiência
        |  em CRM e automação de Marketing
      h3 Preencha seu e-mail e seja o primeiro a receber novidades
      email-input(placeholder='Insira seu email aqui' identifier='teaser')
      teaser-countdown(deadline="June 28, 2019")
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
  }
</script>
