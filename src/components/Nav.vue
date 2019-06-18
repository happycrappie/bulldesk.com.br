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
          left: 6rem

        .dropdown-container
          min-width: 12rem
</style>

<template lang="pug">
  b-navbar.d-flex.nav-layout(toggleable="lg" :type="type")
    b-navbar-brand
      g-link(href="/")
        g-image.logo(src="../assets/images/logo.png" alt="Bulldesk")
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
    }
  }
</script>
