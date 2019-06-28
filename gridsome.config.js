module.exports = {
  siteName: 'Bulldesk',
  siteDescription: 'Com o Bulldesk você só precisa do Bulldesk.',
  siteUrl: 'https://bulldesk.com.br',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-65677980-5'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1400,
        height: 800
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/para-quem/*.yaml',
        typeName: 'ParaQuem',
        route: '/para-quem/:id'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/o-que-faz/*.yaml',
        typeName: 'OQueFaz',
        route: '/o-que-faz/:id'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/exemplo/*.yaml',
        typeName: 'Exemplo',
        route: '/exemplos/:id'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/case/*.yaml',
        typeName: 'Case',
        route: '/cases/:id'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/o-que-e/*.yaml',
        typeName: 'OQueE',
        route: '/o-que-e/:id'
      }
    }
  ],
  chainWebpack (config) {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader');

    const svgRule = config.module.rule('svg');
      inlineSvgRule = config.module.rule('inline-svg');

      svgRule
        .exclude
        .add(/inline\.(.*)\.svg/)
        .end()

      inlineSvgRule
        .test(/inline\.(.*)\.svg/)
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
  }
}
