<style lang="sass">
  @import '../assets/styles/_variables.scss'

  form
    margin: auto
    max-width: 381px

  .email-group
    text-align: left
    margin-top: 2.1rem
    padding-right: 0.5rem

    @media only screen and (max-width: 400px)
      max-width: 320px

    .email-input
      box-shadow: 0 10px 20px rgba(165, 131, 224, 0.18)
      background-color: $white
      border-radius: 30px !important
      padding-left: 30px
      font-size: 0.9rem
      height: 68px

    .email-button
      width: 56px
      height: 56px
      border: 0px
      border-radius: 28px !important
      margin-left: -3.9rem
      margin-top: 0.4rem
      z-index: 998
      background-color: $green

      img
        margin-left: 0.3rem
</style>

<template lang="pug">
  form(@submit.prevent="submit()")
    b-input-group.email-group
      b-form-input.email-input(:placeholder="inputPlaceholder" v-model="email")
      b-input-group-append
        b-button.email-button(type="submit")
          g-image(src="~/assets/icons/play-button@black.svg")
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      placeholder: String,
      identifier: String
    },

    computed: {
      inputPlaceholder() {
        return this.placeholder || 'E-mail'
      }
    },

    methods: {
      submit() {
        if (! this.email) {
          return;
        }

        let data = {
          token: process.env.GRIDSOME_BULLDESK_TOKEN,
          identifier: this.identifier,
          email: this.email
        };

        try {
          data.client = window.BulldeskSettings.client;
          data.domain = window.BulldeskSettings.domain;
        } catch (e) {
          //
        }

        axios.post(process.env.GRIDSOME_BULLDESK_API_URL + '/conversion', data)
          .then(response => this.$emit('convert', true))
          .catch(error => this.$emit('convert', false))
      }
    },

    data() {
      return {
        email: ''
      }
    }
  }
</script>
