



"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// ─── DATA ──────────────────────────────────────────────────────────────────  
const ITEMS = [
  {
    id: 1,
    src: "https://www.petrolified.com/cdn/shop/files/Huayra_Roadster_slideshow-3000x2000_cdfd752e-f9f7-4859-8d96-e297c5994cbe_2400x.jpg",
    title: "Pagani Huayra Roadster",
    category: "Hypercar · Italy",
    span: "lg:col-span-2 lg:row-span-2 col-span-1 row-span-1",
  },
  {
    id: 2,
    src: "https://www.petrolified.com/cdn/shop/files/CnV_Turbo_Orange_Land_Rover_Defender_slideshow-3000x2000_2000x.jpg",
    title: "Defender Turbo Edition",
    category: "4×4 · United Kingdom",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "https://www.petrolified.com/cdn/shop/files/Pagani-Zonda_F-Mid_slideshow-3000x2000_2400x.jpg",
    title: "Pagani Zonda F",
    category: "Hypercar · Italy",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "https://www.petrolified.com/cdn/shop/files/CnV_Clay_Land_Rover_Defender_slideshow-3000x2000_2000x.jpg",
    title: "Defender Clay Series",
    category: "4×4 · United Kingdom",
    span: "lg:col-span-2 col-span-1",
  },
  {
    id: 5,
    src: "https://www.petrolified.com/cdn/shop/files/Huayra_Roadster_slideshow-3000x2000_cdfd752e-f9f7-4859-8d96-e297c5994cbe_2400x.jpg",
    title: "Roadster Open Air",
    category: "Hypercar · Italy",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: "https://www.petrolified.com/cdn/shop/files/CnV_Turbo_Orange_Land_Rover_Defender_slideshow-3000x2000_2000x.jpg",
    title: "Defender Turbo Orange",
    category: "4×4 · United Kingdom",
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: "https://www.petrolified.com/cdn/shop/files/Pagani-Zonda_F-Mid_slideshow-3000x2000_2400x.jpg",
    title: "Zonda F Coupé",
    category: "Hypercar · Italy",
    span: "lg:col-span-2 col-span-1",
  },
];

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };



// ─── CARD ─────────────────────────────────────────────────────────────────────
function GalleryCard({ item, index, onOpen }: { item: typeof ITEMS[0], index: number, onOpen: (item: typeof ITEMS[0]) => void }) {
  const [hovered, setHovered] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      layoutId={`card-${item.id}`}
      className={`relative overflow-hidden cursor-pointer ${item.span}`}
      style={{ borderRadius: "24px" }}
      initial={{ opacity: 0, y: shouldReduce ? 0 : 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...SPRING, delay: index * 0.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onOpen(item)}
    >
      <motion.div
        className="w-full h-full"
        animate={{ filter: hovered ? "brightness(1.05)" : "brightness(1)" }}
      >
        <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-6">
        <p className="text-white/70 text-[10px] uppercase tracking-widest mb-1">{item.category}</p>
        <p className="text-white text-lg font-light">{item.title}</p>
      </div>
    </motion.div>
  );
}

// ─── MAIN GALLERY ─────────────────────────────────────────────────────────────
export default function Gallery() {
  const [selected, setSelected] = useState<typeof ITEMS[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans antialiased text-gray-900">

      {/* Main Content Area: Padding top (pt-32) prevents collision with Nav */}
      <main className="max-w-[1400px] mx-auto pt-32 pb-24 px-6">
        
        {/* Hero Header */}
        <header className="mb-20 text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="uppercase tracking-[0.3em] text-gray-400 text-[10px] mb-4"
          >
            Collection · 2026
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extralight tracking-tight"
          >
            View Our Gallery
             
          </motion.h1>
          <div className="w-12 h-[1px] bg-gray-300 mx-auto mt-8" />
        </header>

        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[340px]">
          {ITEMS.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} onOpen={setSelected} />
          ))}
        </div>

      </main>

      {/* Lightbox placeholder (Keep previous logic) */}
      <AnimatePresence>
        {selected && (
           <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
           >
             <motion.img 
              layoutId={`card-${selected.id}`}
              src={selected.src} 
              className="max-w-full max-h-full rounded-2xl"
             />
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}