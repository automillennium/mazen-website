import { ShopifyProduct } from "@/types";

const SHOPIFY_GRAPHQL_URL = "https://tuix0p-s8.myshopify.com/api/2024-04/graphql.json";
const SHOPIFY_ACCESS_TOKEN = "ae97effa659b9202021f0da3cf0c25b5";

export async function getShopifyProduct(slug: string): Promise<ShopifyProduct | null> {
  const query = `
    query getProduct($handle: String) {
      product(handle: $handle) {
        id
        title
        handle
        descriptionHtml
        vendor
        variants(first: 1) {
          nodes {
            id
            availableForSale
          }
        }
        images(first: 1) {
          nodes {
            url(transform: { maxWidth: 1000 })
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        detailImages: metafield(namespace: "custom", key: "detail_images") {
          references(first: 5) {
            edges {
              node {
                ... on MediaImage {
                  image {
                    url(transform: { maxWidth: 800 })
                  }
                }
              }
            }
          }
        }
        storySections: metafield(namespace: "custom", key: "story_sections") {
          references(first: 10) {
            edges {
              node {
                ... on Metaobject {
                  fields {
                    key
                    value
                    reference {
                      ... on MediaImage {
                        image {
                          url(transform: { maxWidth: 1200 })
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

  try {
    const res = await fetch(SHOPIFY_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables: { handle: slug } }),
      cache: "no-store",
    });
    const json = await res.json();
    return json?.data?.product ?? null;
  } catch (err) {
    console.error("Shopify fetch error:", err);
    return null;
  }
}
