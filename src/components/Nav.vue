<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  nav.navbar.nav-layout
    padding: 15px 0
    font-size: 0.75rem

    .logo
      width: 140px

    .nav-item.trial
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
</style>

<template lang="pug">
  b-navbar.d-flex.nav-layout(toggleable="lg2" :type="type")
    b-navbar-brand(href="/")
      g-image.logo(src="../assets/images/logo@white.png" alt="Bulldesk" v-if="logo && logo == 'white'")
      g-image.logo(src="../assets/images/logo.png" alt="Bulldesk" v-else)
    b-navbar-toggle(target="collapse")
    b-collapse#collapse(is-nav)
      b-navbar-nav.ml-auto
        b-nav-item-dropdown.for-whom(text="Pra quem é")
          span.dropdown-icon
          .dropdown-container
            .row.no-gutters
              .col-12.col-sm-6
                h6.dropdown-header Vertical
                b-dropdown-item(href="/para-quem/agencias") Agências
                b-dropdown-item(href="/para-quem/construtoras") Construtoras
                b-dropdown-item(href="/para-quem/ecommerce") Ecommerce
                b-dropdown-item(href="/para-quem/ensino") Ensino
                b-dropdown-item(href="/para-quem/hoteis") Hotéis
                b-dropdown-item(href="/para-quem/saas") SaaS
              .col-12.col-sm-6
                h6.dropdown-header Equipes
                b-dropdown-item(href="/para-quem/marketing") Marketing
                b-dropdown-item(href="/para-quem/vendas") Vendas
                b-dropdown-item(href="/para-quem/gerentes") Gerentes
        b-nav-item-dropdown.what-it-does(text="O que faz")
          span.dropdown-icon
          .dropdown-container
            .row.no-gutters
              .col-12
                b-dropdown-item(href="/o-que-faz/marketing") Marketing
                b-dropdown-item(href="/o-que-faz/vendas") Vendas
        b-nav-item-dropdown.what-it-is(text="O que é")
          span.dropdown-icon
          .dropdown-container
            .row.no-gutters
              .col-12
                b-dropdown-item(:href="'/o-que-e/' + item.node.id", v-for="(item) in $static.what.edges", :key="item.id") {{ item.node.title }}?
        b-nav-item(href="/cases") Cases
        b-nav-item(href="/exemplos") Exemplos
        b-nav-item(href="/planos") Planos
        b-nav-item(href="https://app.bulldesk.com.br" target="_blank") Login
        b-nav-item.trial.google-conversion(href="https://app.bulldesk.com.br/cadastro") Teste grátis
          g-image(src="../assets/icons/play-button@black.svg")
</template>

<static-query>
  query What {
    what: allOQueE (sortBy: "id", order: DESC) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
</static-query>

<script>
  import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BInputGroup, BFormInput, BInputGroupAppend, BButton, BNavItemDropdown, BDropdownItem, BNavItem } from 'bootstrap-vue';

  export default {
    components: {
      BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BInputGroup, BFormInput, BInputGroupAppend, BButton, BNavItemDropdown, BDropdownItem, BNavItem
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
