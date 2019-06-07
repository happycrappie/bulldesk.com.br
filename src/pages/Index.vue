<style lang="sass" scoped>
  @import '../assets/styles/_variables.sass';

  .hero
    &:before
      //
    margin-top: -600px
    height: 100%
    width: 450px

    h1
      color: $gray-dark
      line-height: 1
      font-size: 4.5rem

      span
        color: $pink

    p
      margin-top: 1rem
      font-size: 1.1rem
      font-weight: 100
      width: 420px
</style>

<template lang="pug">
  Layout
    .container
      .hero.d-flex.align-items-center
        div
          h1.font-weight-bold Inteligência comercial de forma simples
            span.dot.green
          p Ferramenta de controle vendas, gerenciamento de contatos e automação de relacionamento.
</template>

<script>
  export default {
    metaInfo: {
      title: 'Bulldesk'
    }
  }
</script>
