// import Link from 'next/link';
// import { ProductCardProps } from '@/types';

// export function ProductCard({ title, price, image, slug, soldOut }: ProductCardProps) {
//   return (
//     <Link href={`/product/${slug}`} className="group block cursor-pointer text-center">
//       <div className="relative aspect-[3/4] bg-white border border-gray-200 p-8 md:p-4 mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500">
//         <div className="w-full h-full flex items-center justify-center">
//           <img 
//             src={image} 
//             alt={title} 
//             className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
//           />
//         </div>
//         {soldOut && (
//           <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-[10px] tracking-widest uppercase font-semibold">
//             Sold out
//           </div>
//         )}
//       </div>
//       <div className="flex flex-col space-y-1">
//         <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900 group-hover:text-gray-500 transition-colors">
//           {title}
//         </h3>
//         {price && <p className="text-[11px] tracking-widest text-gray-400 mt-2 uppercase">{price}</p>}
//       </div>
//     </Link>
//   );
// }



"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCardProps } from "@/types";

export function ProductCard({ title, price, image, slug, soldOut }: ProductCardProps) {
  return (
    <Link href={`/product/${slug}`} className="group block cursor-pointer">
      <div className="flex flex-col items-center text-center">
        
        {/* ── IMAGE CONTAINER ── */}
        <div className="relative w-full aspect-[5/5] bg-[#f5f5f7] rounded-[22px] overflow-hidden mb-6 flex items-center justify-center p-10 transition-colors duration-500 group-hover:bg-[#f2f2f2]">
          
          <motion.div
            className="w-full h-full flex items-center justify-center"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </motion.div>

          {/* Sold Out Badge - Subtle Pill Style */}
          {soldOut && (
            <div className="absolute top-5 right-5 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-black/5">
              <span className="text-[10px] tracking-tight font-bold text-[#1d1d1f] uppercase">
                Sold out
              </span>
            </div>
          )}
        </div>

        {/* ── TEXT CONTENT ── */}
        <div className="px-4 space-y-1">
          <h3 className="text-[17px] font-semibold text-[#1d1d1f] leading-tight tracking-tight group-hover:text-[#0071e3] transition-colors duration-300">
            {title}
          </h3>
          
          {price && (
            <p className="text-[14px] text-[#86868b] font-medium tracking-tight">
              {price}
            </p>
          )}
        </div>

      </div>
    </Link>
  );
}