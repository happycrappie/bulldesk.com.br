<style lang="sass" scoped>
  @import '../assets/styles/_variables.sass';

  nav
    padding: 15px 0
    font-size: 0.9rem
    margin-bottom: 1rem

    .logo
      width: 140px

    .nav-item
      &.trial
        .nav-link
          text-align: center
          padding: 8px 25px
          background: $green
          color: $black
          border-radius: 30px

          &:hover
            color: $black
            background: $white
</style>

<template lang="pug">
  b-navbar.d-flex(toggleable="lg" :type="type")
    b-navbar-brand
      g-link(to="/")
        g-image.logo(src="../assets/images/logo.png" alt="Bulldesk")
    b-navbar-toggle(target="collapse")
    b-collapse#collapse(is-nav)
      b-navbar-nav.ml-auto
        b-nav-item(to="/") O que faz
        b-nav-item(to="/") Pra quem é
        b-nav-item(to="/cases") Conheça
        b-nav-item(to="/") Planos
        b-nav-item(href="https://app.bulldesk.com.br" target="_blank") Login
        b-nav-item.font-weight-bold.trial(to="/cadastro") Teste grátis
</template>

<script>
  export default {
    props: {
      type: String,
    }
  }
</script>
