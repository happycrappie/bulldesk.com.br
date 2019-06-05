const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Bulldesk',
  siteDescription: 'Com o Bulldesk você só precisa do Bulldesk.',
  siteUrl: 'https://bulldesk.com.br',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'x123'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')

    // Load variables for all vue-files
    // const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // // or if you use scss
    // types.forEach(type => {
    //   addStyleResource(config.module.rule('scss').oneOf(type))
    // })
  }
}
