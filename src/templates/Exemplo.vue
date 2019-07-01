<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  header
    position: relative
    z-index: 4

  .hero
    position: relative
    z-index: 2
    margin-top: 50px
    color: $gray-dark

    a
      display: inline-block
      margin: 5px 0 10px
      font-size: 0.75rem
      text-decoration: underline


    h1
      margin-bottom: 50px
      font-size: 1.625rem
      font-weight: bold

    p
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

    img
      display: block
      max-width: 100%
      margin-left: auto

  .section-a
    position: relative
    z-index: 1
    margin-top: 55px
    margin-bottom: 80px
    // padding-top: 55px
    background: $white-gray

    &:before
      content: ""
      position: absolute
      left: 0
      bottom: 100%
      z-index: -1
      display: block
      width: 100vw
      height: 593px
      background: bottom center no-repeat url(~@/assets/images/exemplos-bg-section-a.png)

    &:after
      content: ""
      position: absolute
      left: 0
      top: 100%
      z-index: -1
      display: block
      width: 100vw
      height: 300px
      background: $white-gray

    h2
      margin: 0 0 5px
      font-size: 1.625rem
      font-weight: bold
      color: $gray-dark

    p
      color: $gray-dark

    div
      >img
        display: block
        max-width: 100%
        margin: 80px auto 45px
        background: $white-gray
        // image-rendering: crisp-edges
        box-shadow: 0px 0px 0px 10px $white-gray

    a
      display: block
      font-size: 0.75rem
      text-align: center
      line-height: 1.67
      color: $gray-light
      text-decoration: none !important

      img
        display: block
        margin: 0 auto 10px

      strong
        display: block
        color: $gray-dark


  .section-email
    position: relative
    z-index: 2
    padding-top: 190px
    padding-bottom: 140px
    margin-bottom: 80px
    color: $white-gray

    &:before
      content: ""
      position: absolute
      top: -280px
      left: 0
      display: block
      width: 100vw
      height: 911px
      background: top center no-repeat url(~@/assets/images/para-quem/bg-a.png)
      pointer-events: none

    h3
      margin: 0 0 20px
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15

    h4
      margin-bottom: 0
      font-size: 1rem
      line-height: 1.56

</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="light" logo="black")

    .hero
      .container
        .row
          .col-lg-7
            a(href="/exemplos") Exemplos
            h1 {{ this.$page.content.header.h1 }}
            p(v-for="p in this.$page.content.header.p") {{ p }}

          .col-lg-5.d-md-none.d-lg-block
            g-image(src='~/assets/images/exemplo-bg-hero.png')

    section.section-a
      .container
        .row
          .col-12
            h2 {{ this.$page.content.section_a.h2 }}
            p {{ this.$page.content.section_a.p }}

            g-image(:src="$page.content.section_a.image")

        .row.justify-content-center
          .col-12.col-lg-5
            a(href="" @click="print($page.content.section_a.image.src)")
              g-image(src="~/assets/icons/exemplo-icon-printer.svg")
              strong Imprima esse fluxo e guarde com você.
              | Ele vai te ajudar nas suas configurações de campanha.

    section.section-email
      .container.text-center
        .row.justify-content-center
          h3.col-md-6 Teste grátis nossa ferramenta que une CRM com Automação de Marketing

        .row.justify-content-center
          h4.col-md-4 Insira seu e-mail abaixo e crie sua conta agora mesmo
        email-input(:identifier="'exemplo' + this.$page.content.id")

</template>

<page-query>
  query ($id: String!) {
    content: exemplo (id: $id) {
      title
      header {
        h1
        p
      }
      section_a {
        h2
        p
        image
      }
    }
  }
</page-query>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'
  import EmailInput from '../components/EmailInput'

  export default {
    components: {
      Layout,
      Nav,
      EmailInput,
    },

    metaInfo () {
      return {
        title: 'Exemplo ' + this.$page.content.title,
      }
    },

    data () {
      return {
        email: ''
      }
    },

    methods: {
      print(source) {
          var Pagelink = "about:blank";
          var pwa = window.open(Pagelink, "_new");

          pwa.document.open();
          pwa.document.write(this.imagetoPrint(source));
          pwa.document.close();
      },

      imagetoPrint(source)
      {
          return "<html><head><scri"+"pt>function step1(){\n" +
                  "setTimeout('step2()', 10);}\n" +
                  "function step2(){window.print();window.close()}\n" +
                  "</scri" + "pt><style lang='css'>\n" +
                  "img { width: 100% }</style></head><body onload='step1()'>\n" +
                  "<img src='" + source + "' /></body></html>";
      }
    }
  }
</script>
