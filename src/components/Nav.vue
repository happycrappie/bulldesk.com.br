<style lang="sass">
  @import '../assets/styles/_variables.scss'

  nav.navbar.nav-layout
    padding: 15px 0
    font-size: 0.9rem

    .logo
      width: 140px

    .nav-item.trial
      .nav-link
        font-weight: 600
        font-size: 0.8rem
        text-align: center
        padding: 9px 25px
        background: $green
        color: $black
        border-radius: 30px

        img
          width: 12px
          margin: 0 0 2px 5px

        &:hover
          color: $gray-dark
          // background: $pink

    .nav-item
      .dropdown-menu
        left: -45%

        .dropdon-icon
          max-width: 20px
          top: -0.9rem
          position: absolute
          z-index: 1

          img
            width: 100%

        .dropdown-container
          padding: 1.2rem 2.5rem
          letter-spacing: 0.22px
          line-height: 25px
          font-size: 0.8rem
          position: relative
          z-index: 2

          h6
            color: $gray-dark
            font-weight: 700

          li
            color: $gray-light
            font-weight: 400

    .nav-item.for-whom
      .dropdon-icon
        left: 7.5rem

      .dropdown-container
        min-width: 28rem

    .nav-item.what-it-does
      .dropdown-menu
        left: -35%

        .dropdon-icon
          left: 5rem

        .dropdown-container
          min-width: 12rem

    .navbar-collapse
      @media only screen and (max-width: map-get($grid-breakpoints, 'ipad'))
        background: $white
        margin-top: 0.8rem
        box-shadow: 0 1.5rem 4rem rgba(22,28,45,.15)
        padding: 2rem 2.5rem
        border-radius: 5px

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

              .dropdown-header
                font-weight: 600
</style>

<template lang="pug">
  b-navbar.d-flex.nav-layout(toggleable="ipad" :type="type")
    b-navbar-brand
      g-link(href="/")
        g-image.logo(src="~/assets/images/logo.png" v-if="! logo || logo == 'black'" alt="Bulldesk")
        g-image.logo(src="~/assets/images/logo@white.png" v-if="logo && logo == 'white'" alt="Bulldesk")
    b-navbar-toggle(target="collapse")
    b-collapse#collapse(is-nav)
      b-navbar-nav.ml-auto
        b-nav-item-dropdown.for-whom(text="Pra quem é")
          .dropdon-icon
            g-image(src='~/assets/icons/poligono.svg')
          .dropdown-container
            .row.no-gutters
              .col-6
                h6.dropdown-header Vertical
                b-dropdown-item(href="/para-quem/agencias") Agências
                b-dropdown-item(href="/para-quem/construtoras") Construtoras
                b-dropdown-item(href="/para-quem/ecommerce") Ecommerce
                b-dropdown-item(href="/para-quem/ensino") Ensino
                b-dropdown-item(href="/para-quem/hoteis") Hotéis
                b-dropdown-item(href="/para-quem/ecommerce") SaaS
              .col-6
                h6.dropdown-header Equipes
                b-dropdown-item(href="/para-quem/marketing") Marketing
                b-dropdown-item(href="/para-quem/vendas") Vendas
                b-dropdown-item(href="/para-quem/gerentes") Gerentes
        b-nav-item-dropdown.what-it-does(text="O que faz")
          .dropdon-icon
            g-image(src='~/assets/icons/poligono.svg')
          .dropdown-container
            .row.no-gutters
              .col-12
                b-dropdown-item(href="/o-que-faz/marketing") Marketing
                b-dropdown-item(href="/o-que-faz/vendas") Vendas
        b-nav-item(href="/cases") Cases
        b-nav-item(href="/exemplos") Exemplos
        b-nav-item(href="/planos") Planos
        b-nav-item(href="https://app.bulldesk.com.br" target="_blank") Login
        b-nav-item.trial(href="https://app.bulldesk.com.br/cadastro") Teste grátis
          g-image(src='~/assets/icons/play-button@black.svg')
</template>

<script>
  export default {
    props: {
      type: String,
      logo: String
    }
  }
</script>
