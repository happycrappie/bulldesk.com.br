// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://staging.bulldesk.com.br/api/plan')

    const contentType = store.addContentType({
      typeName: 'MonthlyPlans',
    })

    for (const plan of data.month) {
      contentType.addNode(plan)
    }
  })
}
