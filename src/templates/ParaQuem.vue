<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  header.agencias-bg-image
    background-image: url(~@/assets/images/para-quem/agencias.png)

    @include media('screen', '<=ipad')
      background-image: url(~@/assets/images/para-quem/agencias@no-ball.png)

  header.construtoras-bg-image
    background-image: url(~@/assets/images/para-quem/construtoras.png)

    @include media('screen', '<=ipad')
      background-image: url(~@/assets/images/para-quem/construtoras@no-ball.png)

  header.ecommerce-bg-image
    background-image: url(~@/assets/images/para-quem/ecommerce.png)

    @include media('screen', '<=ipad')
      background-image: url(~@/assets/images/para-quem/ecommerce@no-ball.png)

  header.ensino-bg-image
    background-image: url(~@/assets/images/para-quem/ensino.png)

    @include media('screen', '<=ipad')
      background-image: url(~@/assets/images/para-quem/ensino@no-ball.png)

  header.gerentes-bg-image
    background-image: url(~@/assets/images/para-quem/gerentes.png)

    @include media('screen', '<=ipad')
      background-image: url(~@/assets/images/para-quem/gerentes@no-ball.png)

  header.hoteis-bg-image
    background-image: url(~@/assets/images/para-quem/hoteis.png)

    @include media('screen', '<=ipad')
      background-image: url(~@/assets/images/para-quem/hoteis@no-ball.png)

  header.marketing-bg-image
    background-image: url(~@/assets/images/para-quem/marketing.png)

    @include media('screen', '<=ipad')
      background-image: url(~@/assets/images/para-quem/marketing@no-ball.png)

  header.saas-bg-image
    background-image: url(~@/assets/images/para-quem/saas.png)

    @include media('screen', '<=ipad')
      background-image: url(~@/assets/images/para-quem/saas@no-ball.png)

  header.vendas-bg-image
    background-image: url(~@/assets/images/para-quem/vendas.png)

    @include media('screen', '<=ipad')
      background-image: url(~@/assets/images/para-quem/vendas@no-ball.png)

  header
    background-size: cover
    background-repeat: no-repeat
    background-position: -12rem -5.5rem
    height: 1200px

    @include media('screen', '<=ipad')
      background-position: -64rem -5.5rem

    @include media('screen', '>ipad', '<=laptop')
      background-position: -48rem -7rem

    @include media('screen', '>laptop', '<=desktop-md')
      background-position: -44rem -5.5rem

    @include media('screen', '>desktop-md', '<=desktop-lg')
      background-position: -34rem -5.5rem

    @include media('screen', '>desktop-lg', '<=desktop-xl')
      background-position: -24rem -5.5rem

    .hero
      padding-top: 3rem
      max-width: 570px

      h1.title
        color: $white-gray

      p.subtitle
        color: $white-gray
        width: auto
        max-width: 245px
        margin-top: 2rem

        @include media('screen', '<=phone')
          font-size: 0.8rem
          margin-top: 1rem

        @include media('screen', '>phone', '<=laptop')
          font-size: 0.9rem
          margin-top: 1rem

    .icon
      position: absolute
      left: 48%
      top: 620px

  .section-a
    margin-top: -24rem

    .item
      padding: 1.5rem 2rem
      letter-spacing: 0.2px

      h4
        color: $gray-dark
        font-size: 1.125rem
        font-weight: 700
        line-height: 24px

      p
        color: $gray-light
        font-size: 0.75rem
        font-weight: 400
        line-height: 25px
        margin-top: 1.5rem

  .section-b
    background-image: url(~@/assets/images/para-quem/bg-a.png)
    background-size: cover
    height: 911px
    margin-top: -10rem

    @include media('screen', '<=ipad')
      background-position: -40rem 0rem

    @include media('screen', '>ipad', '<=laptop')
      background-position: -20rem 0rem

    @include media('screen', '>laptop', '<=desktop-md')
      background-position: -15rem 0rem

    @include media('screen', '>desktop-md', '<=desktop-lg')
      background-position: -10rem 0rem

    .container
      text-align: center
      padding-top: 29rem

      @media only screen and (max-width: 600px)
        padding-top: 25rem

      h3
        width: auto
        max-width: 362px
        margin: auto
        color: $white-gray

      .subtitle
        width: auto
        max-width: 228px
        margin: auto
        margin-top: 1.5rem
        color: $white-gray

      .email-group
        margin-left: auto
        margin-right: auto

  .section-c
    margin-top: 10rem
    background-image: url(~@/assets/images/para-quem/bg-b.png)
    background-repeat: no-repeat
    background-position: 37rem 300px
    min-height: 900px

    @include media('screen', '>ipad', '<=laptop')
      background-position: 0rem 300px

    @media only screen and (max-width: map-get($grid-breakpoints, 'xl'))
      background-size: 38%
      background-position: 0rem 400px

    @include media('screen', '>laptop', '<=desktop-md')
      background-position: 8rem 300px

    @include media('screen', '>desktop-md', '<=desktop-lg')
      background-position: 14rem 300px

    @include media('screen', '>desktop-lg', '<=desktop-xl')
      background-position: 24rem 300px

    @media only screen and (max-width: map-get($grid-breakpoints, 'lg2'))
      text-align: center
      background-image: none

    .col-left
      .subtitle
        margin-top: 2rem
        padding-right: 1.2rem

    .col-right
      padding-left: 6rem

      @include media('screen', '<=phone')
        padding-left: 2rem

      ul
        list-style: none
        padding: 0px

        @media only screen and (max-width: map-get($grid-breakpoints, 'lg2'))
          text-align: left
          margin-top: 2rem

        li
          color: $gray-dark
          font-size: 0.75rem
          font-weight: 400
          letter-spacing: 0.2px
          line-height: 30px
          padding-bottom: 0.5rem

          img
            margin-right: 10px

      .doted-square-a
        margin-top: 5rem
        margin-left: 6rem

        @media only screen and (max-width: map-get($grid-breakpoints, 'lg2'))
          display: none

      h3
        margin-top: 5rem
        max-width: 260px

        @media only screen and (max-width: map-get($grid-breakpoints, 'lg2'))
          max-width: none
          text-align: left

      .subtitle
        margin-top: 2rem
        max-width: 600px

        @media only screen and (max-width: map-get($grid-breakpoints, 'lg2'))
          max-width: none
          text-align: left

  .section-d
    background-image: url(~@/assets/images/para-quem/bg-c.png)
    background-repeat: no-repeat
    background-size: cover
    height: 1000px
    margin-top: -6rem
    text-align: center

    @include media('screen', '>phone', '<=ipad')
      background-position: -52rem

    @media only screen and (max-width: map-get($grid-breakpoints, 'sm'))
      height: 1300px
      background-position: -62rem

    @include media('screen', '>ipad', '<=laptop')
      background-position: -42rem

    @include media('screen', '>laptop', '<=desktop-md')
      background-position: -32rem

    @include media('screen', '>desktop-md', '<=desktop-lg')
      background-position: -22rem

    @include media('screen', '>desktop-lg', '<=desktop-xl')
      background-position: -12rem

    h3
      margin: auto
      margin-top: 18rem

      @media only screen and (max-width: map-get($grid-breakpoints, 'sm'))
        margin-top: 14rem

    .cases
      margin-top: 12rem

      @media only screen and (max-width: map-get($grid-breakpoints, 'sm'))
        margin-top: 17rem

      .col
        padding: 0rem 3.2rem

        img
          max-width: 120px

        p
          color: $gray-white
          font-size: 0.75rem
          font-weight: 400
          letter-spacing: 0.2px
          line-height: 25px
          margin-top: 2rem

        .description
          min-height: 85px

        .author
          color: $gray-light
          font-size: 0.625rem
          font-weight: 700
          letter-spacing: 0.2px
          line-height: 20px
          text-transform: uppercase

          @media only screen and (max-width: map-get($grid-breakpoints, 'sm'))
            margin-bottom: 4rem
