<style lang="sass" scoped>
  header
    padding-bottom: 1.2rem

  .container
    h1
      text-align: center
      padding-bottom: 1.2rem
</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="light")

    .container
      h1 Planos e Preços
</template>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'

  export default {
    components: {
      Layout,
      Nav,
    },

    metaInfo: {
      title: 'Planos e Preços'
    }
  }
</script>
