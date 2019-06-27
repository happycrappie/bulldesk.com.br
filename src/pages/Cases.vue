<style lang="sass" scoped>
  header
    padding-bottom: 1.2rem

  .container
    h1
      font-weight: 700
      text-align: center
      padding-bottom: 1.2rem
</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="light")

    .container
      h1 Cases
      p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.
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
      title: 'Cases'
    }
  }
</script>
