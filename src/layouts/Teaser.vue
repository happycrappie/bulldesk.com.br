<style lang="sass">
  html, body, main
    height: 100%

  main
    background-image: url(~@/assets/images/teaser-bg.png)
    background-size: size
</style>

<template lang="pug">
  main
    slot
    //- TeaserCountdown(deadline="August 22, 2022")
</template>

<script>
  import TeaserCountdown from '../components/TeaserCountdown'

  export default {
    components: {
      TeaserCountdown
    }
  }
</script>
