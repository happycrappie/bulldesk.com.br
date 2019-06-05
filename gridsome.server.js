// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');

module.exports = function (api) {
  api.loadSource(({ addContentType }) => {
    // Load plans
    // const { plans } = await axios.get('https://api.bulldesk.com.br/plans')

    // const contentType = store.addContentType({
    //   typeName: 'plans'
    // })

    // for (const item of plans) {
    //   contentType.addNode({
    //     id: plan.id,
    //     name: plan.name
    //   })
    // }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}
