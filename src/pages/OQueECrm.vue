<style lang="sass" scoped>
  @import 'node_modules/include-media/dist/_include-media.scss'
  @import '../assets/styles/_variables.scss'

  header
    position: relative
    z-index: 2

  .hero
    position: relative
    z-index: 1
    height: 343px
    margin: 0 0 100px
    padding: 35px 0 0

    &:before
      content: ""
      position: absolute
      top: -72px
      left: 0
      z-index: -1
      display: block
      width: 100vw
      height: 813px
      background: top center no-repeat url(~@/assets/images/o-que-e-bg-hero.png)

    h1
      margin: 0 0 16px
      font-weight: bold
      color: $white-gray

    h2
      font-size: 1rem
      line-height: 1.56
      color: $white-gray

  .section-a
    text-align: center
    color: $gray-dark

    .row
      &:first-child
        margin: 0 0 130px

        p
          line-height: 1.56

      &:last-child
        margin-left: -30px
        margin-right: -30px

        h3
          width: 100%
          margin: 0 0 60px
          font-size: 1.625rem
          font-weight: bold

        p
          padding-left: 30px
          padding-right: 30px
          text-align: left
          font-size: 0.75rem
          line-height: 2.08
          color: $gray-light

  .section-b
    margin: 90px 0 0
    padding: 200px 0 0

    h3
      margin: 0 0 32px
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15
      color: $gray-dark

    p
      margin: 0 0 23px
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

    .row.bg
      position: relative
      margin-bottom: 110px
      padding-bottom: 150px

      &:before
        content: ""
        position: absolute
        bottom: 0
        left: calc(50% - 50vw)
        z-index: -1
        display: block
        width: 100vw
        height: 1253px
        background: top center no-repeat url(~@/assets/images/o-que-e-bg-section-b.png)

      .col-lg-6
        &:last-child
          position: relative

          &:before,
          &:after
            content: ""
            position: absolute
            display: block
            width: 41.5px
            height: 50.5px
            background: top left url(~@/assets/images/o-que-e-bg-3-section-b.png)

          &:before
            bottom: calc(100% + 145px)
            left: 60px

          &:after
            top: calc(100% + 47px)
            right: 0
            height: 18.5px

          img
            max-width: 100%
            display: block
            margin-left: auto

    ul
      padding: 0
      list-style: none

      li
        max-width: calc(50% - 45px)

        h4
          margin: 0 0 15px
          font-size: 0.75rem
          line-height: 2.08
          color: $purple

          img
            margin-right: 9px

        p
          margin: 0 0 48px
          padding-left: 26px

  .section-c
    text-align: center

    h3
      margin: 0 0 32px
      font-size: 1.625rem
      font-weight: bold
      color: $gray-dark

    p
      margin: 0 0 70px
      line-height: 1.56
      color: $gray-dark

    ul
      margin: 0 0 80px
      list-style: none
      text-align: left

      li
        margin: 0 0 6px
        font-size: 0.75rem
        line-height: 2.08
        color: $gray-light

        &:before
          content: ""
          display: block
          width: 14px
          height: 14px
          border: 4px solid rgba($purple, 0.1)
          border-radius: 100%
          margin: 0 20px 0 0
          background: $purple
          background-clip: padding-box

  .section-d
    position: relative
    margin: 70px 0 160px
    padding: 135px 0 140px
    // background: $white-gray

    &:before,
    &:after
      content: ""
      position: absolute
      left: 0
      bottom: 100%
      z-index: -1
      display: block
      width: 100vw
      height: 440px
      background: bottom center no-repeat url(~@/assets/images/o-que-e-bg-1-section-d.png)
      pointer-events: none

    &:after
      top: 0
      bottom: auto
      height: calc(100% + 460px)
      background: bottom center no-repeat url(~@/assets/images/o-que-e-bg-2-section-d.png) $white-gray

    h3
      margin: 0 0 32px
      font-size: 1.625rem
      font-weight: bold
      color: $gray-dark

    p
      margin: 0 0 65px
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

    ul
      padding: 0
      list-style: none

      li
        max-width: calc(50% - 45px)

        h4
          margin: 0 0 15px
          font-size: 0.75rem
          line-height: 2.08
          color: $purple

          img
            margin-right: 9px

        p
          margin: 0 0 48px
          padding-left: 26px

  .section-e
    color: $gray-dark

    h3
      margin: 70px 0 30px
      font-size: 1.625rem
      font-weight: bold

    p
      margin-bottom: 0

    ul
      margin: 100px 0 60px
      list-style: none

      li
        margin: 0 0 30px
        font-size: 0.75rem

        h4
          font-size: 0.75rem
          font-weight: bold

          &:before
            content: ""
            display: block
            width: 14px
            height: 14px
            border: 4px solid rgba($purple, 0.1)
            border-radius: 100%
            margin: 0 20px 0 0
            background: $purple
            background-clip: padding-box

        p
          padding: 0 0 0 34px
          line-height: 2.08
          color: $gray-light

  .section-f
    position: relative
    margin-bottom: 125px
    padding-top: 210px
    padding-bottom: 200px
    color: $white-gray

    &:before
      content: ""
      position: absolute
      top: -400px
      left: 0
      z-index: -1
      display: block
      width: 100vw
      height: 1383px
      background: center no-repeat url(~@/assets/images/o-que-e-bg-section-f.png)
      background-size: cover

    .row
      margin-left: -30px
      margin-right: -30px

    h3
      margin-bottom: 60px
      padding-left: 30px
      padding-right: 30px
      font-size: 1.625rem
      font-weight: bold

    p
      padding-left: 30px
      padding-right: 30px
      font-size: 0.75rem
      line-height: 2.08

  .section-g
    margin: 0 0 70px

    h3
      margin-bottom: 70px
      font-size: 1.625rem
      font-weight: bold
      color: $gray-dark

    p
      line-height: 1.56
      color: $gray-dark

  .section-h
    position: relative
    margin: 250px 0 290px

    &:before
      content: ""
      position: absolute
      left: 0
      top: -570px
      z-index: -1
      width: 100vw
      height: calc(100% + 1170px)
      background: center no-repeat url(~@/assets/images/o-que-e-bg-section-h.png)
      background-size: cover

    h3
      margin-bottom: 30px
      font-size: 1.625rem
      font-weight: bold
      color: $gray-dark

    p
      margin-bottom: 60px
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

      strong
        color: $gray-dark

    ol
      margin-left: -30px
      margin-right: -30px
      padding-left: 0
      list-style: none
      counter-reset: number

      li
        padding-left: 30px
        padding-right: 30px

        h4
          position: relative
          min-height: 40px
          margin-bottom: 15px
          font-size: 0.75rem
          line-height: 1.67
          color: $purple

          &:before
            counter-increment: number
            content: counter(number)
            position: absolute
            top: 0
            right: calc(100% + 17px)
            font-size: 0.75rem
            font-weight: bold
            line-height: 1.67
            color: $purple

  .section-i
    position: relative
    margin: 50px 0 60px

    h3
      margin-bottom: 30px
      font-size: 1.625rem
      font-weight: bold
      color: $gray-dark

    p
      margin-bottom: 60px
      font-size: 0.75rem
      line-height: 2.08
      color: $gray-light

      strong
        color: $gray-dark

    ol
      margin-left: -30px
      margin-right: -30px
      margin-bottom: 0
      padding-left: 0
      list-style: none
      counter-reset: number

      li
        margin-bottom: 40px
        padding-left: 30px
        padding-right: 30px

        h4
          position: relative
          min-height: 40px
          margin-bottom: 15px
          font-size: 0.75rem
          line-height: 1.67
          color: $purple

          &:before
            counter-increment: number
            content: counter(number)
            position: absolute
            top: 0
            right: calc(100% + 17px)
            font-size: 0.75rem
            font-weight: bold
            line-height: 1.67
            color: $purple

        p
          margin-bottom: 0

  .section-j
    position: relative
    z-index: 2
    padding-top: 110px
    padding-bottom: 130px
    color: $white-gray

    &:before
      content: ""
      position: absolute
      top: -472px
      left: 0
      z-index: -1
      width: 100vw
      height: 1383px
      background: top center no-repeat url(~@/assets/images/o-que-e-bg-section-j.png)

    h3
      margin-bottom: 100px
      font-size: 1rem
      font-weight: bold
      line-height: 1.56

    h4
      margin: 0 0 30px
      font-size: 1.625rem
      font-weight: bold

    p
      font-size: 0.75rem
      line-height: 2.08

  .section-email
    position: relative
    padding-top: 190px
    padding-bottom: 140px
    margin-bottom: 80px
    color: $white-gray

    &:before
      content: ""
      position: absolute
      top: -280px
      left: 0
      display: block
      width: 100vw
      height: 911px
      background: top center no-repeat url(~@/assets/images/verticals-bg-b.png)

    &:last-of-type
      padding-top: 115px
      padding-bottom: 230px

      &:before
        top: -500px
        height: 1136px
        background: top center no-repeat url(~@/assets/images/o-que-e-bg-email.png)

    h3
      margin: 0 0 20px
      font-size: 1.625rem
      font-weight: bold
      line-height: 1.15

    h4
      margin-bottom: 0
      font-size: 1rem
      line-height: 1.56

