<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  .hero
    position: relative
    z-index: 3
    margin-top: 45px
    margin-bottom: 25px

    h1
      font-size: 3.9375rem
      font-weight: bold
      line-height: 0.87
      color: $gray-dark

    .row
      div
        position: relative

        img
          position: absolute
          z-index: 3
          top: calc(100% - 70px)
          display: block
          max-width: 100%

  .section-a
    position: relative
    z-index: 2
    padding-top: 115px
    padding-bottom: 160px

    &:before
      content: ""
      position: absolute
      bottom: 0
      left: 0
      z-index: -1
      display: block
      width: 100vw
      height: 1075px
      background: bottom center no-repeat url(~@/assets/images/case-bg-section-a.png)

    h2
      margin: 0 0 45px
      font-size: 1.125rem
      font-weight: bold
      color: $gray-dark

    p
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

  .section-b
    position: relative
    z-index: 1
    padding-top: 90px
    padding-bottom: 265px
    color: $white-gray

    @media only screen and (max-width: map-get($grid-breakpoints, 'lg'))
      text-align: center

    &:before
      content: ""
      position: absolute
      left: 0
      bottom: -80px
      z-index: -1
      display: block
      width: 100vw
      height: 1621px
      background: bottom center no-repeat url(~@/assets/images/case-bg-section-b.png)

    h2
      margin-bottom: 30px
      font-size: 1.625rem
      font-weight: bold

    p
      margin: 0 0 30px
      font-size: 0.75rem
      line-height: 2.08

    a
      @media only screen and (max-width: map-get($grid-breakpoints, 'lg'))
        margin-bottom: 30px

  .section-c
    position: relative
    z-index: 3
    margin-top: 50px
    margin-bottom: 180px

    @media only screen and (max-width: map-get($grid-breakpoints, 'lg'))
      text-align: center

    h2
      margin-top: 55px
      margin-bottom: 32px
      font-size: 1.625em
      font-weight: bold
      line-height: 1.15

    p
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

    img
      display: block
      margin-left: -7.5%
      max-width: 115%

  .section-d
    position: relative
    z-index: 2
    padding-top: 85px
    padding-bottom: 160px
    color: $white-gray

    &:before
      content: ""
      position: absolute
      left: 0
      bottom: -60px
      z-index: -1
      display: block
      width: 100vw
      height: calc(100% + 500px)
      background: bottom center no-repeat url(~@/assets/images/case-bg-section-d.png)
      background-size: cover

      @media only screen and (max-width: map-get($grid-breakpoints, 'lg'))
        background-position: 40% bottom

    .row:first-of-type
      margin-bottom: 40px

      @media only screen and (max-width: map-get($grid-breakpoints, 'lg'))
        text-align: center

      h2
        font-size: 1.625rem
        font-weight: bold

        @media only screen and (max-width: map-get($grid-breakpoints, 'lg'))
          margin-bottom: 30px

      p
        font-size: 0.75rem
        line-height: 2.08
        color: $white-gray

    .row:last-of-type
      p
        font-size: 0.75rem
        line-height: 2.08

        @media only screen and (max-width: map-get($grid-breakpoints, 'lg'))
          text-align: center

      .bg
        padding-left: 0
        padding-right: 30px

        @media only screen and (max-width: map-get($grid-breakpoints, 'lg'))
          margin-bottom: 30px

        div
          padding: 84px 57px 64px 81px
          background: bottom center no-repeat url(~@/assets/images/case-bg-2-section-d.png)
          background-size: 100% 100%

        p
          font-size: 0.75rem
          line-height: 1
          text-align: left

        q
          position: relative
          display: block
          font-size: 1rem
          font-style: italic
          line-height: 1.56

          &:before
            content: "“"
            position: absolute
            right: 102%
            bottom: 98%
            font-size: 4.75rem
            line-height: 0.1

          &:after
            content: "“"
            position: absolute
            left: 100%
            top: 80%
            font-size: 4.75rem
            line-height: 0.1
            transform: rotate(180deg)

  .section-e
    position: relative
    z-index: 1
    padding-top: 90px
    padding-bottom: 255px
    color: $white-gray

    @media only screen and (max-width: map-get($grid-breakpoints, 'lg'))
      padding-top: 0

    &:before
      content: ""
      position: absolute
      left: 0
      bottom: 0px
      z-index: -1
      display: block
      width: 100vw
      height: 1228px
      background: bottom center no-repeat url(~@/assets/images/case-bg-section-e.png)

    &:after
      content: ""
      position: absolute
      left: 0
      bottom: 50%
      z-index: -1
      display: block
      width: 100vw
      height: 100%
      background: $black

    h2
      margin-bottom: 75px
      font-size: 1.625rem
      font-weight: bold

    p
      font-size: 0.75rem
      line-height: 2.08


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
            h1 {{ this.$page.content.header.h1 }}
              span.dot.green

          .col-5.d-none.d-lg-block
            g-image(:src="$page.content.header.image")

    .section-a
      .container
        .row
          .col-lg-5.col-xl-4
            h2 {{ this.$page.content.section_a.h2 }}
            p(v-for="p in this.$page.content.section_a.p") {{ p }}

    .section-b
      .container
        .row.justify-content-between.align-items-center
          .col-lg-3
            h2 {{ this.$page.content.section_b.h2 }}
            p(v-html="this.$page.content.section_b.p")

            b-button(href="https://app.bulldesk.com.br/cadastro", variant="green")
                | Teste grátis
                g-image(src="../assets/icons/play-button@black.svg", alt="")

          .col-lg-8
            VideoLauncher(:videoID="this.$page.content.section_b.videoID" :image="this.$page.content.section_b.videoThumb")

    .section-c
      .container
        .row.flex-row-reverse.justify-content-between
          .col-lg-4
            h2 {{ this.$page.content.section_c.h2 }}
            p {{ this.$page.content.section_c.p }}

          .col-lg-7
            g-image(:src="this.$page.content.section_c.image", alt="")

    .section-d
      .container
        .row
          .col-lg-auto
            h2 {{ this.$page.content.section_d.h2 }}

          .col
            p {{ this.$page.content.section_d.p }}

        .row.justify-content-between.align-items-center
          .col-lg-7.bg
            div
              p
                q {{ this.$page.content.section_d.depoimento.depoimento }}
                br
                | {{ this.$page.content.section_d.depoimento.autor }}

          .col-lg-5
           p(v-html="this.$page.content.section_d.p2")

    .section-e
      .container
        .row
          .col-12.text-center
            h2 {{ this.$page.content.section_e.h2 }}

        .row
          .col-lg-4(v-for="item in this.$page.content.section_e.items")
            p {{ item.p }}

</template>

<page-query>
  query ($id: String!) {
    content: case (id: $id) {
      title
      header {
        h1
        image
      }
      section_a {
        h2
        p
      }
      section_b {
        h2
        p
        videoID
        videoThumb
      }
      section_c {
        h2
        p
        image
      }
      section_d {
        h2
        p
        depoimento {
          depoimento
          autor
        }
        p2
      }
      section_e {
        h2
        items {
          p
        }
      }
    }
  }
</page-query>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'
  import EmailInput from '../components/EmailInput'
  import { BButton } from 'bootstrap-vue'
  import VideoLauncher from '../components/VideoLauncher'

  export default {
    components: {
      Layout,
      Nav,
      EmailInput,
      BButton,
      VideoLauncher,
    },

    metaInfo () {
      return {
        title: 'Case ' + this.$page.content.title,
      }
    },

    data () {
      return {
        email: ''
      }
    }
  }
</script>