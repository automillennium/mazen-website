// // import { redirect } from "next/navigation";
// // import { cookies } from "next/headers";
// // import { createCart, addToCart } from "@/lib/shopify";

// // // Fetch single product data from Shopify by slug/handle
// // async function getProductByHandle(handle: string) {
// //   const query = `
// //     query getProductByHandle($handle: String!) {
// //       product(handle: $handle) {
// //         id
// //         title
// //         handle
// //         descriptionHtml
// //         priceRange {
// //           minVariantPrice {
// //             amount
// //             currencyCode
// //           }
// //         }
// //         variants(first: 1) {
// //           edges {
// //             node {
// //               id
// //             }
// //           }
// //         }
// //         images(first: 1) {
// //           edges {
// //             node {
// //               url
// //               altText
// //             }
// //           }
// //         }
// //       }
// //     }
// //   `;

// //   try {
// //     const res = await fetch('https://tuix0p-s8.myshopify.com/api/2024-04/graphql.json', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'Shopify-Storefront-Private-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
// //       },
// //       body: JSON.stringify({ query, variables: { handle } }),
// //       next: { revalidate: 0 } // Always fresh during dev
// //     });

// //     const json = await res.json();
// //     return json?.data?.product;
// //   } catch (error) {
// //     console.error("Error fetching single product from Shopify:", error);
// //     return null;
// //   }
// // }

// // export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
// //   const { slug } = await params;
  
// //   // 1. Load the live Shopify Data
// //   const product = await getProductByHandle(slug);

// //   if (!product) {
// //     return (
// //       <div className="min-h-[50vh] flex items-center justify-center">
// //         <h1 className="text-2xl font-light text-gray-500">Product Not Found.</h1>
// //       </div>
// //     );
// //   }


// //   const priceStr = parseFloat(product.priceRange.minVariantPrice.amount).toString();
// //   const formattedPrice = `${priceStr} ${product.priceRange.minVariantPrice.currencyCode}`;
// //   const imageUrl = product.images?.edges[0]?.node?.url || "https://www.petrolified.com/cdn/shop/files/Pagani-Zonda_F-Mid_slideshow-3000x2000_2400x.jpg";
// //   const variantId = product.variants?.edges[0]?.node?.id;

// //   // 2. Add To Cart Server Action
// //   async function addToCartAction() {
// //     "use server";

// //     if (!variantId) {
// //        console.error("No variant ID found to checkout.");
// //        return;
// //     }

// //     const cookieStore = await cookies();
// //     const cartId = cookieStore.get("shopify_cart_id")?.value;

// //     if (cartId) {
// //       // Cart exists, append to it
// //       await addToCart(cartId, variantId);
// //     } else {
// //       // Create new cart and persist it
// //       const cart = await createCart(variantId);
// //       if (cart?.id) {
// //         cookieStore.set("shopify_cart_id", cart.id, {
// //           httpOnly: true,
// //           secure: process.env.NODE_ENV === "production",
// //           path: "/",
// //           maxAge: 60 * 60 * 24 * 30, // 30 days
// //         });
// //       }
// //     }

// //     // Redirect to the Cart overview page
// //     redirect("/cart");
// //   }

// //   return (
// //     <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-16">
// //       <div className="flex flex-col md:flex-row gap-16 items-start">
        
// //         {/* Left Side: Product Image Display */}
// //         <div className="w-full md:w-2/3 bg-gray-50 flex items-center justify-center p-8 overflow-hidden rounded-md cursor-zoom-in min-h-[60vh]">
// //            <img 
// //               src={imageUrl} 
// //               alt={product.title} 
// //               className="w-full h-auto object-cover max-w-2xl shadow-xl hover:scale-105 transition-transform duration-700"
// //             />
// //         </div>
        
// //         {/* Right Side: Product Form Details */}
// //         <div className="w-full md:w-1/3 flex flex-col space-y-8 sticky top-32">
// //           <div>
// //             <h1 className="text-4xl font-light mb-2">{product.title}</h1>
// //             <p className="text-xl text-gray-500">{formattedPrice}</p>
// //           </div>
          
// //           <div className="text-sm text-gray-600 leading-relaxed border-t border-b border-gray-100 py-6">
// //              <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} className="prose prose-sm max-w-none text-gray-600" />
// //           </div>

