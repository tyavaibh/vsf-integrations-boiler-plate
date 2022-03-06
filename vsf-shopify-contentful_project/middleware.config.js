// module.exports = {
//   integrations: {
//     shopify: {
//       location: '@vue-storefront/shopify-api/server',
//       configuration: {
//         api: {
//           domain: process.env.SHOPIFY_DOMAIN,
//           storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN
//         },
//         currency: 'USD',
//         country: 'US'
//       }
//     }
//   }
// };

module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: shopuk.pukkaherbs.com,
          storefrontAccessToken: 'c70066135c0588964e83fe66d5398510'
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};