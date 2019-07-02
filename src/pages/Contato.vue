<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  header
    background: $black

  .hero
    position: relative
    z-index: 1
    margin-bottom: 240px
    padding-top: 40px
    padding-bottom: 90px
    color: $white-gray

    &:before
      content: ""
      position: absolute
      top: 0
      left: 0
      z-index: -1
      display: block
      width: 100vw
      height: calc(100% + 230px)
      min-height: 657px
      background: bottom center no-repeat url(~@/assets/images/contato-bg.png)
      background-size: cover

    h1
      margin-bottom: 30px
      font-size: 3.9375rem
      font-weight: bold

    h2
      margin-bottom: 40px
      font-size: 1.125rem
      line-height: 1.33

    p
      margin-bottom: 35px
      font-size: 0.75rem
      line-height: 1.67

    ul
      padding-left: 0
      list-style: none

      li
        margin-bottom: 30px

        span
          display: block
          width: 35px
          margin-right: 14px

        p
          margin-bottom: 0
          font-size: 0.75rem
          line-height: 1.67

          b
            font-size: 1rem
            line-height: 1.25

          a
            text-decoration: underline
            color: inherit

            &:hover
              color: $green

    form
      margin-top: 30px

      .input-group
        min-height: 60px
        margin-bottom: 20px

        p
          margin-bottom: 0
          text-align: center
          color: $green

      input
        height: 60px
        padding-left: 40px
        padding-right: 40px
        border: solid 1px #262031
        border-radius: 30px
        font-size: 0.75rem
        color: $white-gray
        background: #1e1a26
        box-shadow: 0 5px 10px 0 rgba(10, 8, 13, 0.31)

        @media only screen and (max-width: 1300px)
          padding-left: 20px
          padding-right: 20px

        &::placeholder
          color: $gray-light
          opacity: 1

      button
        width: 100%
        height: 60px
        padding: 0

        span
          margin-left: 0

          &:not(.ml-1)
            font-size: 1.125rem
            font-weight: bold
            color: $gray-dark

</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="dark" logo="white")

    .hero
      .container
        .row
          .col
            h1 Fale com a gente
              span.dot.green

        .row.justify-content-between.align-items-end
          .col-12.col-md-5
            h2 Tudo que recebemos,  é sempre lido e respondido. Não fique com dúvidas, escreva pra gente.
            p Você também pode falar com a gente através dos nossos contatos, veja abaixo:

            ul
              li.d-flex.align-items-center
                span
                  g-image(src="~/assets/icons/contato-icon-phone-call.svg")
                p
                  b + 55 (48) 3202-9787
                  br
                  | De segunda à sexta, das 9h às 18h
              li.d-flex.align-items-center
                span
                  g-image(src="~/assets/icons/contato-icon-conversation.svg")
                p
                  b Chat online
                  br
                  | De segunda à sexta, das 9h às 18h
              li.d-flex.align-items-center
                span
                  g-image(src="~/assets/icons/contato-icon-message.svg")
                p
                  b E-mail
                  br
                  a(href="mailto:contato@bulldesk.com.br") contato@bulldesk.com.br
              li.d-flex.align-items-center
                span
                  g-image(src="~/assets/icons/contato-icon-articles.svg")
                p
                  b Acesse nossos artigos
                  br
                  | Tem dúvidas?
                  |
                  a(href="http://blog.bulldesk.com.br/") Leia nosso blog.

          .col-12.col-md-7.col-lg-5
            form(@submit.prevent="submit()")
              b-input-group.name-group
                b-form-input.name-input(type="text", :placeholder="inputNamePlaceholder", v-model="name", required)
              b-input-group.email-group
                b-form-input.email-input(type="email", :placeholder="inputEmailPlaceholder", v-model="email", required)
              b-input-group.phone-group
                b-form-input.phone-input(type="text", :placeholder="inputPhonePlaceholder", v-model="phone", required)
              b-input-group.message-group
                b-form-input.message-input(type="text", :placeholder="inputMessagePlaceholder", v-model="message", required)
              b-input-group.justify-content-center.align-items-center
                b-button.email-button.d-flex.justify-content-center.align-items-center(type="submit", v-if="! success", :disabled="busy", variant="green")
                  span(v-if="! busy") Enviar
                  b-spinner.ml-1(small, v-else)
                p(v-if="success") Mensagem enviada com sucesso


</template>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'
  import axios from 'axios';
  import { BInputGroup, BFormInput, BInputGroupAppend, BButton, BSpinner } from 'bootstrap-vue';

  export default {
    components: {
      Layout,
      Nav,
      BInputGroup,
      BFormInput,
      BInputGroupAppend,
      BButton,
      BSpinner
    },

    metaInfo: {
      title: 'Contato',
    },

    computed: {
      inputNamePlaceholder() {
        return this.placeholder || 'Nome'
      },
      inputEmailPlaceholder() {
        return this.placeholder || 'E-mail'
      },
      inputPhonePlaceholder() {
        return this.placeholder || 'Telefone'
      },
      inputMessagePlaceholder() {
        return this.placeholder || 'Mensagem'
      },
    },

    data () {
      return {
        name: '',
        email: '',
        phone: '',
        message: '',
        busy: false,
        success: false,
        identifier: 'contato'
      }
    },

    methods: {
      submit() {
        if (!this.name || !this.email || !this.phone || !this.message) {
          return;
        }

        this.busy = true;

        let data = {
          token: process.env.GRIDSOME_BULLDESK_TOKEN,
          identifier: this.identifier,
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        };

        try {
          data.client = window.BulldeskSettings.client;
          data.domain = window.BulldeskSettings.domain;
        } catch (e) {
          //
        }

        axios.post(process.env.GRIDSOME_BULLDESK_API_URL + '/conversion', data)
          .then((response) => {
            this.success = true;
            this.busy = false;

            if (this.emit) {
              return this.$emit('convert', true);
            }

            this.name = '';
            this.email = '';
            this.phone = '';
            this.message = '';

            setTimeout(() => this.success = false, 5000);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }
</script>
