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
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1400,
        height: 800
      }
    },
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
  }
}
