<style lang="sass" scoped>
  header
    padding-bottom: 20px
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
