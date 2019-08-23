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
      position: relative
      max-width: 750px
      font-size: 3.9375rem
      font-weight: bold
      line-height: 0.87
      letter-spacing: -1px
      color: $gray-dark

      &:before,
      &:after
        content: ""
        left: -14%
        bottom: 100%
        position: absolute
        display: block
        width: 42px
        height: 19px
        background: url('~@/assets/images/o-que-e-bg-3-section-b.png')

      &:after
        left: 110%
        bottom: 0
        height: 51px

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
            line-height: 1.2

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

        // &:first-child
        //   article
        //     color: $white-gray
        //     background: #1E1A26

        //     a
        //       &[href]:hover
        //         color: $gray-light

          @media only screen and (min-width: 992px)
            flex: 0 0 100%
            max-width: 100%
            order: 0

            article
              flex-wrap: wrap
              height: 404px

              >*
                width: 34%

              .article-featured
                width: 66%
                height: 100%
                flex: 0 0 100%

              h2
                flex-grow: 0

              .article-body
                display: block
                flex-grow: 1

        &.newsletter
          order: 3

          >div
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            height: 100%
            padding: 30px
            background: $purple

          h2
            margin-bottom: 20px
            font-size: 1.625rem
            font-weight: bold
            color: $white-gray

            span
              color: $green

          p
            max-width: 230px
            line-height: 1.56
            color: $white-gray

          form
            width: 100%
            margin: 0

</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        NavBlog

    section.hero
      .container
        .row
          h1.col-lg-10.col-md-12 Buscando
            small.ml-2 {{ search }}
            //- span.dot.green

    section.section-a
      .container
        .row
          .col.col-12.col-lg-6.col-xl-4(v-for="(edge, index) in filteredPosts.edges")
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

          .col.col-12.col-lg-6.col-xl-4.newsletter.d-flex.align-items-center
            div.text-center
              h2 Aproveite e faça um
               span  teste Gratuito
               |  na melhor ferramenta integrando CRM e automação de Mkt
              p Insira seu e-mail abaixo e crie sua conta agora mesmo
              email-input(identifier="blog")

    //- ExitModal(aggressive=true)
</template>

<page-query>
  query Posts {
    allPosts: allWordPressPost {
      edges {
        node {
          id
          title
          path
          excerpt
          content
          modified
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
</page-query>

<script>
  import Layout from '../layouts/Blog'
  import NavBlog from '../components/NavBlog'
  import EmailInput from '../components/EmailInput'
  import ExitModal from '../components/ExitModal'
  import FlexSearch from 'flexsearch'

  export default {
    components: {
      Layout,
      NavBlog,
      EmailInput,
      ExitModal,
    },

    metaInfo () {
      return {
        title: 'Bulldesk - CRM e Automação',
        meta: [
          { key: 'description', name: 'description', content: 'CRM e Automação'},
          { key: 'og:type', property: 'og:type', content: 'website'},
          { key: 'og:title', property: 'og:title', content: 'Bulldesk - CRM e Automação'},
          { key: 'og:description', property: 'og:description', content: 'CRM e Automação'},
          { key: 'og:url', property: 'og:url', content: this.currentURL },
          { key: 'og:site_name', property: 'og:site_name', content: 'Bulldesk'},
          { key: 'twitter:card', property: 'twitter:card', content: 'summary'},
          { key: 'twitter:description', property: 'twitter:description', content: 'CRM e Automação'},
          { key: 'twitter:title', property: 'twitter:title', content: 'Bulldesk - CRM e Automação'},
          { key: "google-site-verification", name: "google-site-verification", content: 'L97WJceo9AVFbFuUMmeBrfVdxE-7hMYhW7b9qdl-ga4'},
        ],
        link: [
          { key:'canonical', rel: 'canonical', href: this.currentURL },
        ],
        script: [
          {
            type: 'application/ld+json',
            innerHTML: '{"@context":"https://schema.org","@type":"WebSite","@id":"' + this.currentURL + '/#website","url":"' + this.currentURL + '","name":"Bulldesk","potentialAction":{"@type":"SearchAction","target":"' + this.currentURL + '?s={search_term_string}","query-input":"required name=search_term_string"}}'
          },
        ]
      }
    },

    data () {
      return {
        currentURL: typeof window !== 'undefined' ? window.location.href : 'https://bulldesk.com.br/blog-search',
        perPage: 10,
        filteredPosts: [],
        flex: new FlexSearch({
          tokenize: 'forward',
          doc: {
            id: 'id',
            field: [
              'title',
              'content'
            ]
          }
        }),
      }
    },

    created () {
      if (typeof window !== 'undefined' && ! this.isSearching) {
        return window.location.href = '/blog';
      }

      this.flex.add(this.$page.allPosts.edges.map(e => e.node));

      this.searchPosts(this.search);
    },

    computed: {
      search () {
        if (typeof window !== 'undefined') {
          return new URLSearchParams(window.location.search).get('s');
        }
      },

      isSearching () {
        return this.search && this.search.length;
      },
    },

    methods: {
      async searchPosts (query) {
        let results = this.flex.search({
          query: query,
          limit: this.perPage,
        });

        this.filteredPosts.edges = results.map((result) => {
          return { node: result };
        });
      }
    }
  }
</script>

