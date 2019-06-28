<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  header
    position: relative
    z-index: 3

  .hero
    position: relative
    z-index: 2
    margin: 60px 0 140px
    color: $gray-dark

    h1
      margin: 0 0 40px
      font-weight: bold

    p
      line-height: 1.56

  .section-a
    position: relative
    z-index: 1
    margin-bottom: 120px
    background: $white-gray

    &:before
      content: ""
      position: absolute
      left: 0
      bottom: calc(100% - 260px)
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

    .col-lg-4
      margin-bottom: 40px
      color: $gray-dark

      a
        transition: all 0.2s linear

        &:hover
          text-decoration: none

      div
        position: relative
        width: 100%
        height: 0
        padding-bottom: 50%
        background: #ffffff

        a
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
          border: 1px solid $gray-white
          box-shadow: 0 10px 20px 0 rgba(165, 131, 224, 0.13)
          transition: all 0.2s linear

      h2
        margin: 0

        a
          display: block
          padding: 30px 0 15px
          font-size: 1.125rem
          font-weight: bold
          line-height: 1.33
          color: $gray-dark

      p
        margin: 0

        a
          display: block
          font-size: 0.75rem
          line-height: 2.08
          color: $gray-light

      &:hover
        div
          a
            box-shadow: 0 10px 20px 0 rgba(165, 131, 224, 0.39)

  .section-email
    position: relative
    z-index: 1
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
      background: top center no-repeat url(~@/assets/images/verticals-bg-b.png)
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

    section.hero
      .container
        .row.justify-content-center.text-center
          h1.col-12 Exemplos
            span.dot.green
          p.col-lg-7 Veja abaixo nossos exemplos de campanhas e encontre a ideal para você. São diversos momentos em que você aproveitar para automatizar seu marketing de forma rápida e fácil.

    section.section-a
      .container
        .row
          .col-lg-4.col-md-6(v-for="(edge, index) in $page.examples.edges")
            div
              a(:href="'/exemplos/' + edge.node.id").d-flex.justify-content-center.align-items-center
                g-image(:src="edge.node.icon")
            h2
              a(:href="'/exemplos/' + edge.node.id") {{ edge.node.title }}
            p
              a(:href="'/exemplos/' + edge.node.id") {{ edge.node.description }}


    section.section-email
      .container.text-center
        .row.justify-content-center
          h3.col-md-6 Teste grátis nossa ferramenta que une CRM com Automação de Marketing

        .row.justify-content-center
          h4.col-md-4 Insira seu e-mail abaixo e crie sua conta agora mesmo
        email-input(identifier="exemplos")

</template>

<page-query>
  query Examples {
    examples: allExemplo (sortBy: "order", order: ASC) {
      edges {
        node {
          id
          title
          order
          icon
          description
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
      title: 'Exemplos',
    },

    data () {
      return {
        email: ''
      }
    }
  }
</script>
