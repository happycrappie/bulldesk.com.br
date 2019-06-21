<style lang="sass">
  html, body, main
    height: 100%

  main
    background-image: url(~@/assets/images/teaser-footer-bg.png), url(~@/assets/images/teaser-bg.png)
    background-size: 110% 130%, cover
    background-position: -8rem 10rem, 0rem 0rem
    background-repeat: no-repeat
</style>

<template lang="pug">
  main
    slot
    TeaserCountdown(deadline="August 22, 2022")
</template>

<script>
  import TeaserCountdown from '../components/TeaserCountdown'

  export default {
    components: {
      TeaserCountdown
    }
  }
</script>