// //           <form action={addToCartAction} className="w-full">
// //             <button 
// //               type="submit" 
// //               disabled={!variantId}
// //               className="w-full py-4 px-6 bg-[#111111] text-white text-sm tracking-widest uppercase hover:bg-black/80 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
// //             >
// //               Add to Cart
// //             </button>
// //           </form>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import React, { useState, useEffect, use, useTransition } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { addToCartAction } from '@/app/actions';

// async function getShopifyProduct(slug: string) {
//   const query = `
//     query getProduct($handle: String) {
//       product(handle: $handle) {
//         id
//         title
//         handle
//         descriptionHtml
//         vendor
//         variants(first: 1) {
//           nodes {
//             id
//             availableForSale
//           }
//         }
//         images(first: 1) {
//           nodes {
//             url(transform: { maxWidth: 1000 })
//           }
//         }
//         priceRange {
//           minVariantPrice {
//             amount
//             currencyCode
//           }
//         }
//         detailImages: metafield(namespace: "custom", key: "detail_images") {
//           references(first: 5) {
//             edges {
//               node {
//                 ... on MediaImage {
//                   image {
//                     url(transform: { maxWidth: 800 })
//                   }
//                 }
//               }
//             }
//           }
//         }
//         storySections: metafield(namespace: "custom", key: "story_sections") {
//           references(first: 10) {
//             edges {
//               node {
//                 ... on Metaobject {
//                   fields {
//                     key
//                     value
//                     reference {
//                       ... on MediaImage {
//                         image {
//                           url(transform: { maxWidth: 1200 })
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

//   const response = await fetch(`https://tuix0p-s8.myshopify.com/api/2024-04/graphql.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Shopify-Storefront-Access-Token': 'ae97effa659b9202021f0da3cf0c25b5',
//     },
//     body: JSON.stringify({ query, variables: { handle: slug } }),
//   });

//   return response.json();
// }

// const parseRichText = (jsonString: string) => {
//   try {
//     const data = JSON.parse(jsonString);
//     return data.children.map((child: any) => child.children?.map((inner: any) => inner.value).join("") || "");
//   } catch (e) { return [jsonString]; }
// };

// export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = use(params);
//   const [isPending, startTransition] = useTransition();
//   const [product, setProduct] = useState<any>(null);
//   const [activeTab, setActiveTab] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getShopifyProduct(slug).then((res) => {
//       const productData = res.data.product;
//       setProduct(productData);
//       const sections = productData?.storySections?.references?.edges;
//       if (sections?.length > 0) {
//         setActiveTab(sections[0].node.fields.find((f: any) => f.key === "heading")?.value);
//       }
//       setLoading(false);
//     });
//   }, [slug]);

//   if (loading) return (
//     <div className="h-screen flex items-center justify-center bg-white">
//       <p className="text-[10px] uppercase tracking-[0.3em] animate-pulse">Loading Experience...</p>
//     </div>
//   );

//   if (!product) return <div className="h-screen flex items-center justify-center bg-white"><p>Product Not Found</p></div>;

//   const variant = product.variants?.nodes[0];
//   const isAvailable = variant?.availableForSale;
//   const detailImage = product.detailImages?.references?.edges[0]?.node?.image?.url;
//   const storySections = product.storySections?.references?.edges || [];
//   const currentSectionNode = storySections.find((edge: any) => edge.node.fields.find((f: any) => f.key === "heading")?.value === activeTab)?.node;
  
//   const getFieldValue = (fields: any[], key: string) => fields.find((f: any) => f.key === key)?.value;
//   const getFieldReference = (fields: any[], key: string) => fields.find((f: any) => f.key === key)?.reference;

