<style lang="sass" scoped>
  nav
    margin-bottom: 1rem
</style>

<template lang="pug">
  b-navbar.d-flex.p-0(toggleable="md" :type="type")
    b-navbar-brand
      g-link(to="/")
        g-image.logo(src="../assets/images/logo.png" alt="Bulldesk")
    b-navbar-toggle(target="collapse")
    b-collapse#collapse(is-nav)
      b-navbar-nav.ml-auto
        b-nav-item(to="/") Home
        b-nav-item(to="/") O que faz
        b-nav-item(to="/") Pra quem é
        b-nav-item(to="/cases") Cases
        b-nav-item(to="/") Planos
        b-nav-item.font-weight-bold(href="https://app.bulldesk.com.br" target="_blank") Login
        b-nav-item(href="/cadastro") Teste grátis
</template>

<script>
  export default {
    props: {
      type: String,
    }
  }
</script>
