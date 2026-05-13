const fetch = require('node-fetch');

const query = `
{
  product(handle: "zonda-s") {
    id
    title
    storySections: metafield(namespace: "custom", key: "story_sections") {
      references(first: 10) {
        edges {
          node {
            ... on Metaobject {
               handle
               type
               fields {
                 key
                 value
                 reference {
                   ... on MediaImage {
                     image {
                       url
                     }
                   }
                 }
               }
            }
          }
        }
      }
    }
  }
}
`;

fetch("https://tuix0p-s8.myshopify.com/api/2024-04/graphql.json", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Shopify-Storefront-Private-Token": process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
  },
  body: JSON.stringify({ query })
}).then(r => r.json()).then(d => console.dir(d, {depth: null}));
