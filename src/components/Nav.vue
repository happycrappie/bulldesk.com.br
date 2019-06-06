<style lang="sass" scoped>
  nav
    margin-bottom: 1rem
</style>

<template lang="pug">
  b-navbar.d-flex.p-0(toggleable="md" type="light")
    b-navbar-brand
      g-link(to="/")
        g-image.logo(src="../assets/images/logo.png" alt="Bulldesk")
    b-navbar-toggle(target="collapse")
    b-collapse#collapse(is-nav)
      b-navbar-nav.ml-auto
        b-nav-item(href="/") Home
        b-nav-item(href="/") Pra quem é
        b-nav-item(href="/cases") Cases
        b-nav-item(href="/") Planos
        b-nav-item(href="https://app.bulldesk.com.br" target="_blank") Login
        b-nav-item(href="/cadastro") Teste grátis
</template>