</style>

<template lang="pug">
  Layout
    header.d-flex
      .container
        Nav(type="dark" logo="white")

    section.hero
      .container
        h1 O que é o CRM?
        h2 Conheça a fundo o que é, seus princípios
          br
          | e como funciona na prática.

    section.section-a
      .container
        .row.justify-content-center
          .col-11
            p O termo CRM vem do termo em inglês “Customer Relationship Management”. Em tradução livre, significa Gestão de Relacionamento com o Cliente. Na prática, o termo refere-se às estratégias, práticas e ferramentas que visam otimizar o relacionamento com o cliente nos momentos de decisão de compra, concretização da venda e pós-venda.  Desse modo, as ferramentas de CRM tornam possível avaliar e otimizar as interações com os clientes através de informações e métricas que ficam registradas no sistema a cada ponto de contato do cliente ou lead com sua equipe de vendas.
              br
              br
              | Na perspectiva do CRM, o foco é o cliente e sua satisfação é o maior objetivo a ser alcançado a partir de um trabalho que prevê suas necessidades e as atende antes delas surgirem de fato.  É por isso que quando falamos no assunto, podemos estar nos referindo à estratégias complexas ou à ferramentas e softwares. Mas calma lá que vamos diferenciar cada uma para você!

        .row.justify-content-between
          h3 Qual a diferença entre estratégia e ferramenta de CRM?

          p.col-lg-6 Quando falamos em CRM, é importante destacar a diferença entre estratégia e ferramenta pois, apesar de serem complementares, são termos que diferenciam-se.
            br
            | Uma estratégia de CRM trabalha com a área de marketing, vendas e atendimento ao cliente. A perspectiva compreende que o relacionamento com o cliente precisa ser excelente em todos os pontos de contato com a sua empresa. Essa noção orienta diversas ações da empresa, a fim de otimizar processos, aumentar as vendas e garantir a fidelização do cliente.
            br
            | Mas como? Em uma estratégia de CRM, o cliente é o foco em todos os momentos, orientando os passos de cada equipe para sua satisfação e, consequentemente, sua fidelização. Para tanto, surgiram no mercado ferramentas de CRM que automatizam pontos de contato e centralizam as informações sobre clientes e potenciais clientes. As ferramentas de CRM otimizam os processos de geração e nutrição de oportunidades de negócio, oferecendo à equipe de vendas uma solução efetiva para a gestão das vendas.  Mas calma lá que vamos explicar melhor!

          p.col-lg-6 Um software de CRM contribui com a organização dos dados de clientes, concentrando em um só lugar as informações de cada um, delineando facilmente as etapas da jornada de compra, conduzindo o vendedor por entre cada etapa e servindo como a plataforma de contato para o fechamento dos negócios.
            br
            | Depois da concretização da venda, o CRM também é útil para o pós-vendas, afinal esse momento é muito valioso para a fidelização do cliente. O CRM contribui neste processo ao centralizar as informações de compra, traçar o perfil do cliente e permitir um atendimento mais personalizado no pós-vendas. Além disso, contribui com informações úteis para tomadas de decisão ao mensurar o rendimento da equipe e a satisfação do cliente.
            br
            | Agora que já definimos as diferenças entre estratégias e ferramentas de CRM, podemos prosseguir. De agora em diante, quando falarmos em CRM, estaremos nos referindo à ferramentas de CRM. A próxima dúvida é: qual a importância de um software de CRM?

    section.section-b
      .container
        .row.bg
          .col-lg-6
            h3 Por que usar uma ferramenta de CRM?
            p Ao optar por uma ferramenta que automatiza e centraliza processos de vendas, a tendência é aumentar o número de leads e oportunidades de venda. Mais que isso: a tendência é ter mais vendas concretizadas e clientes satisfeitos, já o software é projetado para otimizar e personalizar o atendimento de acordo com etapa da jornada de compra que o lead está.
            p O CRM é importante pois categoriza e organiza leads, acelerando e minimizando falhas no processo de vendas. Da mesma forma, o atendimento rápido e personalizado ao cliente traz mais confiança em sua empresa e produto.
              br
              | Além disso, a equipe comercial passa a trabalhar em melhores condições, com as etapas de venda definidas e sem precisar recorrer a recursos obsoletos como planilhas ou anotações.

            h3 Quais são as aplicações do CRM?
            p O CRM pode ser aplicado em 4 situações diversas, a partir de suas funcionalidades: operacional, analítica, colaborativa e estratégica.

          .col-lg-6.d-flex
            .align-self-end
              g-image(src='~/assets/images/o-que-e-bg-2-section-b.png')

        ul.row.justify-content-between
          li.col-lg-6
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | Operacional
            p Nesta aplicação, o CRM atua facilitando trabalhos operacionais: o atendimento ao cliente, pós-venda e suporte. Ele serve como a plataforma de contato entre vendedor ou suporte e o lead ou cliente. Um bom CRM oferece um espaço propício para delinear as etapas de vendas para o vendedor percorrer, minimizando falhas nesse processo operacional.

          li.col-lg-6
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | Estratégica
            p A principal aplicação do CRM é a estratégica. É na estratégia que reside seu grande valor: a partir da concentração de operações, o CRM reúne informações que servem para tomadas de decisão certeiras e estratégicas. Afinal, como uma empresa permanece em pleno desenvolvimento sem planos táticos? Ao apresentar as três aplicabilidades anteriores, o CRM contribui com direcionamentos corporativos que levam as empresas muito além.

          li.col-lg-6
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | Analítica
            p Uma vez que traça as etapas da jornada de compra e centraliza as informações em um só lugar, o CRM serve também para uma aplicação analítica: ele permite extrair dados de todo o processo. Quase todas as interações e respostas são cabíveis de análise, já que a ferramenta gera relatórios e informações que traçam o perfil do cliente e da própria equipe comercial.
              br
              | Com todas as informações em mãos, é possível conhecer profundamente o perfil dos clientes, perceber o que funciona e o que não funciona no processo comercial, além de definir melhor o que mais funciona para o público alvo. Como resultado, você tem ações mais assertivas e mais vendas concretizadas.

          li.col-lg-6
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | Colaborativa
            p O aspecto colaborativo do CRM se dá a partir do momento em que as informações ficam disponíveis para os usuários da plataforma, de acordo com os níveis de acesso de cada um. Dessa maneira, todos que tiverem acesso ao CRM da empresa - vendedores, gerentes, analistas de marketing - conseguem visualizar as informações e trabalhar com as mais úteis.
              br
              | Assim, todas as equipes envolvidas na gestão do relacionamento com o cliente (geralmente equipes de vendas, marketing e suporte) compartilham das informações e dos perfis de cliente da empresa. E com todas essas equipes trabalhando em sintonia, a satisfação do consumidor fica muito mais próxima.

    section.section-email
      .container.text-center
        .row.justify-content-center
          h3.col-md-6 Teste grátis nossa ferramenta que une CRM com Automação de Marketing

        .row.justify-content-center
          h4.col-md-4 Insira seu e-mail abaixo e crie sua conta agora mesmo
        email-input(:identifier="oqueecrm")

    section.section-c
      .container
        .row.justify-content-center
          h3.col-12 Será que sua empresa precisa de um CRM?
          p.col-lg-8 O CRM é uma ferramenta muito útil para toda empresa que precisa vender seu produto ou serviço. Não importa: pequenas, médias e grandes empresas podem (e devem) se beneficiar das funcionalidades deste tipo de software.
            br
            | Mas será que o CRM vai resolver seus problemas? Listamos algumas questões que o CRM contribui diretamente para solucionar. Olha aí:

        .row
          ul.col-12
            li.d-flex.align-items-center A equipe comercial gasta muito tempo com tarefas operacionais?
            li.d-flex.align-items-center Muitos leads estão sendo perdidos?
            li.d-flex.align-items-center A equipe comercial precisa vender mais?
            li.d-flex.align-items-center Você tem equipes de marketing e de vendas que trabalham separadamente?
            li.d-flex.align-items-center O vendedor não encontra facilmente as informações do lead ou cliente?
            li.d-flex.align-items-center O cliente é abordado por vendedores diferentes em cada momento de compra?
            li.d-flex.align-items-center A equipe de vendas não consegue fazer estudos de perfil de cliente?
            li.d-flex.align-items-center O relacionamento com os leads está muito genérico?
            li.d-flex.align-items-center Os relatórios e métricas não estão suficientemente profundos?
            li.d-flex.align-items-center Seus vendedores estão costumam viajar para vender seus produtos?
            li.d-flex.align-items-center As negociações ficam espalhadas em anotações ou planilhas?
            li.d-flex.align-items-center Você já usa um software que chama de CRM mas ele não é integrado com sua realidade nem possui um banco de dados?
            li.d-flex.align-items-center Seus negócios estão crescendo muito rápido e a equipe não está dando conta de atender os clientes?
            li.d-flex.align-items-center Você percebe que a experiência do cliente pode ser ainda melhor?
            li.d-flex.align-items-center Está perdendo clientes por ineficácia no processo de vendas?
            li.d-flex.align-items-center A equipe de T.I. não está dando conta de solucionar todos os problemas do sistema que você já utiliza?
            li.d-flex.align-items-center Precisa de mais agilidade na equipe?

        .row.justify-content-center
          p.col-lg-6 Caso você identifique algum desses problemas em sua empresa, o CRM pode te ajudar e muito. Para entender melhor, que tal conhecer as funcionalidades desse tipo de ferramenta?

    section.section-d
      .container
        .row.justify-content-center.text-center
          h3.col-12 As funcionalidades de um bom CRM
          p.col-lg-6 Um bom CRM de vendas fornece a solução que sua equipe precisa para organizar o fluxo, agilizar processos, fidelizar o cliente e gerar relatórios completos sobre o perfil dos clientes e o trabalho da equipe. Para tanto, algumas funcionalidades são fundamentais em um bom CRM.


        ul.row.justify-content-between
          li.col-lg-6
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | Automação de processos de venda
            p Premissa básica de uma ferramenta CRM, automatizar processos de vendas é fundamental para ganhar tempo para a equipe comercial. O CRM permite configurar atividades automáticas a partir da resposta do cliente e do estágio em que ele está no funil de vendas.
          li.col-lg-6
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | Definição do funil de vendas em estágios
            p O funil de vendas da empresa deve ser contemplado em uma ferramenta de CRM. É importante que estágios como Prospect, Contactado, Interessado e Negociando estejam disponíveis para quem trabalha com a ferramenta. Assim, o funil de vendas fica organizado e fluindo melhor.
          li.col-lg-6
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | Integração com mídias sociais
            p Plataformas de marketing digital voltadas para captação de leads ou nutrição de relacionamento com o cliente podem ser integradas com o CRM para deixar o processo sem falhas. Dessa maneira, o lead que entra por ações em redes sociais, por exemplo, cai automaticamente nas automações que já estiverem programadas para esse contato.
          li.col-lg-6
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | Integração com ações de marketing digital
            p Além da integração com mídias sociais, é importante que o CRM integre-se à outras ações de marketing digital. Já imaginou criar uma landing page especial, com um formulário lindo e ter o lead que o preenche direto no seu pipeline de vendas? Com um CRM completo, isso é mais do que possível: é realidade!
          li.col-lg-6
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | Controle de níveis acesso por equipes
            p Como o intuito do CRM é otimizar o trabalho das equipes e integrá-las, é importante poder distinguir grupos de acesso. Ou seja: controlar e segmentar o que cada equipe tem permissão para fazer ou acessar. Essa medida garante que as informações fiquem mais protegidas e que as equipes respeitem as responsabilidades de cada uma. E o melhor: ainda assim os dados ficam reunidos em um só lugar, sem chances de serem perdidos.
          li.col-lg-6
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | Geração de relatórios e métricas
            p Analisar e pensar estrategicamente exige que seu CRM gere relatórios completos de forma rápida e intuitiva. Uma boa ferramenta apresenta as informações de clientes e da equipe para que o desempenho de todos seja analisado e aprimorado.
          li.col-lg-6
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | Armazenamento de dados
            p Os dados sempre são fundamentais para o pensamento estratégico. É por isso que o armazenamento de dados também é fundamental para um bom CRM, já que quanto mais informações, melhor para o futuro dos negócios.
          li.col-lg-6
            h4.d-flex.align-items-center
              g-image(src='~/assets/icons/check.svg')
              | Interface intuitiva
            p Uma interface intuitiva contribui para a adaptação da equipe ao novo sistema. Além disso, a intenção do CRM é facilitar o trabalho! Portanto, uma interface que seja intuitiva e de fácil compreensão serve para todos usarem a ferramenta de forma mais eficaz.

    section.section-e
      .container
        .row.justify-content-center.text-center
          p.col-lg-9 Com tantas funcionalidades, ainda há dúvidas sobre os benefícios do CRM? Sim?
            br
            | Então nós vamos listar todos os benefícios pra não restar dúvidas!
          h3 Os benefícios de uma ferramenta CRM
          p.col-lg-10 Seja para a organização do fluxo de trabalho da equipe de vendas, seja pela nutrição do relacionamento com o cliente ou pela tomada de decisões estratégicas: o CRM trará muitos benefícios para sua empresa.
            br
            | Conheça alguns:


        .row
          ul.col-12
            li
              h4.d-flex.align-items-center Controle e acompanhamento das vendas
              p Com todas as vendas reunidas em uma só plataforma, com as etapas devidamente traçadas, é muito mais fácil controlar e acompanhar o que está acontecendo no setor comercial e de marketing.
            li
              h4.d-flex.align-items-center Otimização do relacionamento com clientes
              p Com os processos automatizados e organizados, seu cliente não cai no esquecimento. As informações não se perdem, seu vendedor está sempre presente (do momento inicial até o pós-vendas) e as chances de fidelizar o cliente é muito maior! Afinal, a nutrição do relacionamento tem tudo para ser ainda melhor ao usar um bom CRM.
            li
              h4.d-flex.align-items-center Otimização e organização do processo comercial
              p A definição de cada etapa do funil de vendas, a separação clara entre vendedores (os “donos” do cliente) e a possibilidade de classificar o cliente com estágios da jornada de compra acaba organizando todo processo comercial da empresa. Do mesmo modo, o processo comercial fica ainda melhor.
            li
              h4.d-flex.align-items-center Aumento da produtividade da equipe de vendas
              p Ao utilizar o CRM, o vendedor passa muito menos tempo preocupado em caçar clientes e reunir informações e muito mais tempo dedicando-se à atender suas oportunidades de venda. Ao mesmo tempo, a automatização de processos traz agilidade para o funil de vendas e o estreitamento das relações com o cliente. Com tudo isso fluindo bem, a produtividade da equipe de vendas pode aumentar (e muito!).
            li
              h4.d-flex.align-items-center Gerenciamento mais eficaz do time de vendas
              p Para o líder do time, fica muito mais fácil acompanhar o trabalho de seus integrantes numa ferramenta que concentra informações e gera gráficos instantaneamente. Quer saber quantas vendas a vendedora Elaine fez no último mês e quais os status delas? Em alguns cliques os dados estão em mãos.
            li
              h4.d-flex.align-items-center Decisões mais assertivas
              p Você sabe quantos leads entram, quantas oportunidades de venda se concretizaram, quanto está vendendo, quanto tempo os vendedores dedicam-se à cada estágio do funil de vendas, quanto tempo cada cliente leva pra fechar a compra, quantos clientes reclamam no pós venda. Fala sério: não tem como não tomar decisões mais assertivas com todas essas informações organizadas e disponíveis para análise!
            li
              h4.d-flex.align-items-center Integração de equipes
              p A partir de uma interface intuitiva e da concentração de informações, o CRM pode contribuir para a integração das equipes de vendas e marketing. Com as equipes alinhadas, o trabalho em prol de mais leads e vendas fica muito melhor.

    section.section-f
      .container
        .row
          h3.col-12.text-center Os três tipos de CRM

        .row
          p.col-6 Muito se fala em 3 formas de CRM disponíveis no mercado: apenas CRM, eCRM e CRM com Automação de Marketing.
            br
            br
            | O CRM por si só é tudo que explicamos ao longo desse texto quando falamos em ferramenta de CRM.
            br
            br
            | Chamamos de eCRM quando a empresa, além de investir em um sistema CRM, investe também em recursos de tecnologia da informação a fim de alcançar um uso estratégico das informações dos clientes e vendas. Geralmente, essa forma de CRM está disponível na nuvem ou em SaaS.

          p.col-6 Já o CRM com Automação de Marketing desponta como a opção mais completa para quem quer trabalhar com CRM de forma completa.
            br
            br
            | Com os dois recursos reunidos numa só plataforma o percurso do lead até a venda fica muito mais pleno.
            br
            br
            | Afinal, a Automação de Marketing contribui para a geração e nutrição de leads enquanto o CRM cuida da gestão de vendas, pós vendas e suporte.

    section.section-g
      .container.text-center
        h3 O CRM com Automação de Marketing
        p Para as vendas fluírem da melhor forma possível, nada como integrar a equipe de vendas com a equipe de marketing. Para tanto, uma alternativa surgiu: o CRM com a Automação de Marketing. A proposta é que apenas um software dê conta dos processos de Automação de Marketing e de CRM. A alternativa é a melhor opção para quem busca uma integração efetiva entre os processos de marketing de captação e nutrição de leads e os processos de vendas de nutrição de relacionamento com o cliente, fechamento de vendas e pós vendas.
          br
          br
          | A ideia é que o lead seja acompanhado de forma ainda mais completa e que as ações com o cliente não sejam repetidas. Como as interações e informações estão em uma só plataforma, elas ficam disponíveis para avaliações da equipe de vendas e da equipe de marketing. Da mesma forma, o desempenho de ambas as equipes estarão registrados em um só lugar.
          br
          br
          | Fica muito mais fácil extrair dados relevantes desde a captação de leads até o pós vendas e, portanto, avaliar como está fluindo este processo. Com marketing e vendas alinhados, o número de vendas concretizadas tem tudo para aumentar ainda mais.


    section.section-h
      .container
        .row.text-center.justify-content-center
          h3.col-12 Como implementar um CRM em sua empresa?
          p.col-lg-8 Você percebeu que o CRM é uma solução incrível para bombar as vendas e transformar a realidade da sua empresa. Mas por onde começar para implementar um sistema CRM em seus negócios? Calma que vamos te ajudar!
            br
            br
            strong Como escolher o sistema de CRM ideal:

        ol.row.flex-wrap
          li.col-md-4
            h4 Avalie as necessidades da empresa
            p Reflita sobre quais as principais dores da sua empresa e como um CRM irá ajudá-lo.
          li.col-md-4.order-4
            h4 Estabeleça critérios de seleção
            p Trace as funcionalidades que são essenciais para você, o orçamento previsto, o idioma da ferramenta.
          li.col-md-4
            h4 Defina como e quais equipes utilizarão a plataforma
            p Saiba quais equipes usarão o sistema CRM escolhido. Essa medida faz com que você priorize as funcionalidades que servirão para estar pessoas.
          li.col-md-4.order-5
            h4 Garanta um CRM com Automação de Marketing
            p Análise detalhada do funil de marketing e vendas.
          li.col-md-4
            h4 Escolha uma ferramenta bem conceituada no mercado
            p Confira as avaliações de usuários para saber como é a usabilidade da ferramenta CRM que você está escolhendo.
          li.col-md-4.order-6
            h4 Faça o teste e escolha!
            p Faça o teste, confira se a ferramenta funciona bem e adequa-se às expectativas da equipe.

    section.section-i
      .container
        .row.text-center.justify-content-center
          h3.col-12 Implemente o CRM em sua empresa
          p.col-lg-8 Com a plataforma de CRM devidamente escolhida e testada, é hora de implementar de fato o software na empresa. Mas para aproveitar todas as funcionalidades, você precisa preparar o terreno.


        ol.row.flex-wrap
          li.col-md-4
            h4 Estruture e organize o processo comercial da empresa
            p A plataforma deve adaptar-se ao seu processo comercial e não ao contrário. Por isso, antes de implementar a ferramenta, delineie perfeitamente como funciona o processo de vendas.
          li.col-md-4.order-4
            h4 Separe e estruture os dados que serão importados para o CRM
            p A base de leads ou clientes que você já possui podem ser importadas para o novo sistema. Organize esses dados antes de implementá-lo.
          li.col-md-4
            h4 Treine as equipes e explique a importância
            p Ninguém nasceu sabendo! Portanto, treine os funcionários que irão trabalhar com o CRM. Explique sobre como a ferramenta irá otimizar o trabalho de todos - e não substituí-los. É interessante não apenas ensinar sobre como usar a ferramenta, mas também o porquê de usá-la.
          li.col-md-4.order-5
            h4 Importe os dados e faça a integração com outros sistemas
            p Boas ferramentas de CRM permitem a integração com outros sistemas. Caso você possua algum sistema para fazer a integração, faça-a.
          li.col-md-4
            h4 Comece a usar e meça os resultados da implementação
            p Use a ferramenta e acompanhe de perto os dados gerados com a implementação. Acompanhe também o desenvolvimento dos colaboradores ao usar a ferramenta.

    section.section-j
      .container
        .row
          h3.col-12.text-center Mas será que o CRM é válido para todos os tamanhos de empresa?

          .col-4
            h4 CRM em pequenas empresas
            p As pequenas empresas costumam sair na frente quando o assunto é relacionamento com o cliente: elas tendem a ter uma relação mais próxima com seus consumidores. O CRM funciona para elas também! Afinal, todo contato entre vendedor e cliente fica registrado, nenhuma solicitação fica perdida e as informações permanecem concentradas em um só lugar.

          .col-4
            h4 CRM em médias empresas
            p No caso das médias empresas, o CRM pode contribuir especialmente para escalonar e trazer mais agilidade para o processo de vendas. Assim, a empresa pode vender e crescer ainda mais!

          .col-4
            h4 CRM em grandes empresas
            p Com um fluxo ainda maior de vendas e dados, o CRM se torna imprescindível para uma boa organização do todo. Além de otimizar a divisão entre os vendedores e reunir as informações, o CRM em grandes empresas contribui para traçar o perfil dos clientes e aumentar a assertividade das tomadas de decisão.

    section.section-email
      .container.text-center
        .row.justify-content-center
          h3.col-md-6 Teste grátis nossa ferramenta que une CRM com Automação de Marketing

        .row.justify-content-center
          h4.col-md-4 Insira seu e-mail abaixo e crie sua conta agora mesmo
        email-input(identifier="o-que-e-crm")

</template>

<script>
  import Layout from '../layouts/Default'
  import Nav from '../components/Nav'
  import EmailInput from '../components/EmailInput'

  export default {
    components: {
      Layout,
      Nav,
      EmailInput,
    },

    metaInfo: {
      title: 'O que é CRM?',
    },

    data () {
      return {
        email: ''
      }
    }
  }
</script>
