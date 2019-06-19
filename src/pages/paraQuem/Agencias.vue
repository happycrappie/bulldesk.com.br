<style lang="sass" scoped>
  @import '../../assets/styles/_variables.scss'

  header
    background-image: url(~@/assets/images/verticals-header-b.png), url(~@/assets/images/verticals-header-a.png)
    background-size: 70% 50%, cover
    background-repeat: no-repeat
    background-position: 85% 10%
    height: 1200px

    .hero
      padding-top: 3rem
      max-width: 550px

      h1
        color: $gray-dark
        line-height: 1
        font-size: 4rem
        font-weight: 700
        color: $white-gray
        letter-spacing: -0.94px
        line-height: 55px

        @media only screen and (max-width: 400px)
          font-size: 3.1rem

        @media only screen and (min-width: 401px) and (max-width: 700px)
          font-size: 3.5rem

      p
        color: $white-gray
        font-size: 1.2rem
        font-weight: 400
        letter-spacing: -0.24px
        line-height: 25px
        width: auto
        max-width: 325px
        margin-top: 2rem

    .icon
      position: absolute
      left: 48%
      top: 620px

  .section-a
    margin-top: -16rem

    .item
      padding: 1.5rem 2rem

      h4
        color: $gray-dark
        font-size: 1.2rem
        font-weight: 700
        letter-spacing: -0.27px
        line-height: 24px

      p
        color: $gray-light
        font-size: 0.8rem
        font-weight: 400
        letter-spacing: 0.24px
        line-height: 25px
        margin-top: 1.5rem
</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="dark" logo="white")

        .hero.d-flex.align-items-center
          div
            h1 Transforme sua agência em uma máquina de resultados
              span.dot.green
            p Conheça o software mais completo de CRM com Automação de Marketing com o melhor custo benefício para a sua agência. Você duvida?

        .icon
          g-image(src='~/assets/images/verticals-down-btn.png')

    .section.section-a
      .container
        .row
          .item.col-4
            h4 Crie campanhas de marketing com alguns cliques
            p Já enviamos até um carro em direção a marte e você ainda perde horas de trabalho criando campanhas? Com o Bulldesk em alguns cliques suas campanhas de inbound, geração de leads, qualificação e etc, estarão prontas.
          .item.col-4
            h4 Comprove o ROI e o fee da sua agência
            p Você só continuará clientes se continuar comprovando o ROI frequentemente. Já pensou ter informações como Custo de Aquisição de Cliente (CAC), Custo por Lead (CPL), Origem do Lead, Quantidade de Leads, entre outras métricas importantes em tempo real? No Bulldesk todos os resultados são atrelados ao nosso bigdata analytics e exibidos em tempo real.
          .item.col-4
            h4 Aumente seu lucro sem diminuir os seus custos
            p Nossos preços foram pensados em você. Por isso que você não irá encontrar no Brasil nenhuma ferramenta com todas as funcionalidades que oferecemos no preço que oferecemos. Garantimos isso, se encontrar, vem falar com a gente.
        .row
          .item.col-4
            h4 Trabalhe em parceria com o seu cliente
            p Do que adianta a sua agência gerar diversos leads mas o seu cliente não conseguir gerar nenhuma venda? Assim que você gerar os leads, coloque os vendedores do seu cliente no CRM do Bulldesk para que eles possam dar atendimento aos leads gerados e você possa acompanhar as vendas.
          .item.col-4
            h4 Crie campanhas omnichannel
            p Mandar email é fácil. Mas quero ver mandar uma campanha que começa com um visitante preenchendo um formulário em uma landing page, depois recebe um email, se abrir o email entra em uma campanha de SMS e termina com o lead recebendo um Whatsapp de um vendedor. É fácil também, mas só no Bulldesk.
          .item.col-4
            h4 Fuja da burocracia
            p Pagar uma taxa de implementação obrigatória? Não ter privilégios por não ser Diamond? Ser parceiro Gold por 8 meses e depois virar member porque perdeu 1 cliente? Por isso que o Bulldesk tem uma única categoria de parceiro e um programa de parcerias simples. Venha conhecer!
</template>

<script>
  import Layout from '../../layouts/Default'
  import Nav from '../../components/Nav'

  export default {
    components: {
      Layout,
      Nav,
    },

    metaInfo: {
      title: 'Agências'
    },

    data() {
      return {
      }
    }
  }
</script>
