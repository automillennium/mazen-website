// import { BespokeSlider } from "@/components/modules/bespoke/BespokeSlider";
// import { BespokeShowcase } from "@/components/modules/bespoke/BespokeShowcase";

// export default function Bespoke() {
//   return (
//     <div className="bg-[#f9f9f9]">
//       {/* Top Hero Section */}
//       <section className="w-full flex flex-col lg:flex-row items-center pb-24 relative pl-0">
        
//         {/* Left: Huge Interactive Slider touching exact left edge */}
//         <div className="w-full lg:w-[60%] h-[60vh] lg:h-[90vh]">
//            <BespokeSlider />
//         </div>

//         {/* Right: Product Info with generous padding to match layout */}
//         <div className="w-full lg:w-[40%] text-center lg:text-left flex flex-col space-y-10 mt-10 lg:mt-0 px-8 lg:px-24">
//           <div className="space-y-4 pb-4">
//             <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">Custom Order</p>
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.1em] uppercase text-gray-800 leading-tight">Bespoke Prints</h1>
//             <p className="text-lg md:text-xl text-gray-600 font-light">From € 149</p>
//           </div>
          
//           <div className="text-[11px] md:text-sm text-gray-500 leading-[2.2] space-y-6 max-w-[450px] mx-auto lg:mx-0">
//              <p>For those who haven't found what they were looking for in the shop.</p>
//              <p>For those who want to commemorate the car in their (dream) garage on the wall.</p>
//              <p>For those who want to gift the ultimate present to any petrolhead.</p>
//           </div>
          
//           <button className="mt-8 uppercase tracking-[0.2em] text-[10px] font-bold border border-black px-16 py-4 hover:bg-black hover:text-white transition-all w-max mx-auto lg:mx-0">
//             Enquire
//           </button>
//         </div>
//       </section>

//       {/* Mid Section White */}
//       <section className="bg-white py-24 border-t border-gray-100">
//         <div className="max-w-[700px] mx-auto px-6 space-y-16">
          
//           <div className="space-y-4">
//             <h3 className="text-xs tracking-[0.2em] font-bold uppercase text-gray-900">How it works</h3>
//             <p className="text-sm text-gray-500 leading-relaxed border-l-[3px] border-gray-200 pl-5">
//               It begins with a conversation. Send over photos of your vehicle along with the specific details and customizations you want captured. We agree on the layout and direction.
//             </p>
//             <p className="text-sm text-gray-500 leading-relaxed border-l-[3px] border-gray-200 pl-5">
//               I'll then step into the illustration phase, meticulously drawing your car by hand digitally. You'll receive progress updates and we can tweak details as we go.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-xs tracking-[0.2em] font-bold uppercase text-gray-900">Timeframe</h3>
//             <p className="text-sm text-gray-500 leading-relaxed border-l-[3px] border-gray-200 pl-5">
//               Standard bespoke prints typically take 2-4 weeks to complete depending on the current schedule and layout complexity.
//             </p>
//           </div>

//           <div className="flex flex-col md:flex-row items-start gap-12 pt-16 mt-16 border-t border-gray-100">
//             <div className="w-full md:w-1/2 flex gap-6 justify-center md:justify-start items-end">
//               <div className="w-20 h-28 border border-gray-200 bg-white drop-shadow-sm flex items-center justify-center text-[10px] text-gray-400 relative">
//                 <span className="absolute -left-5 text-gray-300 -rotate-90">30 CM</span>
//                 <span className="absolute -top-5 text-gray-300">40 CM</span>
//                 A3
//               </div>
//               <div className="w-28 h-40 border border-gray-200 bg-white drop-shadow-md flex items-center justify-center text-[10px] text-gray-400 relative">
//                 <span className="absolute -left-5 text-gray-300 -rotate-90">42 CM</span>
//                 <span className="absolute -top-5 text-gray-300">59 CM</span>
//                 A2
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 space-y-4">
//               <h3 className="text-xs tracking-[0.2em] font-bold uppercase text-gray-900">Quick Details</h3>
//               <ul className="text-sm text-gray-500 space-y-2 list-disc pl-4 leading-relaxed">
//                 <li>Printed on extremely high-quality 310gsm archival paper</li>
//                 <li>Multiple sizes available including A3 and A2</li>
//                 <li>Frame not included</li>
//                 <li>Worldwide shipping via express tracked courier</li>
//               </ul>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* The Bespoke Plaque Dark Section */}
//       <section className="bg-[#1a1a1a] text-white py-32">
//         <div className="max-w-[700px] mx-auto px-6">
//           <h3 className="text-[11px] tracking-[0.3em] font-bold uppercase mb-6 text-gray-300">The Bespoke Plaque</h3>
//           <p className="text-[12px] text-gray-400 leading-loose mb-16">
//             Each bespoke print comes with an optional sticker resembling a VIN plaque with handwritten information about the print. It's placed, out of the sight, to the back side of the print.
//           </p>
          
