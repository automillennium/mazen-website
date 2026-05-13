import { HeroSlider } from "@/components/modules/HeroSlider";
import { ProductCard } from "@/components/modules/product/ProductCard";
import Link from "next/link";

/**
 * 1. Data Fetching Logic
 */
async function getPetrolifiedProducts() {
  const query = `
    query getProducts {
      products(first: 20) {
        edges {
          node {
            title
            handle
            vendor
            images(first: 1) {
              nodes {
                url
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
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
        'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }
    });

    const json = await res.json();
    const allProducts = json.data?.products?.edges.map((edge: any) => edge.node) || [];
    
    return allProducts.filter((p: any) => 
      p.vendor.toLowerCase() === 'petrolified'
    );
  } catch (error) {
    console.error("Error fetching products from Shopify:", error);
    return [];
  }
}

/**
 * 2. Main Page Component
 */
export default async function Home() {
  const products = await getPetrolifiedProducts();

  const mappedProducts = products.map((p: any) => ({
    title: p.title,
    price: `From ${p.priceRange.minVariantPrice.currencyCode} ${parseFloat(p.priceRange.minVariantPrice.amount).toFixed(0)}`,
    image: p.images.nodes[0]?.url || "/placeholder-image.jpg",
    slug: p.handle,
  }));

  const topProducts = mappedProducts.slice(0, 3);
  const bottomProducts = mappedProducts.slice(3, 5);

  return (
    <div className="flex flex-col w-full pb-0 bg-white overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <HeroSlider />
      
      {/* SECTION 2: HEADER */}
      <section className="w-full text-center py-16 md:py-24 pb-12 px-6">
        <h1 className="text-xl md:text-3xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 text-[#111]">
          Automotive Portraits
        </h1>
        <p className="text-[10px] sm:text-[11px] text-gray-500 tracking-[0.2em] uppercase">
          Captured in clean illustrations by artist Martin Miškolci.
        </p>
      </section>

      {/* SECTION 3: FEATURED SHOP GRID */}
      <section className="w-full pb-20 px-6">
        <div className="text-center pb-12 md:pb-16">
          <p className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-4">Featured</p>
          <h2 className="text-xl md:text-2xl font-light uppercase tracking-[0.2em] text-[#111]">The Shop</h2>
        </div>
        
        {/* Dynamic Top 3 Row - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-[1100px] mx-auto mb-12">
          {topProducts.map((p: any) => (
            <ProductCard key={p.slug} {...p} />
          ))}
        </div>

        {/* Dynamic Bottom 2 Row - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 max-w-[750px] mx-auto">
          {bottomProducts.map((p: any) => (
            <ProductCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

      {/* SECTION 4: BESPOKE CTA */}
      <section className="w-full bg-[#f9f9f9] py-16 md:py-20 flex flex-col items-center justify-center my-10 border-y border-gray-100 px-6 text-center">
        <div className="w-8 h-12 border border-gray-300 bg-white shadow-sm mb-6 flex items-center justify-center shrink-0">
            <div className="w-4 h-6 border border-gray-100 bg-gray-50"></div>
        </div>
        <h3 className="text-[11px] md:text-xs tracking-[0.25em] font-bold uppercase mb-3">Bespoke Prints</h3>
        <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] max-w-xs">
          Bespoke prints tailored specifically for your empty walls. Check it out.
        </p>
      </section>

      {/* SECTION 5: HIGHLIGHTS */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-32 flex flex-col gap-20 md:gap-32">
        
        {/* 1. BESPOKE */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
          <div className="w-full md:w-[45%] flex flex-col items-center md:items-end text-center md:text-right md:pr-16 relative z-20">
            <div className="max-w-[400px]">
              <span className="block text-[11px] font-bold tracking-[0.4em] uppercase text-[#0066cc] mb-4">Personalized</span>
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-6 md:mb-8 text-[#1d1d1f]">Bespoke</h2>
              <p className="text-base md:text-[17px] text-[#86868b] leading-relaxed mb-10 font-medium">
                If you haven't found the right car, color or you just want to match the machine in your dream garage, our bespoke studio is at your service.
              </p>
              <div className="relative h-12 w-full flex justify-center md:justify-end">
                <Link href="/bespoke" className="md:absolute md:right-0 md:translate-x-[20%] text-[14px] bg-[#1d1d1f] text-white px-10 py-3 rounded-full font-semibold tracking-tight hover:bg-[#424245] transition-all z-30 shadow-lg whitespace-nowrap">
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[55%] relative z-10">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl md:rounded-[32px] bg-[#f5f5f7]">
              <img src="//www.petrolified.com/cdn/shop/files/Bespoke_2_Porsche_911_Carrera_30_Historika_840x450.jpg?v=1613158088" alt="Bespoke" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>

        {/* 2. GALLERY */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-0">
          <div className="w-full md:w-[55%] relative z-10">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl md:rounded-[32px] bg-[#f5f5f7]">
              <img src="//www.petrolified.com/cdn/shop/files/Bespoke_2_Porsche_911_Carrera_30_Historika_840x450.jpg?v=1613158088" alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
          <div className="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left md:pl-16 relative z-20">
            <div className="max-w-[400px]">
              <span className="block text-[11px] font-bold tracking-[0.4em] uppercase text-[#0066cc] mb-4">Community</span>
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-6 md:mb-8 text-[#1d1d1f]">Gallery</h2>
              <p className="text-base md:text-[17px] text-[#86868b] leading-relaxed mb-10 font-medium">
                A place where you can find photos from all around the world as shot by our studio, friends and our community.
              </p>
              <div className="relative h-12 w-full flex justify-center md:justify-start">
                <Link href="/gallery" className="md:absolute md:left-0 md:-translate-x-[20%] text-[14px] bg-[#1d1d1f] text-white px-10 py-3 rounded-full font-semibold tracking-tight hover:bg-[#424245] transition-all z-30 shadow-lg whitespace-nowrap">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3. ABOUT US */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
          <div className="w-full md:w-[45%] flex flex-col items-center md:items-end text-center md:text-right md:pr-16 relative z-20">
            <div className="max-w-[400px]">
              <span className="block text-[11px] font-bold tracking-[0.4em] uppercase text-[#0066cc] mb-4">Heritage</span>
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-6 md:mb-8 text-[#1d1d1f]">About Us</h2>
              <p className="text-base md:text-[17px] text-[#86868b] leading-relaxed mb-4 font-medium">
                Born from a deep inclination towards drawing, art, and automotive design. Since launching in 2014, Petrolified has focused on capturing the soul of the machine.
              </p>
              <div className="relative h-12 w-full flex justify-center md:justify-end">
                <Link href="/about" className="md:absolute md:right-0 md:translate-x-[20%] text-[14px] bg-[#1d1d1f] text-white px-10 py-3 rounded-full font-semibold tracking-tight hover:bg-[#424245] transition-all z-30 shadow-lg whitespace-nowrap">
                  Our Story
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[55%] relative z-10">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl md:rounded-[32px] bg-[#f5f5f7]">
              <img src="//www.petrolified.com/cdn/shop/files/Bespoke_2_Porsche_911_Carrera_30_Historika_840x450.jpg?v=1613158088" alt="About" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FOOTER FEATURES */}
      <section className="w-full relative pt-24 mt-16 px-6 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 top-[125px] bg-[#f7f7f7] border-t border-gray-100 z-0"></div>
        
        <div className="max-w-[850px] mx-auto flex flex-col sm:flex-row justify-center gap-16 sm:gap-12 md:gap-24 relative z-10 pb-24">
          
          {/* Instagram */}
          <div className="flex flex-col items-center text-center w-full">
            <div className="mb-8 text-[#b5b5b5] hover:text-black transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[40px] md:w-[50px] h-[40px] md:h-[50px]">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <h4 className="text-[10px] tracking-[0.25em] font-medium uppercase mb-4 text-[#888]">Instagram</h4>
            <p className="text-[10px] text-gray-500 font-light leading-relaxed max-w-[160px]">
              Follow me to stay up to date with the latest endeavors!
            </p>
          </div>

          {/* Framing */}
          <div className="flex flex-col items-center text-center w-full">
            <div className="mb-8 text-[#b5b5b5] hover:text-black transition-colors">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-[40px] md:w-[50px] h-[40px] md:h-[50px]">
                <rect x="5" y="2" width="14" height="20" strokeWidth="2"></rect>
                <rect x="7" y="4" width="10" height="16" fill="white" stroke="#e5e5e5" strokeWidth="1.5"></rect>
              </svg>
            </div>
            <h4 className="text-[10px] tracking-[0.25em] font-medium uppercase mb-4 text-[#888]">Framing</h4>
            <p className="text-[10px] text-gray-500 font-light leading-relaxed max-w-[170px]">
              Incredibly easy with off-the-shelf frames.
            </p>
          </div>

          {/* Shipping */}
          <div className="flex flex-col items-center text-center w-full">
            <div className="mb-8 text-[#b5b5b5] hover:text-black transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-[40px] md:w-[50px] h-[40px] md:h-[50px]">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M7 13L9 11h4l2 1.5h2v2H6v-2h1z"></path>
              </svg>
            </div>
            <h4 className="text-[10px] tracking-[0.25em] font-medium uppercase mb-4 text-[#888]">Shipping</h4>
            <p className="text-[10px] text-gray-500 font-light leading-relaxed max-w-[170px]">
              Available worldwide & free over €98.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}