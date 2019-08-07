<style lang="sass">
  @import '../assets/styles/_variables.scss'

  #exit-modal
    h5
      font-weight: 700

    form
      width: 94%
      margin: auto

    label
      font-size: 0.875rem

    .form-control
      color: $gray-light
      background-color: $white-gray
      border: none
      padding: 15px
      font-size: 0.75rem
      height: 50px

      &:focus
        background-color: $white
        border-color: $white-gray

    .submit-button
      color: $white
      margin-top: 1rem

      &:disabled
        cursor: not-allowed
        pointer-events: all !important
</style>

<template lang="pug">
  b-modal#exit-modal(hide-footer=true)
    div(slot="modal-title") Já vai? Receba as novidades
    .container.pdf-modal-container
      .row
        .col-12
          form(@submit.prevent="submit($event)")
            b-form-group(id="fieldset-name" label="Nome" label-for="name")
              b-form-input(id="name" type="text", placeholder="Digite seu nome", v-model="name", required)

            b-form-group(id="fieldset-email" label="E-mail" label-for="email")
              b-form-input(id="email" type="email", placeholder="Digite seu melhor e-mail", v-model="email", required)

            .text-center
              b-button.submit-button(type="submit", :disabled="busy || ! name || ! email" variant="purple") Enviar
                g-image(src="~/assets/icons/play-button@white.svg", v-if="! busy")
                b-spinner.ml-1(small, v-else)
</template>

<script>
  import axios from 'axios'
  import ouibounce from 'ouibounce'
  import { VBModal, BFormGroup, BFormInput, BButton, BSpinner } from 'bootstrap-vue'

  export default {
    props: {
      aggressive: Boolean,
    },

    components: {
      VBModal,
      BFormGroup,
      BFormInput,
      BButton,
      BSpinner
    },

    mounted () {
      let exitModal = this.$bvModal;

      var _ouibounce = ouibounce(false, {
        aggressive: this.aggressive,
        callback: function() {
          exitModal.show('exit-modal');
        }
      });
    },

    data () {
      return {
        name: '',
        email: '',
        busy: false,
      }
    },

    methods: {
      submit () {
        this.busy = true;

        let BulldeskSettings = window.BulldeskSettings || {};

        let data = {
          token: process.env.GRIDSOME_BULLDESK_TOKEN,
          identifier: 'blog-exit-modal',
          name: this.name,
          email: this.email,
          client: BulldeskSettings.client,
          domain: BulldeskSettings.domain
        };

        axios.post(process.env.GRIDSOME_BULLDESK_API_URL + '/conversion', data)
          .then((response) => {
            this.busy = false;

            window.location = this.$page.content.pdf;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }
</script>
