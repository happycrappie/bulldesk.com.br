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

  .section-b
    margin-top: 150px

    h2
      margin-bottom: 45px
      font-size: 1.375rem
      color: $gray-dark

    .row
      .col
        margin-bottom: 30px

        &:nth-child(4)
          display: none

        article
          display: flex
          flex-direction: column
          height: 495px
          color: $gray-dark
          background: $white-gray
          box-shadow: 0 0 0px 0 rgba(74, 44, 126, 0.37)
          transition: all 0.1s linear
          transform: translateZ(0)

          &:hover
            box-shadow: 0 0 20px 0 rgba(74, 44, 126, 0.37)

          > *
            padding-left: 30px
            padding-right: 30px

          .article-featured
            flex: 0 0 auto
            width: 100%
            height: 247px
            padding-left: 0
            padding-right: 0
            overflow: hidden
            background: #cccccc

            a
              display: block
              height: 100%

            img
              display: block
              width: 100%
              height: 100%
              object-fit: cover

          small
            margin-top: 40px
            margin-bottom: 10px
            font-size: 0.625rem
            font-weight: bold
            color: inherit

          h3
            flex-grow: 1
            margin-bottom: 20px
            font-size: 1.25rem
            line-height: 1.2

          a
            color: inherit

            &[href]:hover
              text-decoration: none
              color: $purple

          time
            margin-bottom: 40px
            font-size: 0.75rem

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
        NavBlog

    article
      section.hero
        .container
          .row.justify-content-center
            .col-lg-8.col-md-12
              p {{ $page.post.categories[0].title }}
              h1
                a(:href="$page.post.path") {{ $page.post.title }}
                  span.dot.green
              time {{ $page.post.date | date }}

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
                a(:href="'https://www.facebook.com/sharer/sharer.php?u=' + currentURL" target="_blank")
                  g-image(src='../assets/icons/facebook.svg')

                a(:href="'https://twitter.com/intent/tweet?url='+ currentURL" target="_blank")
                  g-image(src='../assets/icons/twitter.svg')

                a(:href="'https://www.linkedin.com/shareArticle?mini=true&url=' + currentURL + '&title='+ $page.post.title +'&summary=&source='" target="_blank")
                  g-image(src='../assets/icons/linkedin.svg')

    section.section-b(v-if="$page.post.categories[0].belongsTo.edges")
      .container
        .row
          .col-12
            h2.text-center Mais posts de
              strong  "{{ $page.post.categories[0].title }}"

          .col.col-12.col-lg-4(v-for="(edge, index) in $page.post.categories[0].belongsTo.edges", :style="{order:index}", v-if="$page.post != edge.node")
            article
              div.article-featured
                a(:href="edge.node.path").d-flex.justify-content-center.align-items-center
                  g-image(:src="edge.node.featuredMedia.sourceUrl", v-if="edge.node.featuredMedia")
              small
                a {{ $page.post.categories[0].title }}
              h3
                a(:href="edge.node.path") {{ edge.node.title }}
              time {{edge.node.date | date}}



</template>

<page-query>
  query Post ($path: String!) {
    post: wordPressPost (path: $path) {
      id
      title
      excerpt
      content
      date
      dateGmt
      modified
      path
      featuredMedia {
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
      }
      categories {
        id
        title
        path
        belongsTo (page: 1, perPage: 4) @paginate {
          pageInfo {
            totalPages
            currentPage
          }
          edges {
            node {
              ... on WordPressPost {
                id
                title
                path
                excerpt
                date
                featuredMedia {
                  id
                  sourceUrl
                }
              }
            }
          }
        }
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
  import Layout from '../layouts/Blog'
  import NavBlog from '../components/NavBlog'
  import EmailInput from '../components/EmailInput'

  export default {
    components: {
      Layout,
      NavBlog,
      EmailInput,
    },

    data () {
      return {
        currentURL: typeof window !== 'undefined' ? window.location.href : '',
      }
    },

    metaInfo () {
      let metaDescription = this.$page.post.excerpt.replace(/<\/?p[^>]*>/g, "");

      let metaTags = [
        { key: 'description', name: 'description', content: metaDescription },
        { key: 'og:locale', property: 'og:locale', content: 'pt_BR' },
        { key: 'og:type', property: 'og:type', content: 'article' },
        { key: 'og:title', property: 'og:title', content: this.$page.post.title },
        { key: 'og:description', property: 'og:description', content: metaDescription },
        { key: 'og:url', property: 'og:url', content: this.currentURL },
        { key: 'og:site_name', property: 'og:site_name', content: 'Bulldesk' },
        { key: 'article:section', property: 'article:section', content: this.$page.post.categories[0].title },
        { key: 'article:published_time', property: 'article:published_time', content: this.$page.post.date },
        { key: 'article:modified_time', property: 'article:modified_time', content: this.$page.post.modified },
        { key: 'og:updated_time', property: 'og:updated_time', content: this.$page.post.modified },
        { key: 'twitter:card', property: 'twitter:card', content: 'summary' },
        { key: 'twitter:description', property: 'twitter:description', content: metaDescription },
        { key: 'twitter:title', property: 'twitter:title', content: this.$page.post.title },
      ];

      // TAGS LOOP
      this.$page.post.tags.map((e) => metaTags.push({
        property: 'article:tag',
        content: e.title
      }));

      if (this.$page.post.featuredMedia) {
        metaTags.push({ key: 'og:image', property: 'og:image', content: this.$page.post.featuredMedia.sourceUrl });
        metaTags.push({ key: 'og:image:secure_url', property: 'og:image:secure_url', content: this.$page.post.featuredMedia.sourceUrl });
        metaTags.push({ key: 'twitter:image', property: 'twitter:image', content: this.$page.post.featuredMedia.sourceUrl });
        metaTags.push({ key: 'og:image:width', property: 'og:image:width', content: this.$page.post.featuredMedia.mediaDetails.width });
        metaTags.push({ key: 'og:image:height', property: 'og:image:height', content: this.$page.post.featuredMedia.mediaDetails.height });
      }

      return {
        title: this.$page.post.title,
        meta: metaTags
      }
    },
  }
</script>
