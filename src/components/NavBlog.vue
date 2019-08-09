<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  nav.navbar.nav-layout
    padding: 15px 0
    font-size: 0.75rem

    .logo
      width: 175px

    .nav-item.trial
      flex: 0 0 auto
      .nav-link
        font-weight: 600
        font-size: 0.6875rem
        text-align: center
        padding: 9px 25px
        background: $green
        color: $black
        border-radius: 30px

        img
          max-width: 12px
          margin: 0 0 2px 5px

        &:hover
          color: $gray-dark
          // background: $pink

    .nav-item
      .dropdown-menu
        left: -48%

        .dropdown-icon
          position: absolute
          border-width: 0 5px 5px 5px
          border-color: transparent transparent #fafafa transparent
          top: -10px
          left: calc(50%) + 5px
          margin-top: 0
          margin-bottom: 0
          width: 0
          height: 0
          border-style: solid
          position: absolute
          margin: 5px

        .dropdown-container
          padding: 1.2rem 2.5rem
          letter-spacing: 0.22px
          line-height: 25px
          font-size: 0.6875rem
          position: relative

          h6
            color: $gray-dark
            font-weight: 700

          li
            color: $gray-light
            font-weight: 400

    .nav-item.for-whom
      .dropdown-icon
        left: 5.7rem

      .dropdown-container
        min-width: 28rem

    .nav-item.what-it-does
      .dropdown-menu
        left: -35%

        .dropdown-icon
          left: 4.3rem

        .dropdown-container
          min-width: 12rem

    .nav-item.what-it-is
      .dropdown-icon
        left: 4.7rem

    .navbar-collapse
      @include media('screen', '<=ipad')
        background: $white
        margin-top: 0.8rem
        box-shadow: 0 1.5rem 4rem rgba(22,28,45,.15)
        padding: 2rem 2.5rem
        border-radius: 5px
        position: absolute
        top: 3rem
        right: 0.2rem
        min-width: 300px
        z-index: 999

        .nav-link
          color: $gray-light

          &:hover
            color: $gray-dark

        .nav-item.trial
          padding-top: 2rem

        .nav-item
          .dropdown-menu
            .dropdown-icon
              display: none

            .dropdown-container
              padding: 0rem
              padding-bottom: 1.5rem
              font-size: 0.7rem
              min-width: 0rem

              .dropdown-header
                font-weight: 600

    form
      flex-flow: row nowrap
      flex: 1 1 auto
      margin-left: 30px
      margin-right: 30px
      // border-bottom: 1px solid $gray-light

      @include media('screen', '<=ipad')
        margin-left: 0
        margin-right: 0

      input
        flex: 1 1 auto
        display: block
        margin: 0 !important
        padding-left: 0
        min-width: 0
        border: none
        border-bottom: 1px solid $gray-light
        border-radius: 0
        outline: none
        box-shadow: none
        transition: all 0.2s linear
        font-size: 0.875rem
        background: none

        @include media('screen', '<=ipad')
          margin-right: 10px !important
          padding-right: 0
          font-size: 0.75rem
          opacity: 1 !important
          pointer-events: auto !important

        &:focus
          opacity: 1 !important
          pointer-events: auto !important

        &:placeholder-shown
          opacity: 0
          pointer-events: none

          & + button
            display: none

            & + label
              display: block

      button,
      label
        padding: 0
        background: none

        img
          width: 20px
          height: 21px
          max-width: none
          margin: 0

      label
        display: none

        @include media('screen', '<=ipad')
          display: none !important

      button
        @include media('screen', '<=ipad')
          display: block !important

</style>

<template lang="pug">
  b-navbar.d-flex.nav-layout(toggleable="lg2")
    b-navbar-brand(href="/blog")
      g-image.logo(src="../assets/images/logo-blog.png" alt="Bulldesk")
    b-navbar-toggle(target="collapse")
    b-collapse#collapse(is-nav)
      b-navbar-nav.d-flex.w-100
        b-nav-item-dropdown(text="Categorias")
          span.dropdown-icon
          .dropdown-container
            .row.no-gutters
              .col-12
                b-dropdown-item(:href="item.node.path", v-for="(item) in $static.category.edges", :key="item.id") {{ item.node.title }}
        //- b-nav-item(href="/#") Novidades
        //- b-nav-item-dropdown(text="Materiais Gratuitos")
        //-   span.dropdown-icon
        //-   .dropdown-container
        //-     .row.no-gutters
        //-       .col-12
        //-         b-dropdown-item(href="/#") Link
        //-         b-dropdown-item(href="/#") Link
        //-         b-dropdown-item(href="/#") Link
        //-         b-dropdown-item(href="/#") Link
        //-         b-dropdown-item(href="/#") Link
        //-         b-dropdown-item(href="/#") Link
        //- b-nav-form(action="/blog")
          b-form-input(id="search" name="s" placeholder="Sua busca" )
          b-button(type="submit")
            g-image(src="../assets/icons/search.svg")
          label(for="search")
            g-image(src="../assets/icons/search.svg")
        b-nav-item.ml-auto.trial.google-conversion(href="https://app.bulldesk.com.br/cadastro") Teste grátis
          g-image(src="../assets/icons/play-button@black.svg")
</template>

<static-query>
  query Category ($page: Int) {
    category: allWordPressCategory (page: $page, perPage: 100, sortBy: "title", order: ASC ) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }


</static-query>



<script>
  import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BInputGroup, BFormInput, BInputGroupAppend, BButton, BNavItemDropdown, BDropdownItem, BNavItem, BNavForm } from 'bootstrap-vue';

  export default {
    components: {
      BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BInputGroup, BFormInput, BInputGroupAppend, BButton, BNavItemDropdown, BDropdownItem, BNavItem, BNavForm
    },

    props: {
      type: String,
      logo: {
        type: String,
        default: 'black'
      }
    },

    mounted () {
      //
    }
  }
</script>