//   return (
//     <main className="bg-white min-h-screen font-sans text-[#1d1d1f]">
//       {/* HERO SECTION */}
//       <section className="pt-32 pb-24 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
//           <div className="flex justify-center">
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative p-10 bg-white shadow-2xl border-[16px] border-[#111] max-w-[420px] w-full">
//               <div className="aspect-[3/4] bg-[#fdfdfd] flex items-center justify-center overflow-hidden">
//                 <img src={product.images.nodes[0]?.url} alt={product.title} className="w-full h-full object-contain p-4 mix-blend-multiply" />
//               </div>
//             </motion.div>
//           </div>

//           <div className="flex flex-col space-y-10">
//             <header className="space-y-4">
//               <span className="uppercase tracking-[0.5em] text-[10px] text-[#86868b] font-bold">{product.vendor}</span>
//               <h1 className="text-7xl font-light tracking-tighter uppercase leading-[0.8]">{product.title}</h1>
//               <p className="text-2xl font-normal pt-2">{product.priceRange.minVariantPrice.currencyCode} {parseFloat(product.priceRange.minVariantPrice.amount).toFixed(0)}</p>
//             </header>

//             <button 
//               onClick={() => startTransition(async () => await addToCartAction(variant.id))}
//               disabled={!isAvailable || isPending}
//               className={`w-full md:w-fit px-16 py-5 text-[10px] tracking-[0.4em] uppercase transition-all active:scale-95 ${isAvailable && !isPending ? "bg-[#1d1d1f] text-white hover:bg-black" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
//             >
//               {isPending ? "Adding..." : isAvailable ? "Add to Cart" : "Sold Out"}
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* DETAILS & SIZE GUIDE SECTION (From your screenshot) */}
//       <section className="py-24 px-6 border-t border-gray-50">
//         <div className="max-w-5xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//             {/* Left: Size Illustration */}
//             <div className="flex justify-center md:justify-end pr-0 md:pr-12">
//               {detailImage && (
//                 <motion.img 
//                   initial={{ opacity: 0 }} 
//                   whileInView={{ opacity: 1 }} 
//                   src={detailImage} 
//                   alt="Size Specifications" 
//                   className="max-w-[360px] w-full opacity-60 mix-blend-multiply" 
//                 />
//               )}
//             </div>

//             {/* Right: Technical Specs */}
//             <div className="space-y-8 pt-4">
//               <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-gray-900">Details</h3>
//               <div 
//                 className="text-[13px] leading-[2.4] text-[#6e6e73] [&_ul]:list-none [&_li]:relative [&_li]:pl-6 [&_li]:before:content-['-'] [&_li]:before:absolute [&_li]:before:left-0" 
//                 dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} 
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* STORYTELLING TABS SECTION */}
//       <section className="py-24 bg-white border-t border-gray-100">
//         <nav className="flex justify-center space-x-12 mb-20 px-6 overflow-x-auto scrollbar-hide">
//           {storySections.map((edge: any) => {
//             const title = edge.node.fields.find((f: any) => f.key === "heading").value;
//             return (
//               <button
//                 key={title}
//                 onClick={() => setActiveTab(title)}
//                 className={`text-[10px] tracking-[0.3em] uppercase pb-4 transition-all relative whitespace-nowrap ${activeTab === title ? "text-black font-semibold" : "text-gray-300 hover:text-gray-500"}`}
//               >
//                 {title}
//                 {activeTab === title && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black" />}
//               </button>
//             );
//           })}
//         </nav>

//         <AnimatePresence mode="wait">
//           {currentSectionNode && (
//             <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
//               <div className="w-full bg-[#f5f5f7] py-20 flex justify-center items-center overflow-hidden">
//                 <div className="w-full h-[50vh] relative flex items-center justify-center">
//                   {getFieldReference(currentSectionNode.fields, 'image')?.image?.url && (
//                     <img src={getFieldReference(currentSectionNode.fields, 'image').image.url} alt={activeTab} className="w-full h-full object-contain mix-blend-multiply px-12 md:px-32" />
//                   )}
//                 </div>
//               </div>

//               <div className="max-w-5xl mx-auto px-8 py-24">
//                 <header className="mb-16">
//                   <span className="text-[11px] uppercase tracking-[0.4em] text-[#0066cc] font-bold block mb-4">
//                     {getFieldValue(currentSectionNode.fields, "sub_heading")}
//                   </span>
//                   <h2 className="text-5xl font-light tracking-tight uppercase text-[#1d1d1f]">
//                     {getFieldValue(currentSectionNode.fields, "heading")}
//                   </h2>
//                 </header>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
//                   {parseRichText(getFieldValue(currentSectionNode.fields, "description") || "").map((para: string, idx: number) => (
//                     para && <p key={idx} className="text-[15px] leading-[1.8] text-[#6e6e73] font-normal">{para}</p>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </section>
//     </main>
//   );
// }




"use client";

