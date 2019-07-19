<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  header
    position: relative
    z-index: 4

  .hero
    padding-top: 80px
    margin-bottom: 75px

    p
      margin-bottom: 5px
      font-size: 0.625rem
      font-weight: bold
      text-transform: uppercase
      color: $gray-dark

    h1
      margin-bottom: 25px
      font-size: 3.25rem
      font-weight: bold
      line-height: 0.87
      color: $gray-dark

      a
        color: inherit

        &:hover
          text-decoration: none
          color: $purple

    time
      font-size: 0.75rem
      color: $gray-light

  .section-a
    img
      max-width: 100%

    .post-featured
      margin-bottom: 90px

    .post-share
      padding-top: 30px
      border-top: 1px solid $gray-white

      p
        font-size: 0.75rem
        font-weight: bold
        color: $gray-dark

        a
          margin-left: 18px

</style>
<style lang="sass">
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  .section-a
    .post-content
      color: $gray-dark

      h2
        margin-bottom: 20px
        font-size: 1.25rem
        font-weight: bold

      p,
      li
        margin-bottom: 20px
        font-size: 0.875rem
        line-height: 2.14

      a
        text-decoration: underline
        color: $purple

        &:hover
          color: $gray-light

      img
        max-width: 100%


</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="light" logo="black")

    article
      section.hero
        .container
          .row.justify-content-center
            .col-lg-8.col-md-12
              p {{ $page.post.categories[0].title }}
              h1
                a(:href="$page.post.path") {{ $page.post.title }}
                  span.dot.green
              time {{ $page.post.date }}

      section.section-a
        .container
          .row.justify-content-center
            .col-12.post-featured(v-if="$page.post.featuredMedia")
              a(:href="$page.post.path").d-flex.justify-content-center.align-items-center
                g-image(:src="$page.post.featuredMedia.sourceUrl")

            .col-12.col-lg-10.post-content
              div(v-html="$page.post.content")

            .col-12.col-lg-10.post-share
              p.d-flex.justify-content-center.align-items-center Compartilhe
                a(:href="'https://www.facebook.com/sharer/sharer.php?u=' + $page.post.path" target="_blank")
                  g-image(src='../assets/icons/facebook.svg')

                a(:href="'https://twitter.com/home?status='+ $page.post.path + ' ' + $page.post.title" target="_blank")
                  g-image(src='../assets/icons/twitter.svg')

                a(:href="'https://www.linkedin.com/shareArticle?mini=true&url=' + $page.post.path + '&title='+ $page.post.title +'&summary=&source='" target="_blank")
                  g-image(src='../assets/icons/linkedin.svg')


</template>

<page-query>
  query Post ($path: String!) {
    post: wordPressPost (path: $path) {
      title
      content
      date
      path
      featuredMedia {
        sourceUrl
        altText
        mediaDetails {
          width
        }
      }
      categories {
        id
        title
        path
      }
      tags {
        id
        title
        path
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

    metaInfo: {
      title: 'Blog',
    },
  }
</script>
