<style lang="sass">
  html, body, main
    height: 100%
</style>

<template lang="pug">
  main
    slot
    Footer(type="dark")
</template>

<script>
  import Footer from '../components/Footer'
  import helpers from '../shared/helpers'

  export default {
    components: {
      Footer,
    },

    mounted () {
      this.setConversionLink();
    },

    methods: {
      setConversionLink () {
        const links = document.querySelectorAll('.google-conversion');

        for (var i = 0; i < links.length; i++) {
          links[i].addEventListener('click', helpers.conversionCallback);
        }
      }
    },
  }
</script>
