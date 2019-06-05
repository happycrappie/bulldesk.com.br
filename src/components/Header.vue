<style lang="sass">
  @import '../assets/styles/_variables.sass';

  header
    padding: 20px 0
    background: url(../assets/images/header.png) no-repeat
    background-size: 70%
    background-position: 100% 0
    height: 80%

    .logo
      width: 120px

    nav
      padding-bottom: 20px

    .hero
      height: 100%

      h1
        font-size: 4rem

        span
          display: block
          color: $green
</style>

<template lang="pug">
  header.d-flex
    .container
      b-navbar.p-0(toggleable="md" type="light")
        b-navbar-brand
          g-link(to="/")
            img.logo(src="../assets/images/logo.png")
        b-navbar-toggle(target="collapse")
        b-collapse#collapse(is-nav)
          b-navbar-nav.ml-auto
            b-nav-item(href="/") Home
            b-nav-item(href="/") Pra quem é
            b-nav-item(href="/") Cases
            b-nav-item(href="/") Planos

      .hero.d-flex.align-items-center
        div
          h1 Inteligência comercial
            span de forma simples.
          p Ferramenta de controle vendas, gerenciamento de contatos e automação de relacionamento.
</template>
