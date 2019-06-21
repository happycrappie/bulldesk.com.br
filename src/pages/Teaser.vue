<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  .container
    text-align: center
    padding-top: 6rem

    h2
      margin: auto
      max-width: 500px
      color: $white-gray
      font-size: 3.5rem
      font-weight: 700
      letter-spacing: -0.94px
      line-height: 60px

    h3
      margin: auto
      margin-top: 4.5rem
      max-width: 400px
      color: $white-gray
      font-size: 1.5rem
      font-weight: 400
      letter-spacing: -0.36px
      line-height: 30px

    .email-group
      margin-left: auto
      margin-right: auto
      margin-top: 2.5rem
</style>

<template lang="pug">
  Layout
    .container
      h2 Esteja preparado para uma nova
        .text-green  experiência
        |  em CRM e automação de Marketing

      h3 Preencha seu e-mail e seja o primeiro a receber novidades

      email-input(placeholder='Insira seu email aqui' identifier='teaser')
</template>

<script>
  import Layout from '../layouts/Teaser'
  import EmailInput from '../components/EmailInput'

  export default {
    components: {
      Layout,
      EmailInput,
    },

    metaInfo: {
      title: 'Inteligência comercial de forma simples'
    },
  }
</script>
