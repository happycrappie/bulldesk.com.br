<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  header
    position: relative
    z-index: 4

  .hero
    position: relative
    margin-bottom: 100px
    padding-top: 100px

    &:before
      content: ""
      position: absolute
      top: -72px
      left: 0
      z-index: -1
      width: 100vw
      height: 883px
      background: bottom center no-repeat url(~@/assets/images/blog-bg-hero.png)
      background-size: cover

    h1
      font-size: 3.9375rem
      font-weight: bold
      line-height: 0.87
      color: $gray-dark

  .section-a
    .row
      counter-reset: posts

      .col
        margin-bottom: 30px

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

          h2
            flex-grow: 1
            margin-bottom: 20px
            font-size: 1.25rem
            line-height: 1.3

          a
            color: inherit

            &[href]:hover
              text-decoration: none
              color: $purple

          .article-body
            display: none
            font-size: 0.75rem
            line-height: 1.67
            color: $white-gray

          time
            margin-bottom: 40px
            font-size: 0.75rem

    .load-more
      margin-top: 75px

      p
        text-align: center

        a
          font-size: 0.875rem
          text-decoration: underline
          color: $gray-dark

          svg
            margin-left: 10px

            *
              transition: all 0.2s linear

          &:hover
            cursor: pointer
            color: $purple

            svg
              *
                stroke: $purple
</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        NavBlog

    section.hero
      .container
        .row
          h1.col-lg-10.col-md-12 Conteúdo inteligente feito pra você
            span.dot.green

    section.section-a
      .container
        .row
          .col.col-12.col-lg-6.col-xl-4(v-for="(edge, index) in $page.category.belongsTo.edges", :style="{order:index}")
            article
              div.article-featured
                a(:href="edge.node.path").d-flex.justify-content-center.align-items-center
                  g-image(:src="edge.node.featuredMedia.sourceUrl", v-if="edge.node.featuredMedia")
              small
                a {{edge.node.categories[0].title}}
              h2
                a(:href="edge.node.path") {{ edge.node.title }}
              div.article-body(v-html="edge.node.excerpt")
              time {{ edge.node.date | date }}

        .row.load-more(v-if="$page.category.belongsTo.pageInfo.totalPages > 1 && $page.category.belongsTo.pageInfo.totalPages > $page.category.belongsTo.pageInfo.currentPage")
          .col
            p
              a(@click="loadMore($event)") Confira mais conteúdos
                svg(xmlns="http://www.w3.org/2000/svg" width="5" height="7.7" viewBox="0 0 4.74 7.65")
                  path(d="M.5,7.15,4.23,3.82.5.5" transform="translate(0)" fill="none" stroke="#3b334a" stroke-linecap="round" stroke-linejoin="round")


</template>

<page-query>
query Category ($path: String, $page: Int) {
  category: wordPressCategory (path: $path) {
    title
    belongsTo (page: $page, perPage: 10) @paginate {
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
            slug
            categories {
              title
              path
            }
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
      return {
        title: 'Arquivos ' + this.$page.category.title + ' - Bulldesk',
        meta: [
          { key: 'og:type', property: 'og:type', content: 'object' },
          { key: 'og:title', property: 'og:title', content: 'Arquivos ' + this.$page.category.title + ' - Bulldesk' },
          { key: 'og:url', property: 'og:url', content: this.currentURL },
          { key: 'og:site_name', property: 'og:site_name', content: 'Bulldesk' },
          { key: 'twitter:card', property: 'twitter:card', content: 'summary' },
          { key: 'twitter:title', property: 'twitter:title', content: 'Arquivos ' + this.$page.category.title + ' - Bulldesk' },
        ],
        link: [
          { key:'canonical', rel: 'canonical', href: this.currentURL },
        ]
      }
    },

    methods: {
      async loadMore(event) {
        try {
          const results = await this.$fetch(window.location.pathname + '/' + (this.$page.category.belongsTo.pageInfo.currentPage+1) )
          if(results.data.category.belongsTo.edges.length > 0) {
            this.$page.category.belongsTo.pageInfo.currentPage = this.$page.category.belongsTo.pageInfo.currentPage + 1
            this.$page.category.belongsTo.edges = this.$page.category.belongsTo.edges.concat(results.data.category.belongsTo.edges)
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>