//           {/* Mockup Plaque Box */}
//           <div className="w-full bg-[#1c1c1c] p-8 md:p-12 border border-[#222] shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col justify-center">
//             <p className="text-[7.5px] tracking-[0.2em] text-center font-bold text-gray-500 uppercase mb-8">This is a one-off bespoke print by Martin Miškolci of Petrolified</p>
//             <div className="border-[2px] border-[#222] grid grid-cols-4 bg-[#e8e8e8] text-[#222]">
//               <div className="col-span-3 border-r-[2px] border-b-[2px] border-[#222] px-3 py-2 bg-[#e8e8e8]">
//                 <span className="text-[7px] font-bold block tracking-widest uppercase">For</span>
//                 <span className="block h-5"></span>
//               </div>
//               <div className="col-span-1 border-b-[2px] border-[#222] px-3 py-2 bg-[#e8e8e8]">
//                 <span className="text-[7px] font-bold block tracking-widest uppercase">Date</span>
//                 <span className="block h-5"></span>
//               </div>
//               <div className="col-span-2 border-r-[2px] border-b-[2px] border-[#222] px-3 py-2 bg-[#e8e8e8]">
//                  <span className="text-[7px] font-bold block tracking-widest uppercase">Make</span>
//                  <span className="block h-5"></span>
//               </div>
//               <div className="col-span-2 border-b-[2px] border-[#222] px-3 py-2 bg-[#e8e8e8]">
//                  <span className="text-[7px] font-bold block tracking-widest uppercase">Model</span>
//                  <span className="block h-5"></span>
//               </div>
//               <div className="col-span-1 border-r-[2px] border-[#222] px-3 py-2 bg-[#e8e8e8]">
//                  <span className="text-[7px] font-bold block tracking-widest uppercase">Year</span>
//                  <span className="block h-5"></span>
//               </div>
//               <div className="col-span-3 px-3 py-2 bg-[#e8e8e8]">
//                  <span className="text-[7px] font-bold block tracking-widest uppercase">VIN</span>
//                  <span className="block h-5"></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Interactive Showcase replacing static block */}
//       <BespokeShowcase />
      
//     </div>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // FIX: Imported from next/link instead of lucide-react
import { BespokeSlider } from "@/components/modules/bespoke/BespokeSlider";
import { BespokeShowcase } from "@/components/modules/bespoke/BespokeShowcase";

// Updated to use motion.span to avoid <a> inside <button> hydration errors
function MagneticButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.span 
      whileTap={{ scale: 0.97 }} 
      className={`inline-block ${className}`} 
      onClick={onClick}
    >
      {children}
    </motion.span>
  );
}

