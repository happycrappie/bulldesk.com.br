<style lang="sass">
  @import '../assets/styles/_variables.scss'

  footer
    width: 100%

    ul
      list-style: none
      margin-left: 0px
      padding-left: 0px
      margin-top: 15px
      margin-bottom: 15px

    .bulldesk
      padding-right: 2rem

      @media only screen and (max-width: 1400px)
        padding-right: 1.5rem
        padding-left: 1.5rem
        padding-bottom: 1.5rem
        margin-left: 5px
        width: 100%
        display: flex

      @media only screen and (max-width: 440px)
        display: block
        padding-bottom: 0rem

      ul
        @media only screen and (max-width: 440px)
          padding: 1rem 0remel

        li
          display: inline
          padding-right: 2rem

          @media only screen and (max-width: 1400px)
            padding-right: 1.5rem

      .logo
        width: auto
        max-width: 136px
        margin-bottom: 5px

        @media only screen and (max-width: 990px)
          margin-top: 1.1rem

        @media only screen and (max-width: 1400px)
          margin-right: 3.8rem
          max-height: 40px
          margin-top: 10px

      .button-container
        margin-top: 30px

        @media only screen and (max-width: 1400px)
          display: none

        .btn-default
          padding: 9px 25px

          img
            width: 12px

    .column
      padding: 0px 2rem

      h5
        font-size: 1rem
        color: $gray-dark
        font-weight: 700
        letter-spacing: 0.28px
        line-height: 25px

        @media only screen and (max-width: 1400px)
          margin-top: 1rem

      ul
        li
          display: list-item
          color: $gray-light
          font-size: 0.7rem
          font-weight: 400
          letter-spacing: 0.22px
          line-height: 25px

          a
            color: $gray-light

    .column-c
      ul
        width: 50%
        float: left
        margin-top: 8px
</style>

<template lang="pug">
  footer.py-5.text-left
    .container
      .row
        .bulldesk
          img(src='../assets/images/logo.png' class='logo')
          ul
            li
              a(href="#")
                img(src='../assets/icons/instagram.svg')
            li
              a(href="#")
                img(src='../assets/icons/facebook.svg')
            li
              a(href="#")
                img(src='../assets/icons/youtube.svg')
            li
              a(href="#")
                img(src='../assets/icons/twitter.svg')
            li
              a(href="#")
                img(src='../assets/icons/linkedin.svg')
          .button-container
            a.btn-default
              | Teste grátis
              img(src='../assets/icons/play-button@black.svg')
        .column.column-a
          h5 Informações
          ul
            li
              a(href="#") Histórias de Sucesso
            li
              a(href="#") Blog
            li
              a(href="#") Suporte
            li
              a(href="#") Treinamentos
            li
              a(href="#") Cursos
            li
              a(href="#") Guias
            li
              a(href="#") Ebooks
            li
              a(href="#") Webinars
            li
              a(href="#") Templates
        .column.column-b
          h5 Funcionalidades
          ul
            li
              a(href="#") Dashboard
            li
              a(href="#") Atração e Conversão
            li
              a(href="#") Gestão de Leads
            li
              a(href="#") Gestão de Vendas
            li
              a(href="#") E-mail Marketing
            li
              a(href="#") SMS
            li
              a(href="#") Whatsapp
            li
              a(href="#") Automação de Marketing
            li
              a(href="#") Análises
            li
              a(href="#") Usuários e Grupos
        .column.column-c
          h5 Pra quem é o Bulldesk
          ul
            li
              strong Vertical
            li
              a(href="#") Agências
            li
              a(href="#") Construtoras
            li
              a(href="#") Ecommerce
            li
              a(href="#") Ensino
            li
              a(href="#") Hotéis
            li
              a(href="#") SaaS
          ul
            li
              strong Equipes
            li
              a(href="#") Marketing
            li
              a(href="#") Vendas
            li
              a(href="#") Gerentes
        .column.column-d
          h5 Sobre nós
          ul
            li
              a(href="#") Quem somos
            li
              a(href="#") Vagas
            li
              a(href="#") Encontre um parcero
            li
              a(href="#") Seja um parceiro
            li
              a(href="#") Contato
</template>
