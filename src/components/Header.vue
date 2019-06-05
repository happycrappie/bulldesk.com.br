<style lang="sass">
  @import '../assets/styles/_variables.sass';

  header
    padding: 20px 0
    background-size: 70%
    background-position: 100% 0
    background-repeat: no-repeat
    height: 80%

    @media only screen and (max-width: 980px)
      background-image: url(../assets/images/header@700.png)

    @media only screen and (max-width: 1440px)
      background-image: url(../assets/images/header@1000.png)

    @media only screen and (max-width: 2000px)
      background-image: url(../assets/images/header@1600.png)

    @media only screen and (min-width: 2001px)
      background-image: url(../assets/images/header@2200.png)

    .logo
      width: 150px

    nav
      padding-bottom: 20px

    .hero
      height: 100%

      h1
        font-size: 4rem

        span
          display: block
          color: $green

      p
        font-size: 1.5rem
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
          p Ferramenta de controle vendas, gerenciamento de contatos<br> e automação de relacionamento.
</template>