</style>

<template lang="pug">
  Layout
    header.d-flex(:class="$page.content.id + '-bg-image'")
      .container
        Nav(type="dark" logo="white")

        .hero.d-flex.align-items-center
          div
            h1.title {{ this.$page.content.header.h1 }}
              span.dot.green
            p.subtitle {{ this.$page.content.header.p }}

    .section.section-a
      .container
        .row.scroll-reveal
          .item.col-12.col-sm-4(v-for="item in $page.content.section_a.items")
            h4 {{ item.h4 }}
            p {{ item.p }}

    .section.section-b
      .container
        .scroll-reveal
          h3 {{ this.$page.content.section_b.h3 }}
          .subtitle {{ this.$page.content.section_b.subtitle }}
          email-input(:identifier="$page.content.id")

    .section.section-c
      .container
        .row.scroll-reveal
          .col-12.col-lg2-4.col-left
            h3 {{ this.$page.content.section_c.h3[0] }}
            .subtitle {{ this.$page.content.section_c.subtitle[0] }}
          .col-12.col-lg2-8.col-right
            ul
              li(v-for="item in $page.content.section_c.items")
                g-image(src="~/assets/icons/check.svg" alt="")
                | {{ item }}

            g-image.doted-square-a(src="~/assets/images/doted-square.jpg" alt="")

            h3 {{ this.$page.content.section_c.h3[1] }}
            .subtitle {{ this.$page.content.section_c.subtitle[1] }}

    .section.section-d.d-none
      .container
        .row.scroll-reveal
          h3
            | {{ this.$page.content.section_d.h3 }}
            br
            | {{ this.$page.content.section_d.br }}
        .row.cases.scroll-reveal
          .col.col-12.col-sm-6(v-for="item in $page.content.section_d.cases")
            g-image(:src="item.image" alt="Imagem")
            p.description {{ item.description }}
            p.author {{ item.author }}
</template>

<page-query>
  query ($id: String!) {
    content: paraQuem (id: $id) {
      id
      title
      header {
        h1
        p
      }
      section_a {
        items {
          h4
          p
        }
      }
      section_b {
        h3
        subtitle
      }
      section_c {
        h3
        subtitle
        items
      }
      section_d {
        h3
        br
        cases {
          image
          description
          author
        }
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

    mounted () {
      if (typeof window !== 'undefined') {
        window.ScrollReveal({ reset: true }).reveal('.scroll-reveal');
      }
    },

    metaInfo () {
      return {
        title: this.$page.content.title,
      }
    },

    data () {
      return {
        email: ''
      }
    }
  }
</script>
