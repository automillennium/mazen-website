// import { ProductCard } from "@/components/modules/product/ProductCard";

// export const metadata = {
//   title: "Shop - Mazen",
//   description: "Explore our latest collections from Petrolified and Cool & Vintage.",
// };

// // Function to fetch products securely from Shopify
// async function getShopifyProducts() {
//   const query = `
// {
//   products(first: 250) {
//     edges {
//       node {
//         id
//         title
//         handle
//         tags
//         descriptionHtml
//         vendor
//         productType
//         variants(first: 1) {
//           edges {
//             node {
//               id
//               availableForSale
//             }
//           }
//         }
//         priceRange {
//           minVariantPrice {
//             amount
//             currencyCode
//           }
//         }
//         images(first: 1) {
//           edges {
//             node {
//               url(transform: {maxWidth: 500, maxHeight: 500})
//               altText
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `;

//   try {
//     const res = await fetch('https://tuix0p-s8.myshopify.com/api/2024-04/graphql.json', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Shopify-Storefront-Private-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
//       },
//       body: JSON.stringify({ query }),
//       next: { revalidate: 0 } 
//     });

//     if (!res.ok) return [];
//     const json = await res.json();
//     return json.data?.products?.edges.map((edge: any) => edge.node) || [];
//   } catch (error) {
//     console.error("Error fetching from Shopify:", error);
//     return [];
//   }
// }

// export default async function Shop() {
//   // Fetch all products from Shopify
//   const allProducts = await getShopifyProducts();

//   // Helper to map Shopify data to ProductCard props
//   const formatProduct = (prod: any) => ({
//     title: prod.title,
//     image: prod.images?.edges[0]?.node?.url || "https://via.placeholder.com/500",
//     slug: prod.handle,
//     price: `${parseFloat(prod.priceRange.minVariantPrice.amount)} ${prod.priceRange.minVariantPrice.currencyCode}`,
//   });

//   // Split products by Vendor
//   const petrolifiedProducts = allProducts
//     .filter((p: any) => p.vendor === "Petrolified" || p.vendor === "Image store")
//     .map(formatProduct);

//   const vintageProducts = allProducts
//     .filter((p: any) => p.vendor === "Cool & Vintage")
//     .map(formatProduct);

//   return (
//     <>
//       <div className="w-full flex flex-col min-h-screen">
//         {/* Top Full-Width Hero */}
//         <div className="w-full h-[50vh] relative">
//           <img
//             src="https://www.petrolified.com/cdn/shop/files/Huayra_Roadster_slideshow-3000x2000_cdfd752e-f9f7-4859-8d96-e297c5994cbe_2400x.jpg"
//             alt="Shop Hero"
//             className="w-full h-full object-cover object-bottom filter hue-rotate-15 contrast-125 saturate-50"
//           />
//         </div>

//         <div className="bg-[#fcfcfc] w-full">
//           {/* Section 1: Live Shopify Storefront (Petrolified) */}
//           <section className="max-w-[1200px] mx-auto px-6 pt-32 pb-24 text-center">
//             <p className="text-[10px] tracking-[0.3em] font-bold uppercase text-gray-400 mb-4">Latest Arrivals</p>
//             <h1 className="text-3xl lg:text-4xl font-light tracking-[0.1em] uppercase text-gray-900 border-b border-gray-300 pb-6 mb-20 inline-block px-12">
//               Featured Collection
//             </h1>
//             {/* THE IMAGE YOU WANTED TO KEEP */}
//             <img
//               src="https://www.petrolified.com/cdn/shop/files/Pagani-Zonda_F-Mid_slideshow-3000x2000_2400x.jpg"
//               alt="Pagani Feature"
//               className="w-full max-w-[900px] mx-auto h-auto mix-blend-multiply mb-16 filter brightness-110 saturate-50"
//             />
//             <p className="text-[13px] text-gray-500 max-w-2xl mx-auto leading-loose mb-32">
//               These prints are hooked up dynamically to your live Shopify Store backend. When you add a new product inside your Shopify Admin, it renders here automatically.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 px-8 md:px-16 lg:px-24">
//               {petrolifiedProducts.map((p: any) => (
//                 <ProductCard key={p.slug} {...p} />
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* Section 2: Cool & Vintage (Now Dynamic) */}
//         <div className="bg-[#f5f5f5] w-full border-t border-gray-200">
//           <section className="max-w-[1200px] mx-auto px-6 py-32 text-center">
//             <p className="text-[10px] tracking-[0.3em] font-bold uppercase text-gray-400 mb-4">Collection By</p>
//             <h2 className="text-3xl lg:text-4xl font-light tracking-[0.1em] uppercase text-gray-900 border-b border-gray-300 pb-6 mb-16 inline-block px-12">
//               Cool & Vintage x Petrolified
//             </h2>
//             <p className="text-[13px] text-gray-500 max-w-2xl mx-auto leading-loose mb-32">
//               Teaming up with Cool & Vintage to capture the essence of their restored Land Rover Defenders. Adventure driven styling meets minimalist art.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 px-8 md:px-16 lg:px-24">
//               {vintageProducts.length > 0 ? (
//                 vintageProducts.map((p: any) => (
//                   <ProductCard key={p.slug} {...p} />
//                 ))
//               ) : (
//                 <div className="col-span-full text-center text-gray-400 py-12 text-sm tracking-widest uppercase">
//                   No products found for this vendor.
//                 </div>
//               )}
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }



import { ProductCard } from "@/components/modules/product/ProductCard";

export const metadata = {
  title: "Shop - Collection",
  description: "Explore archival automotive prints from Petrolified and Cool & Vintage.",
};

async function getShopifyProducts() {
  const query = `
{
  products(first: 250) {
    edges {
      node {
        id
        title
        handle
        vendor
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          edges {
            node {
              url(transform: {maxWidth: 800, maxHeight: 800})
              altText
            }
          }
        }
      }
    }
  }
}
`;

  try {
    const res = await fetch('https://tuix0p-s8.myshopify.com/api/2024-04/graphql.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Shopify-Storefront-Private-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 } // Revalidate every minute
    });

    if (!res.ok) return [];
    const json = await res.json();
    return json.data?.products?.edges.map((edge: any) => edge.node) || [];
  } catch (error) {
    console.error("Error fetching from Shopify:", error);
    return [];
  }
}

export default async function Shop() {
  const allProducts = await getShopifyProducts();

  const formatProduct = (prod: any) => ({
    title: prod.title,
    image: prod.images?.edges[0]?.node?.url || "",
    slug: prod.handle,
    price: `${parseInt(prod.priceRange.minVariantPrice.amount).toLocaleString()} ${prod.priceRange.minVariantPrice.currencyCode}`,
  });

  const petrolifiedProducts = allProducts
    .filter((p: any) => ["Petrolified", "Image store"].includes(p.vendor))
    .map(formatProduct);

  const vintageProducts = allProducts
    .filter((p: any) => p.vendor === "Cool & Vintage")
    .map(formatProduct);

  return (
    <main className="bg-white min-h-screen text-[#1d1d1f]" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}>
      
      {/* ── TOP HERO CANVAS ── */}
      <section className="relative w-full h-[60vh] overflow-hidden bg-[#f5f5f7]">
        <img
          src="https://www.petrolified.com/cdn/shop/files/Huayra_Roadster_slideshow-3000x2000_cdfd752e-f9f7-4859-8d96-e297c5994cbe_2400x.jpg"
          alt="Shop Hero"
          className="w-full h-full object-cover object-center mix-blend-multiply opacity-90"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
             <span className="block text-[12px] uppercase tracking-[0.5em] text-[#86868b] font-semibold mb-6">The Collection</span>
             <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-medium leading-none tracking-[-0.05em]">Archival Art.</h1>
          </div>
        </div>
      </section>

      {/* ── PETROLIFIED COLLECTION ── */}
      <section className="bg-white pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <header className="text-center mb-32">
            <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-medium tracking-tight mb-8">Featured Collection</h2>
            <div className="w-full max-w-[850px] mx-auto mb-20">
               <img
                src="/Zonda.gif"
                alt="Pagani Feature"
                className="w-full h-auto mix-blend-multiply filter brightness-105"
              />
            </div>
            <p className="text-[19px] text-[#86868b] max-w-2xl mx-auto leading-relaxed">
              Hand-drawn digital illustrations, printed on museum-grade archival paper. Synchronized live with our studio.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
            {petrolifiedProducts.map((p: any) => (
              <ProductCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── COOL & VINTAGE COLLAB (Off-white shelf) ── */}
      <section className="bg-[#f5f5f7] py-32 border-t border-[#d2d2d7]/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <header className="text-center mb-24">
            <span className="block text-[11px] uppercase tracking-[0.4em] text-[#0066cc] font-bold mb-4">Collaboration</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium tracking-tight mb-8">Cool & Vintage</h2>
            <p className="text-[17px] text-[#86868b] max-w-xl mx-auto leading-relaxed">
              Capturing the soul of restored Land Rover Defenders. Adventure-driven styling meets minimalist precision.
            </p>
          </header>

          {vintageProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
              {vintageProducts.map((p: any) => (
                <ProductCard key={p.slug} {...p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[13px] uppercase tracking-widest text-[#86868b]">Coming Soon</p>
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="bg-white py-32 border-t border-[#d2d2d7]/30">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-medium mb-10">Don't see your car?</h2>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#0071e3] text-white px-10 py-4 rounded-full text-[15px] font-medium hover:bg-[#0077ed] transition-colors">
              Bespoke Request
            </button>
            <button className="text-[#0071e3] px-10 py-4 text-[15px] font-medium hover:underline">
              Contact Studio →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}