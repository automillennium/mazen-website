export const SHOPIFY_ENDPOINT = "https://tuix0p-s8.myshopify.com/api/2024-04/graphql.json";
export const SHOPIFY_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";

export async function shopifyFetch(query: string, variables = {}) {
  try {
    const res = await fetch(SHOPIFY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Shopify-Storefront-Private-Token": SHOPIFY_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Shopify fetch failed: ${res.status}`);
    }

    const json = await res.json();
    if (json.errors) {
      console.error("Shopify GraphQL errors:", json.errors);
      throw new Error("GraphQL Error");
    }

    return json.data;
  } catch (error) {
    console.error("Error with shopifyFetch:", error);
    return null;
  }
}

export async function getCart(cartId: string) {
  const query = `
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                    handle
                  }
                  image {
                    url
                    altText
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const data = await shopifyFetch(query, { cartId });
  return data?.cart;
}

export async function createCart(variantId: string) {
  const mutation = `
    mutation cartCreate($input: CartInput) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
      }
    }
  `;
  const variables = {
    input: {
      lines: [
        {
          merchandiseId: variantId,
          quantity: 1,
        },
      ],
    },
  };
  const data = await shopifyFetch(mutation, variables);
  return data?.cartCreate?.cart;
}

export async function addToCart(cartId: string, variantId: string) {
  const mutation = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
        }
      }
    }
  `;
  const variables = {
    cartId,
    lines: [
      {
        merchandiseId: variantId,
        quantity: 1,
      },
    ],
  };
  const data = await shopifyFetch(mutation, variables);
  return data?.cartLinesAdd?.cart;
}

export async function removeFromCart(cartId: string, lineId: string) {
  const mutation = `
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id
        }
      }
    }
  `;
  const variables = {
    cartId,
    lineIds: [lineId],
  };
  const data = await shopifyFetch(mutation, variables);
  return data?.cartLinesRemove?.cart;
}



export async function updateCartQuantity(
  cartId: string,
  { lineId, quantity }: { lineId: string; quantity: number }
) {
  const query = `
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          id
          totalQuantity
          lines(first: 100) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                  }
                }
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  try {
    const res = await fetch(SHOPIFY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Shopify-Storefront-Private-Token": SHOPIFY_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables: {
          cartId,
          lines: [
            {
              id: lineId,
              quantity: quantity,
            },
          ],
        },
      }),
      cache: 'no-store',
    });

    const json = await res.json();

    if (json.errors) {
      throw new Error(json.errors[0].message);
    }

    if (json.data?.cartLinesUpdate?.userErrors?.length > 0) {
      throw new Error(json.data.cartLinesUpdate.userErrors[0].message);
    }

    return json.data.cartLinesUpdate.cart;
  } catch (error) {
    console.error("Error updating cart quantity:", error);
    return null;
  }
}