import React, {
  useState, useEffect, useRef, useCallback, use, useTransition,
} from "react";
import Link from "next/link";
import {
  motion, AnimatePresence,
  useScroll, useTransform, useSpring, useMotionValue,
} from "framer-motion";
import { addToCartAction } from "@/app/actions";
import { getShopifyProduct } from "@/lib/shopify/client";
import { MetaField, ShopifyProduct } from "@/types";

// ─── Utilities ────────────────────────────────────────────────────────────────
const parseRichText = (jsonString: string): string[] => {
  if (!jsonString) return [];
  try {
    const data = JSON.parse(jsonString);
    return (data.children as any[])
      .map((child: any) =>
        child.children?.map((inner: any) => inner.value).join("") ?? ""
      )
      .filter(Boolean);
  } catch {
    return [jsonString];
  }
};

const htmlToSpecLines = (html: string): string[] => {
  if (!html) return [];
  const stripped = html
    .replace(/<li[^>]*>/gi, "• ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
  return stripped.split("\n").map((l) => l.trim()).filter(Boolean);
};

const getFieldValue = (fields: MetaField[], key: string) =>
  fields.find((f) => f.key === key)?.value ?? "";

const getFieldReference = (fields: MetaField[], key: string) =>
  fields.find((f) => f.key === key)?.reference ?? null;

// ─── Magnetic Button ──────────────────────────────────────────────────────────
function MagneticButton({
  children, className, onClick, disabled,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 280, damping: 22 });
  const sy = useSpring(my, { stiffness: 280, damping: 22 });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 90) { mx.set(dx * 0.3); my.set(dy * 0.3); }
    },
    [mx, my]
  );

  const onLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </motion.button>
  );
}

// ─── Scroll-Parallax Image ────────────────────────────────────────────────────
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.93, 1, 0.95]);

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl w-full">
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="w-full object-cover"
      />
    </div>
  );
}

