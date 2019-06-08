<style lang="sass">
  html, body, main
    height: 100%
</style>

<template lang="pug">
  main
    slot
    Footer
</template>

<script>
  import Footer from '../components/Footer'

  export default {
    components: {
      Footer,
    },
  }
</script>
