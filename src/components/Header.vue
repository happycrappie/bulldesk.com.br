<style lang="sass">
  @import '../assets/styles/_variables.sass';

  header
    padding: 20px 0
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

    .logo
      width: 140px
</style>

<template lang="pug">
  header.d-flex
    .container
      Nav(type="dark")
</template>

<script>
  import Nav from './Nav'

  export default {
    components: {
      Nav,
    },
  }
</script>
