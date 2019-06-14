<style lang="sass" scoped>
  @import '../assets/styles/_variables.scss'

  nav
    padding: 15px 0
    font-size: 0.9rem

    .logo
      width: 140px

    .nav-item.trial
      .nav-link
        font-size: 0.8rem
        text-align: center
        padding: px 25px
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
        b-nav-item(to="/") Pra quem é
        b-nav-item(to="/") O que faz
        b-nav-item(to="/cases") Cases
        b-nav-item(to="/") Exemplos
        b-nav-item(to="/planos") Planos
        b-nav-item(href="https://app.bulldesk.com.br" target="_blank") Login
        b-nav-item.font-weight-bold.trial(to="/cadastro") Teste grátis
          g-image(src='~/assets/icons/play-button@black.svg')
</template>

<script>
  export default {
    props: {
      type: String,
    }
  }
</script>