// ─── Two-Column Specs Table ───────────────────────────────────────────────────
function SpecsTable({ html }: { html: string }) {
  const lines = htmlToSpecLines(html);
  const pairs = lines.map((line) => {
    const clean = line.replace(/^[•\-]\s*/, "");
    const colonIdx = clean.indexOf(":");
    if (colonIdx > 0 && colonIdx < 36) {
      return {
        label: clean.slice(0, colonIdx).trim(),
        value: clean.slice(colonIdx + 1).trim(),
      };
    }
    return { label: null as string | null, value: clean };
  });

  return (
    <div className="divide-y divide-[#d2d2d7]">
      {pairs.map((p, i) => (
        <motion.div
          key={i}
          className="grid grid-cols-2 py-[14px] gap-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.035 }}
        >
          {p.label ? (
            <>
              <span className="text-[13px] text-[#1d1d1f] font-medium leading-relaxed">
                {p.label}
              </span>
              <span className="text-[13px] text-[#86868b] leading-relaxed">
                {p.value}
              </span>
            </>
          ) : (
            <span className="col-span-2 text-[13px] text-[#86868b] leading-relaxed">
              {p.value}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// ─── Story Tab Panel ──────────────────────────────────────────────────────────
function StoryPanel({ node }: { node: { fields: MetaField[] } }) {
  const heading     = getFieldValue(node.fields, "heading");
  const subHeading  = getFieldValue(node.fields, "sub_heading");
  const description = getFieldValue(node.fields, "description");
  const imgRef      = getFieldReference(node.fields, "image");
  const imgUrl      = imgRef?.image?.url ?? null;
  const paras       = parseRichText(description);

  return (
    <>
      {/* Full-bleed image canvas */}
      <div
        className="w-full bg-[#f5f5f7] overflow-hidden flex items-center justify-center"
        style={{ height: "56vh" }}
      >
        {imgUrl && (
          <motion.img
            src={imgUrl}
            alt={heading}
            className="w-full h-full object-cover mix-blend-multiply"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        )}
      </div>

      {/* Text body */}
      <div className="max-w-4xl mx-auto px-8 py-20">
        <motion.header
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
        >
          {subHeading && (
            <span className="block text-[11px] uppercase tracking-[0.45em] text-[#0066cc] font-semibold mb-4">
              {subHeading}
            </span>
          )}
          <h2
            className="text-[clamp(2.4rem,5vw,4rem)] font-medium text-[#1d1d1f] leading-[1.05]"
            style={{ letterSpacing: "-0.05em" }}
          >
            {heading}
          </h2>
        </motion.header>

        {paras.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {paras.map((para, idx) => (
              <motion.p
                key={idx}
                className="text-[16px] text-[#86868b] leading-relaxed"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.22 + idx * 0.07 }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// ─── Loading Skeleton ─────────────────────────────────────────────────────────
function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <p
        className="text-[10px] uppercase tracking-[0.4em] text-[#86868b] animate-pulse"
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}
      >
        Loading Experience…
      </p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [isPending, startTransition] = useTransition();

  const [product, setProduct]       = useState<ShopifyProduct | null>(null);
  const [loading, setLoading]       = useState(true);
  const [notFound, setNotFound]     = useState(false);
  const [activeTab, setActiveTab]   = useState("");
  const [addedState, setAddedState] = useState<"idle" | "adding" | "done">("idle");

  // ── Fetch live product ──────────────────────────────────────────────────────
  useEffect(() => {
    setLoading(true);
    getShopifyProduct(slug).then((data) => {
      if (!data) { setNotFound(true); setLoading(false); return; }
      setProduct(data);
      const firstTab = data.storySections?.references?.edges[0]
        ?.node.fields.find((f) => f.key === "heading")?.value ?? "";
      setActiveTab(firstTab);
      setLoading(false);
    });
  }, [slug]);

  // ── Guards ──────────────────────────────────────────────────────────────────
  if (loading) return <LoadingSkeleton />;
  if (notFound || !product) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <h1 className="text-2xl font-light text-[#86868b]">Product Not Found.</h1>
      </div>
    );
  }

  // ── Derived values from live Shopify data ───────────────────────────────────
  const variant     = product.variants.nodes[0];
  const isAvailable = variant?.availableForSale ?? false;
  const variantId   = variant?.id ?? null;

  const price    = parseFloat(product.priceRange.minVariantPrice.amount).toFixed(0);
  const currency = product.priceRange.minVariantPrice.currencyCode;
  const heroImg  = product.images.nodes[0]?.url ?? null;

  const detailImg =
    product.detailImages?.references?.edges[0]?.node?.image?.url ?? null;

  const storySections = product.storySections?.references?.edges ?? [];

  const currentNode = storySections.find(
    (e) => e.node.fields.find((f) => f.key === "heading")?.value === activeTab
  )?.node ?? null;

  // ── Add to cart ─────────────────────────────────────────────────────────────
  const handleAddToCart = () => {
    if (!variantId || !isAvailable || isPending) return;
    setAddedState("adding");
    startTransition(async () => {
      try {
        await addToCartAction(variantId);
        setAddedState("done");
        setTimeout(() => setAddedState("idle"), 3000);
      } catch (err) {
        console.error("Add to cart error:", err);
        setAddedState("idle");
      }
    });
  };

  return (
    <main
      className="bg-white min-h-screen text-[#1d1d1f]"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* ── HERO ── */}
      <section className="pt-28 pb-0 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* {product.vendor && (
              <span className="block text-[11px] uppercase tracking-[0.45em] text-[#86868b] font-semibold mb-4">
                {product.vendor}
              </span>
            )} */}
            <h1
              className="text-[clamp(3rem,8vw,6.5rem)] font-medium text-[#1d1d1f] leading-[1] mb-3"
              style={{ letterSpacing: "-0.05em" }}
            >
              {product.title}
            </h1>
            <p className="text-[19px] text-[#86868b] leading-relaxed">
              From {currency} {parseInt(price).toLocaleString()}
            </p>
          </motion.div>

          {heroImg && (
            <motion.div
              className="relative mx-auto flex justify-center items-end"
              style={{ height: "clamp(300px, 50vh, 560px)" }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={heroImg}
                alt={product.title}
                className="relative z-10 h-full w-auto object-contain mix-blend-multiply"
              />
              {/* Elongated contact shadow */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
                style={{
                  width: "55%",
                  height: 28,
                  background: "radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 75%)",
                  filter: "blur(8px)",
                }}
              />
            </motion.div>
          )}
        </div>

        {/* Off-white CTA shelf */}
        <div className="w-full bg-[#f5f5f7]">
          <div className="max-w-[1100px] mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <MagneticButton
                onClick={handleAddToCart}
                disabled={!isAvailable || isPending}
                className={[
                  "px-8 py-3 rounded-full text-[14px] font-medium transition-all duration-200",
                  addedState === "done"
                    ? "bg-green-500 text-white"
                    : isAvailable
                    ? "bg-[#0071e3] text-white hover:bg-[#0077ed] active:scale-[0.97]"
                    : "bg-[#d2d2d7] text-[#86868b] cursor-not-allowed",
                ].join(" ")}
              >
                {addedState === "adding"
                  ? "Adding…"
                  : addedState === "done"
                  ? "✓ Added to Cart"
                  : isAvailable
                  ? "Add to Cart"
                  : "Sold Out"}
              </MagneticButton>
              <MagneticButton className="px-8 py-3 rounded-full text-[14px] font-medium text-[#0071e3] hover:bg-[#0071e3]/10 transition-all duration-200 active:scale-[0.97]">
                Learn more →
              </MagneticButton>
            </div>
            <p className="text-[13px] text-[#86868b] leading-relaxed text-center sm:text-right">
              Free delivery · 14-day returns
              <br />
              <span className="text-[#1d1d1f] font-medium">
                {currency} {parseInt(price).toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── PARALLAX DETAIL IMAGE + SPECS ── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-28">
            {detailImg ? (
              <ParallaxImage src={detailImg} alt={`${product.title} detail`} />
            ) : heroImg ? (
              <ParallaxImage src={heroImg} alt={product.title} />
            ) : null}
          </div>
          <div>
            <motion.h3
              className="text-[11px] uppercase tracking-[0.45em] font-semibold text-[#1d1d1f] mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Technical Specifications
            </motion.h3>
            {product.descriptionHtml ? (
              <SpecsTable html={product.descriptionHtml} />
            ) : (
              <p className="text-[13px] text-[#86868b]">No specifications available.</p>
            )}
          </div>
        </div>
      </section>

      {/* ── STORY TABS ── */}
      {storySections.length > 0 && (
        <section className="bg-white border-t border-[#d2d2d7]/50">
          <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-2xl border-b border-[#d2d2d7]/60">
            <div className="max-w-[1060px] mx-auto px-6 flex overflow-x-auto scrollbar-hide">
              {storySections.map((edge) => {
                const title = edge.node.fields.find((f) => f.key === "heading")?.value ?? "";
                const isActive = activeTab === title;
                return (
                  <button
                    key={title}
                    onClick={() => setActiveTab(title)}
                    className={[
                      "relative py-5 px-6 text-[13px] font-medium whitespace-nowrap transition-colors duration-200 shrink-0",
                      isActive ? "text-[#1d1d1f]" : "text-[#86868b] hover:text-[#1d1d1f]",
                    ].join(" ")}
                  >
                    {title}
                    {isActive && (
                      <motion.div
                        layoutId="tabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1d1d1f]"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          <AnimatePresence mode="wait">
            {currentNode && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <StoryPanel node={currentNode} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      )}

      {/* ── FOOTER CTA ── */}
      <section className="bg-[#f5f5f7] py-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {product.vendor && (
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#86868b] font-semibold mb-4">
              {product.vendor}
            </p>
          )}
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-medium text-[#1d1d1f] mb-3"
            style={{ letterSpacing: "-0.05em" }}
          >
            {product.title}
          </h2>
          <p className="text-[17px] text-[#86868b] leading-relaxed mb-10">
            From {currency} {parseInt(price).toLocaleString()}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <MagneticButton
              onClick={handleAddToCart}
              disabled={!isAvailable || isPending}
              className={[
                "px-9 py-3 rounded-full text-[14px] font-medium transition-colors active:scale-[0.97]",
                addedState === "done"
                  ? "bg-green-500 text-white"
                  : isAvailable
                  ? "bg-[#0071e3] text-white hover:bg-[#0077ed]"
                  : "bg-[#d2d2d7] text-[#86868b] cursor-not-allowed",
              ].join(" ")}
            >
              {addedState === "done" ? "✓ Added" : "Add to Cart"}
            </MagneticButton>
            <MagneticButton className="px-9 py-3 rounded-full border border-[#d2d2d7] text-[#1d1d1f] text-[14px] font-medium hover:bg-white transition-colors active:scale-[0.97]">
             <Link  href="/shop">
             Compare models
             </Link>
            </MagneticButton> 
          </div>
        </motion.div>
      </section>
    </main>
  );
}