<style lang="sass">
  html, body, main
    height: 100%

  body
    font-family: Montserrat, Helvetica, Arial, sans-serif
    font-weight: 300
    // font-size: 14px
</style>

<template lang="pug">
  main.d-flex.flex-column
    Header
    .flex-shrink-0
      .container
        slot
    Footer
</template>

<script>
  import Footer from '../components/Footer'
  import Header from '../components/Header'

  export default {
    components: {
      Footer,
      Header,
    },
  }
</script>
