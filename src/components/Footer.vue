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
        width: 136px
        margin-bottom: 5px

        @media only screen and (max-width: 1400px)
          margin-right: 3.8rem
          max-height: 30px
          margin-top: 15px

      .button-container
        margin-top: 30px

        @media only screen and (max-width: 1400px)
          display: none

        a
          font-weight: 600
          font-size: 0.6875rem
          text-align: center
          padding: 9px 25px
          background: $green
          color: $black
          border-radius: 30px

          g-image
            max-width: 12px
            margin: 0 0 2px 5px

          &:hover
            color: $gray-dark

    .column
      padding: 0px 2rem

      h5
        font-size: 0.875rem
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
          font-size: 0.6875rem
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

      ul:last-child
        li
          padding-left: 15px
</style>

<template lang="pug">
  footer.py-5.text-left
    .container
      .row
        .bulldesk
          img(src='../assets/images/logo.png' class='logo')
          ul
            li
              a(href="https://www.instagram.com/bulldeskcrm" target="_blank")
                g-image(src='../assets/icons/instagram.svg')
            li
              a(href="https://facebook.com/bulldeskcrm" target="_blank")
                g-image(src='../assets/icons/facebook.svg')
            li
              a(href="https://www.youtube.com/channel/UCF2cpwuAJZk2KXJB6NetWIg?view_as=subscriber" target="_blank")
                g-image(src='../assets/icons/youtube.svg')
            li
              a(href="https://twitter.com/bulldeskcrm" target="_blank")
                g-image(src='../assets/icons/twitter.svg')
            li
              a(href="https://www.linkedin.com/company/bulldesk/" target="_blank")
                g-image(src='../assets/icons/linkedin.svg')
          .button-container
            b-button(href="https://app.bulldesk.com.br/cadastro", variant="green")
              | Teste grátis
              g-image(src="../assets/icons/play-button@black.svg", alt="")
        .column.column-a
          h5 Informações
          ul
            li
              a(href="/o-que-e/crm") O que é CRM?
            li
              a(href="/o-que-e/automacao") O que é Automação?
            li
              a(href="/exemplos") Exemplos
            li
              a(href="/cases") Histórias de Sucesso
            li
              a(href="https://blog.bulldesk.com.br" target="_blank") Blog
            li
              a(href="http://ajuda.bulldesk.com.br" target="_blank") Central de Ajuda
            li
              a(href="http://ajuda.bulldesk.com.br" target="_blank") Treinamentos
            //- li
            //-   a(href="#") Cursos
            //- li
            //-   a(href="#") Guias
            //- li
            //-   a(href="#") Ebooks
            //- li
            //-   a(href="#") Webinars
        .column.column-b
          h5 Funcionalidades
          ul
            li
              a(href="https://ajuda.bulldesk.com.br/pt-br/article/automacao-de-marketing-atgu5x" target="_blank") Automação de Marketing
            li
              a(href="https://ajuda.bulldesk.com.br/pt-br/article/funil-de-vendas-i5pkx2" target="_blank") Funil de Vendas
            li
              a(href="https://ajuda.bulldesk.com.br/pt-br/article/whatsapp-marketing-ahg33x" target="_blank") WhatsApp
            li
              a(href="https://ajuda.bulldesk.com.br/pt-br/article/sms-marketing-17744va" target="_blank") SMS
            li
              a(href="https://ajuda.bulldesk.com.br/pt-br/article/e-mail-marketing-1b9qixw" target="_blank") E-mail Marketing
            li
              a(href="https://ajuda.bulldesk.com.br/pt-br/article/landing-page-mgvttx" target="_blank") Landing Pages
            li
              a(href="https://ajuda.bulldesk.com.br/pt-br/article/dashboard-i2l34m" target="_blank") Dashboard
            li
              a(href="https://ajuda.bulldesk.com.br/pt-br/article/calendario-ar2ef4" target="_blank") Calendário
            li
              a(href="https://ajuda.bulldesk.com.br/pt-br/article/link-tracker-1n0why9" target="_blank") Link Builder/Link Tracker
            li
              a(href="https://ajuda.bulldesk.com.br/pt-br/article/relatorios-p0moay" target="_blank") Relatórios
            li
              a(href="https://ajuda.bulldesk.com.br/pt-br/article/controle-de-usuario-cv20c9" target="_blank") Controle de Acesso
        .column.column-c
          h5 Pra quem é o Bulldesk
          ul
            li
              strong Vertical
            li
              a(href="/para-quem/agencias") Agências
            li
              a(href="/para-quem/construtoras") Construtoras
            li
              a(href="/para-quem/ecommerce") Ecommerce
            li
              a(href="/para-quem/ensino") Ensino
            li
              a(href="/para-quem/hoteis") Hotéis
            li
              a(href="/para-quem/saas") SaaS
          ul
            li
              strong Equipes
            li
              a(href="/o-que-faz/marketing") Marketing
            li
              a(href="/o-que-faz/vendas") Vendas
        .column.column-d
          h5 Sobre
          ul
            //- li
            //-   a(href="/quem-somos") Quem somos
            //- li
            //-   a(href="#") Vagas
            //- li
            //-   a(href="#") Encontre um parcero
            //- li
            //-   a(href="#") Seja um parceiro
            //- li
            //-   a(href="/contato") Contato
            li
              a(href="https://docs.bulldesk.com.br/termos-de-uso" target="_blank") Termos de Uso
            li
              a(href="https://docs.bulldesk.com.br/privacidade" target="_blank") Política de Privacidade
</template>

<script>
  import { BButton } from 'bootstrap-vue'

  export default {
    components: {
      BButton,
    }
  }
</script>
