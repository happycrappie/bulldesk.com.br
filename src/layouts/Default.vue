<style lang="sass">
  html, body, main
    height: 100%
</style>

<template lang="pug">
  main
    Header
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
