<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  header
    position: relative
    z-index: 2

  .hero
    position: relative
    z-index: 1
    height: 343px
    margin: 0 0 100px
    padding: 35px 0 0

    &:before
      content: ""
      position: absolute
      top: -72px
      left: 0
      z-index: -1
      display: block
      width: 100vw
      height: 813px
      background: top center no-repeat url(~@/assets/images/o-que-e-bg-hero.png)

    h1
      margin: 0 0 16px
      font-weight: bold
      color: $white-gray

    h2
      font-size: 1rem
      line-height: 1.56
      color: $white-gray

  .section-a
    text-align: center
    color: $gray-dark

    .row
      &:first-child
        margin: 0 0 130px

        p
          line-height: 1.56

      &:last-child
        margin-left: -30px
        margin-right: -30px

        h3
          width: 100%
          margin: 0 0 60px
          font-size: 1.625rem
          font-weight: bold

        p
          padding-left: 30px
          padding-right: 30px
          text-align: left
          font-size: 0.75rem
          line-height: 2.08
          color: $gray-light

  .section-b
    margin: 90px 0 0
    padding: 200px 0 0

    h3
      margin: 0 0 32px
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15
      color: $gray-dark

    p
      margin: 0 0 23px
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

    .row.bg
      position: relative
      margin-bottom: 110px
      padding-bottom: 150px

      &:before
        content: ""
        position: absolute
        bottom: 0
        left: calc(50% - 50vw)
        z-index: -1
        display: block
        width: 100vw
        height: 1253px
        background: top center no-repeat url(~@/assets/images/o-que-e-bg-section-b.png)

      .col-lg-6
        &:last-child
          position: relative

          &:before,
          &:after
            content: ""
            position: absolute
            display: block
            width: 41.5px
            height: 50.5px
            background: top left url(~@/assets/images/o-que-e-bg-3-section-b.png)

          &:before
            bottom: calc(100% + 145px)
            left: 60px

          &:after
            top: calc(100% + 47px)
            right: 0
            height: 18.5px

          img
            max-width: 100%
            display: block
            margin-left: auto

    ul
      padding: 0
      list-style: none

      li
        max-width: calc(50% - 45px)

        h4
          margin: 0 0 15px
          font-size: 0.75rem
          line-height: 2.08
          color: $purple

          img
            margin-right: 9px

        p
          margin: 0 0 48px
          padding-left: 26px

  .section-c
    text-align: center

    h3
      margin: 0 0 32px
      font-size: 1.625rem
      font-weight: bold
      color: $gray-dark

    p
      margin: 0 0 70px
      line-height: 1.56
      color: $gray-dark

    ul
      margin: 0 0 80px
      list-style: none
      text-align: left

      li
        margin: 0 0 6px
        font-size: 0.75rem
        line-height: 2.08
        color: $gray-light

        &:before
          content: ""
          display: block
          width: 14px
          height: 14px
          border: 4px solid rgba($purple, 0.1)
          border-radius: 100%
          margin: 0 20px 0 0
          background: $purple
          background-clip: padding-box

  .section-d
    position: relative
    margin: 70px 0 160px
    padding: 135px 0 140px
    // background: $white-gray

    &:before,
    &:after
      content: ""
      position: absolute
      left: 0
      bottom: 100%
      z-index: -1
      display: block
      width: 100vw
      height: 440px
      background: bottom center no-repeat url(~@/assets/images/o-que-e-bg-1-section-d.png)
      pointer-events: none

    &:after
      top: 0
      bottom: auto
      height: calc(100% + 460px)
      background: bottom center no-repeat url(~@/assets/images/o-que-e-bg-2-section-d.png) $white-gray

    h3
      margin: 0 0 32px
      font-size: 1.625rem
      font-weight: bold
      color: $gray-dark

    p
      margin: 0 0 65px
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

    ul
      padding: 0
      list-style: none

      li
        max-width: calc(50% - 45px)

        h4
          margin: 0 0 15px
          font-size: 0.75rem
          line-height: 2.08
          color: $purple

          img
            margin-right: 9px

        p
          margin: 0 0 48px
          padding-left: 26px

  .section-e
    color: $gray-dark

    h3
      margin: 70px 0 30px
      font-size: 1.625rem
      font-weight: bold

    p
      margin-bottom: 0

    ul
      margin: 100px 0 60px
      list-style: none

      li
        margin: 0 0 30px
        font-size: 0.75rem

        h4
          font-size: 0.75rem
          font-weight: bold

          &:before
            content: ""
            display: block
            width: 14px
            height: 14px
            border: 4px solid rgba($purple, 0.1)
            border-radius: 100%
            margin: 0 20px 0 0
            background: $purple
            background-clip: padding-box

        p
          padding: 0 0 0 34px
          line-height: 2.08
          color: $gray-light

  .section-f
    position: relative
    margin-bottom: 125px
    padding-top: 210px
    padding-bottom: 200px
    color: $white-gray

    &:before
      content: ""
      position: absolute
      top: -400px
      left: 0
      z-index: -1
      display: block
      width: 100vw
      height: 1383px
      background: center no-repeat url(~@/assets/images/o-que-e-bg-section-f.png)
      background-size: cover

    .row
      margin-left: -30px
      margin-right: -30px

    h3
      margin-bottom: 60px
      padding-left: 30px
      padding-right: 30px
      font-size: 1.625rem
      font-weight: bold

    p
      margin-bottom: 30px
      padding-left: 30px
      padding-right: 30px
      font-size: 0.75rem
      line-height: 2.08

  .section-g
    margin: 0 0 70px

    h3
      margin-bottom: 70px
      font-size: 1.625rem
      font-weight: bold
      color: $gray-dark

    p
      line-height: 1.56
      color: $gray-dark

  .section-h
    position: relative
    margin: 250px 0 290px

    &:before
      content: ""
      position: absolute
      left: 0
      top: -570px
      z-index: -1
      width: 100vw
      height: calc(100% + 1170px)
      background: center no-repeat url(~@/assets/images/o-que-e-bg-section-h.png)
      background-size: cover

    h3
      margin-bottom: 30px
      font-size: 1.625rem
      font-weight: bold
      color: $gray-dark

    p
      margin-bottom: 60px
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

      strong
        color: $gray-dark

    ol
      margin-left: -30px
      margin-right: -30px
      padding-left: 0
      list-style: none
      counter-reset: number

      li
        padding-left: 30px
        padding-right: 30px

        h4
          position: relative
          min-height: 40px
          margin-bottom: 15px
          font-size: 0.75rem
          line-height: 1.67
          color: $purple

          &:before
            counter-increment: number
            content: counter(number)
            position: absolute
            top: 0
            right: calc(100% + 17px)
            font-size: 0.75rem
            font-weight: bold
            line-height: 1.67
            color: $purple

  .section-i
    position: relative
    margin: 50px 0 60px

    h3
      margin-bottom: 30px
      font-size: 1.625rem
      font-weight: bold
      color: $gray-dark

    p
      margin-bottom: 60px
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

      strong
        color: $gray-dark

    ol
      margin-left: -30px
      margin-right: -30px
      margin-bottom: 0
      padding-left: 0
      list-style: none
      counter-reset: number

      li
        margin-bottom: 40px
        padding-left: 30px
        padding-right: 30px

        h4
          position: relative
          min-height: 40px
          margin-bottom: 15px
          font-size: 0.75rem
          line-height: 1.67
          color: $purple

          &:before
            counter-increment: number
            content: counter(number)
            position: absolute
            top: 0
            right: calc(100% + 17px)
            font-size: 0.75rem
            font-weight: bold
            line-height: 1.67
            color: $purple

        p
          margin-bottom: 0

  .section-j
    position: relative
    z-index: 2
    padding-top: 110px
    padding-bottom: 130px
    color: $white-gray

    &:before
      content: ""
      position: absolute
      top: -472px
      left: 0
      z-index: -1
      width: 100vw
      height: 1383px
      background: top center no-repeat url(~@/assets/images/o-que-e-bg-section-j.png)

    h3
      margin-bottom: 100px
      font-size: 1rem
      font-weight: bold
      line-height: 1.56

    h4
      margin: 0 0 30px
      font-size: 1.625rem
      font-weight: bold

    p
      font-size: 0.75rem
      line-height: 2.08

  .section-email
    position: relative
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

    &:last-of-type
      padding-top: 115px
      padding-bottom: 230px

      &:before
        top: -500px
        height: 1136px
        background: top center no-repeat url(~@/assets/images/o-que-e-bg-email.png)

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
        Nav(type="dark" logo="white")

    section.hero
      .container
        h1 {{ this.$page.content.header.h1 }}
        h2(v-html="this.$page.content.header.h2")

    section.section-a
      .container
        .row.justify-content-center
          .col-11
            p(v-for="p in this.$page.content.section_a.p") {{ p }}

        .row.justify-content-between
          h3 {{ this.$page.content.section_a.h3 }}

          p.col-lg-6(v-html="this.$page.content.section_a.p2")

          p.col-lg-6(v-html="this.$page.content.section_a.p3")

    section.section-b
      .container
        .row.bg
          .col-lg-6
            div(v-for="text in this.$page.content.section_b.texts")
              h3 {{ text.h3 }}
              p(v-for="p in text.p")(v-html="p")

          .col-lg-6.d-flex
            .align-self-end
              g-image(src='~/assets/images/o-que-e-bg-2-section-b@2x.png')

        ul.row.justify-content-between
          li.col-lg-6(v-for="item in this.$page.content.section_b.items")
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | {{ item.h4 }}
            p(v-html="item.p")

    section.section-email
      .container.text-center
        .row.justify-content-center
          h3.col-md-6 Teste grátis nossa ferramenta que une CRM com Automação de Marketing

        .row.justify-content-center
          h4.col-md-4 Insira seu e-mail abaixo e crie sua conta agora mesmo
        email-input(:identifier="this.$page.content.id")

    section.section-c
      .container
        .row.justify-content-center
          h3.col-12 {{ this.$page.content.section_c.h3 }}
          p.col-lg-8(v-html="this.$page.content.section_c.p")

        .row
          ul.col-12
            li.d-flex.align-items-center(v-for="item in this.$page.content.section_c.items") {{ item }}

        .row.justify-content-center
          p.col-lg-6 {{ this.$page.content.section_c.p2 }}

    section.section-d
      .container
        .row.justify-content-center.text-center
          h3.col-12 {{ this.$page.content.section_d.h3 }}
          p.col-lg-6 {{ this.$page.content.section_d.p }}

        ul.row.justify-content-between
          li.col-lg-6(v-for="item in this.$page.content.section_d.items")
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | {{ item.h4 }}
            p {{ item.p }}

    section.section-e
      .container
        .row.justify-content-center.text-center
          p.col-lg-9(v-html="this.$page.content.section_e.p")
          h3 {{ this.$page.content.section_e.h3 }}
          p.col-lg-10(v-html="this.$page.content.section_e.p2")

        .row
          ul.col-12
            li(v-for="item in this.$page.content.section_e.items")
              h4.d-flex.align-items-center {{ item.h4 }}
              p {{ item.p }}

    section.section-f
      .container
        .row
          h3.col-12.text-center {{ this.$page.content.section_f.h3 }}

        .row
          .col-6
            p(v-for="p in this.$page.content.section_f.p1") {{ p }}

          .col-6
            p(v-for="p in this.$page.content.section_f.p2") {{ p }}

    section.section-g
      .container.text-center
        h3 {{ this.$page.content.section_g.h3 }}
        p(v-for="p in this.$page.content.section_g.p") {{ p }}


    section.section-h
      .container
        .row.text-center.justify-content-center
          h3.col-12 {{ this.$page.content.section_h.h3 }}
          p.col-lg-8(v-html="this.$page.content.section_h.p")

        ol.row.flex-wrap
          li.col-md-4(v-for="item in this.$page.content.section_h.items")
            h4 {{ item.h4 }}
            p {{ item.p }}

    section.section-i
      .container
        .row.text-center.justify-content-center
          h3.col-12 {{ this.$page.content.section_i.h3 }}
          p.col-lg-8 {{ this.$page.content.section_i.p }}

        ol.row.flex-wrap
          li.col-md-4(v-for="item in this.$page.content.section_i.items")
            h4 {{ item.h4 }}
            p {{ item.p }}

    section.section-j
      .container
        .row
          h3.col-12.text-center {{ this.$page.content.section_j.h3 }}

          .col-4(v-for="item in this.$page.content.section_j.items")
            h4 {{ item.h4 }}
            p {{ item.p }}

    section.section-email
      .container.text-center
        .row.justify-content-center
          h3.col-md-6 Teste grátis nossa ferramenta que une CRM com Automação de Marketing

        .row.justify-content-center
          h4.col-md-4 Insira seu e-mail abaixo e crie sua conta agora mesmo
        email-input(:identifier="this.$page.content.id")

</template>

<page-query>
  query ($id: String!) {
    content: oQueE (id: $id) {
      title
      header {
        h1
        h2
      }
      section_a {
        p
        h3
        p2
        p3
      }
      section_b {
        texts {
          h3
          p
        }
        items {
          h4
          p
        }
      }
      section_c {
        h3
        p
        items
        p2
      }
      section_d {
        h3
        p
        items {
          h4
          p
        }
      }
      section_e {
        p
        h3
        p2
        items {
          h4
          p
        }
      }
      section_f {
        h3
        p1
        p2
      }
      section_g {
        h3
        p
      }
      section_h {
        h3
        p
        items {
          h4
          p
        }
      }
      section_i {
        h3
        p
        items {
          h4
          p
        }
      }
      section_j {
        h3
        items {
          h4
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

  export default {
    components: {
      Layout,
      Nav,
      EmailInput,
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
