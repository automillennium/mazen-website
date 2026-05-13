// ─── Component Props ──────────────────────────────────────────────────────────
export interface ProductCardProps {
  title: string;
  price?: string;
  image: string;
  slug: string;
  soldOut?: boolean;
}

// ─── Shopify GraphQL Types ────────────────────────────────────────────────────
export interface MetaImageNode {
  image: { url: string };
}

export interface MetaField {
  key: string;
  value: string;
  reference?: MetaImageNode;
}

export interface StorySection {
  node: { fields: MetaField[] };
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  descriptionHtml: string;
  vendor: string;
  variants: {
    nodes: Array<{ id: string; availableForSale: boolean }>;
  };
  images: {
    nodes: Array<{ url: string }>;
  };
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
  };
  detailImages: {
    references: {
      edges: Array<{ node: MetaImageNode }>;
    };
  } | null;
  storySections: {
    references: {
      edges: StorySection[];
    };
  } | null;
}
