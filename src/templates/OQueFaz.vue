<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  header
    background: $black

  .hero
    margin-bottom: 95px
    padding: 40px 0 21.875rem
    color: #fff
    background: center bottom no-repeat url(~@/assets/images/o-que-faz-bg-hero.jpg) $black
    background-size: auto

    h1
      max-width: 750px
      margin: 0 0 80px
      font-size: 3.9375rem
      font-weight: 700
      line-height: 1

      @media only screen and (max-width: 700px)
        font-size: 3.5rem

      @media only screen and (max-width: 400px)
        font-size: 3.1rem

    h2
      margin: 0 0 40px
      font-size: 1.125rem
      line-height: 1.33

    ul
      padding: 0
      list-style: none

      @media only screen and (max-width: 990px)
        margin-bottom: 40px

      li
        margin: 0 0 15px
        font-size: 0.75rem

        img
          margin: 0 15px 0 0

  .topics-a
    h2
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15
      color: $gray-dark

      @media only screen and (max-width: 990px)
        margin-bottom: 40px

    ul
      padding: 0
      list-style: none

      @media only screen and (min-width: 992px)
        margin-left: -25px
        margin-right: -25px

      li
        margin-bottom: 60px

        @media only screen and (min-width: 992px)
          padding-left: 25px
          padding-right: 25px

        h3
          height: 49px
          margin-bottom: 15px
          font-size: 1.125rem
          font-weight: bold
          line-height: 1.33
          color: $gray-dark

        p
          font-size: 0.75rem
          line-height: 2.08
          color: $gray-light

  .topics-b
    position: relative
    margin-bottom: 80px
    padding-top: 15rem
    padding-bottom: 6.25rem
    text-align: center

    @media only screen and (max-width: 990px)
        padding-top: 100px

    &:before
      content: ""
      position: absolute
      bottom: 0
      left: calc(50% - 50vw)
      z-index: -1
      width: 100vw
      height: 1253px
      background: center bottom no-repeat url(~@/assets/images/o-que-faz-bg-topics-b.png)
      background-size: cover

    h2
      margin-bottom: 80px
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15
      color: $gray-dark

    ul
      max-width: 850px
      margin: 0 auto 90px
      padding: 0
      list-style: none

      li
        margin-bottom: 25px
        text-align: left

        h3
          margin-bottom: 15px
          font-size: 0.75rem
          line-height: 2.08
          color: $purple

          img
            margin-right: 10px

        p
          padding-left: 27px
          font-size: 0.75rem
          line-height: 2.08
          color: $gray-light
</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="dark" logo="white")

    section.hero
      .container
        h1 {{ this.$page.content.header.h1 }}
          span.dot.green

        div.row.justify-content-between.align-items-center
          div.col-lg-3
            h2 {{ this.$page.content.header.h2 }}

            ul
              li.d-flex.align-items-centerli(v-for="item in $page.content.header.items")
                g-image(src='~/assets/icons/check.svg')
                | {{ item }}

          div.col-lg-8
            VideoLauncher(:videoID="$page.content.header.videoID" :image="$page.content.header.videoThumb")

    section.container.topics-a
      .row
        .col-lg-4
          h2 {{ this.$page.content.topics_a.h2 }}

        .col-lg-8
          ul.row.d-flex
            li.col-lg-6(v-for="item in $page.content.topics_a.items")
              h3 {{ item.h3 }}
              p {{ item.p }}

    section.container.topics-b
      h2 {{ this.$page.content.topics_b.h2 }}

      ul.row.d-flex.justify-content-between
        li.col-lg-5(v-for="item in $page.content.topics_b.items")
          h3.d-flex.align-items-center
            g-image(src='~/assets/icons/check.svg')
            | {{ item.h3 }}
          p {{ item.p }}

      b-button.d-lg-inline(href="https://app.bulldesk.com.br/cadastro", variant="green")
        | Quero fazer um teste gratuito
        g-image(src='~/assets/icons/play-button@black.svg')

</template>

<page-query>
  query ($id: String!) {
    content: oQueFaz (id: $id) {
      title
      header {
        h1
        h2
        items
        videoID
        videoThumb
      }
      topics_a {
        h2
        items {
          h3
          p
        }
      }
      topics_b {
        h2
        items {
          h3
          p
        }
      }
    }
  }
</page-query>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'
  import VideoLauncher from '../components/VideoLauncher'

  export default {
    components: {
      Layout,
      Nav,
      VideoLauncher,
    },

    metaInfo () {
      return {
        title: this.$page.content.title,
      }
    },

    data () {
      return {
      }
    }
  }
</script>