export default function BespokePage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } 
    }
  };

  return (
    <main className="bg-white min-h-screen text-[#1d1d1f] font-sans selection:bg-[#0071e3]/20">
      
      {/* ── HERO SECTION ── */}
      <section className="pt-28 pb-0 bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left: Interactive Slider */}
          <motion.div 
            className="w-full lg:w-[60%] h-[60vh] lg:h-[90vh] bg-[#f5f5f7]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <BespokeSlider />
          </motion.div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-[40%] px-8 lg:px-20 py-20">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-[440px]"
            >
              <span className="block text-[11px] uppercase tracking-[0.45em] text-[#0066cc] font-semibold mb-4">
                Custom Order
              </span>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.03em] mb-6">
                Bespoke Prints
              </h1>
              <p className="text-[21px] text-[#86868b] font-normal mb-10">
                From € 149
              </p>
              
              <div className="space-y-6 text-[17px] text-[#86868b] leading-relaxed mb-12">
                <p>For those who haven&apos;t found what they were looking for in the shop.</p>
                <p>Commemorate the car in your dream garage with a one-off digital illustration.</p>
              </div>
              
              {/* FIXED BUTTON GROUP */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link 
                  href="/shop"
                  className="bg-[#0071e3] text-white px-10 py-4 rounded-full text-[14px] font-medium hover:bg-[#0077ed] transition-colors inline-flex items-center justify-center"
                >
                  <MagneticButton>
                    Shop Now
                  </MagneticButton>
                </Link>

                <Link 
                  href="/gallery" 
                  className="text-[#0071e3] text-[14px] font-medium hover:underline px-6"
                >
                  View Gallery →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="bg-[#f5f5f7] py-28">
        <div className="max-w-[1060px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.45em] font-semibold mb-6">How it works</h3>
                <div className="space-y-6 border-l border-[#d2d2d7] pl-8">
                  <p className="text-[15px] text-[#1d1d1f] leading-relaxed">
                    It begins with a conversation. Send over photos of your vehicle along with the specific details and customizations you want captured.
                  </p>
                  <p className="text-[15px] text-[#86868b] leading-relaxed">
                    Every line is meticulously drawn by hand digitally. You&apos;ll receive progress updates to ensure every detail is perfect.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.45em] font-semibold mb-6">Timeframe</h3>
                <p className="text-[15px] text-[#86868b] pl-8">Typically 2-4 weeks to complete.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-sm border border-[#d2d2d7]/30"
            >
              <h3 className="text-[11px] uppercase tracking-[0.45em] font-semibold mb-8 text-center">Technical Specifications</h3>
              <div className="divide-y divide-[#d2d2d7]">
                {[
                  { label: "Paper", value: "310gsm Archival Paper" },
                  { label: "Sizes", value: "A3 (30x40cm), A2 (42x59cm)" },
                  { label: "Shipping", value: "Express Tracked Worldwide" },
                  { label: "Personalization", value: "Handwritten VIN Plaque" }
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-2 py-4 gap-4">
                    <span className="text-[13px] font-medium">{item.label}</span>
                    <span className="text-[13px] text-[#86868b]">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE PLAQUE (Dark Accent) ── */}
      <section className="bg-[#1d1d1f] text-white py-32 overflow-hidden">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium mb-6 tracking-tight">The Bespoke Plaque</h2>
            <p className="text-[17px] text-[#86868b] max-w-xl mx-auto mb-16 leading-relaxed">
              Each print includes an optional VIN-style plaque sticker with handwritten details, 
              placed discreetly on the reverse side of your artwork.
            </p>
            
            <div className="bg-[#2d2d2f] p-1 rounded-2xl shadow-2xl">
              <div className="bg-[#e8e8e8] text-[#1d1d1f] p-8 md:p-12 rounded-xl grid grid-cols-4 gap-0 border-[3px] border-[#1d1d1f]">
                 <div className="col-span-3 border-r-[2px] border-b-[2px] border-[#1d1d1f] p-4 text-left">
                    <span className="text-[9px] font-black uppercase tracking-tighter">Owner / For</span>
                    <div className="h-6 mt-1 border-b border-[#1d1d1f]/20 font-serif italic text-xl">Mazen Sultan</div>
                 </div>
                 <div className="col-span-1 border-b-[2px] border-[#1d1d1f] p-4 text-left">
                    <span className="text-[9px] font-black uppercase tracking-tighter">Date</span>
                    <div className="h-6"></div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SHOWCASE ── */}
      <section className="bg-white">
        <BespokeShowcase />
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#f5f5f7] py-32 text-center">
         <h2 className="text-[32px] md:text-[48px] font-medium mb-8">Ready to start?</h2>
         <Link 
            href="/contact"
            className="bg-[#0071e3] text-white px-12 py-4 rounded-full text-[16px] font-medium hover:bg-[#0077ed] inline-flex items-center justify-center"
         >
            <MagneticButton>
              Contact Mazen
            </MagneticButton>
         </Link>
      </section>
    </main>
  );
}