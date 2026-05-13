// "use client";
// import { useState } from "react";

// type Tab = "ILLUSTRATION" | "PRINT" | "FRAMING" | "PACKAGING";

// export function BespokeShowcase() {
//   const [activeTab, setActiveTab] = useState<Tab>("ILLUSTRATION");

//   const tabs: Tab[] = ["ILLUSTRATION", "PRINT", "FRAMING", "PACKAGING"];

//   const content = {
//     ILLUSTRATION: {
//       image: "https://www.petrolified.com/cdn/shop/files/CnV_Turbo_Orange_Land_Rover_Defender_slideshow-3000x2000_2000x.jpg", 
//       subtitle: "BEHIND",
//       title: "ILLUSTRATION",
//       text: (
//         <>
//           <p>Our prints are designed to be very easy to frame with off-the-shelf frames available worldwide.</p>
//           <p>My personal favorite are the IKEA frames (Ribba and Stromby) due to their consistent quality, affordability and availability around the world.</p>
//           <p>The print's size details are displayed under each individual product so you can purchase the proper frame.</p>
//           <p>Framing instructions and details about how to care for your print can be found here.</p>
//         </>
//       )
//     },
//     PRINT: {
//       image: "https://www.petrolified.com/cdn/shop/files/CnV_Turbo_Orange_Land_Rover_Defender_slideshow-3000x2000_2000x.jpg", 
//       subtitle: "THE",
//       title: "PRINT",
//       text: (
//         <>
//           <p>Each bespoke piece is printed using industry-leading archival inks on 310gsm museum-grade paper.</p>
//           <p>This guarantees an incredible depth of color, specifically crucial for maintaining the contrast and rich blacks in the silhouette art styles.</p>
//         </>
//       )
//     },
//     FRAMING: {
//       image: "https://www.petrolified.com/cdn/shop/files/CnV_Turbo_Orange_Land_Rover_Defender_slideshow-3000x2000_2000x.jpg", 
//       subtitle: "THE",
//       title: "FRAMING",
//       text: (
//         <>
//           <p>While the print is designed to fit off-the-shelf frames everywhere, we also provide a premium framing service explicitly built for our size specifications.</p>
//           <p>Select the framed option at checkout and we'll handle the mounting and assembly.</p>
//         </>
//       )
//     },
//     PACKAGING: {
//       image: "https://www.petrolified.com/cdn/shop/files/CnV_Turbo_Orange_Land_Rover_Defender_slideshow-3000x2000_2000x.jpg", 
//       subtitle: "THE",
//       title: "PACKAGING",
//       text: (
//         <>
//           <p>Whether you order it framed or raw, your investment is entirely protected inside double-walled reinforced tubing or protective corner inserts.</p>
//           <p>It'll arrive in exactly the condition it left our studio.</p>
//         </>
//       )
//     }
//   };

//   const activeContent = content[activeTab];

//   return (
//     <section className="bg-white pt-20 pb-32">
//       {/* Tabs */}
//       <div className="flex justify-center space-x-12 mb-20 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-2 transition-all duration-300 ${
//               activeTab === tab ? "text-black border-b-[2px] border-black" : "hover:text-black"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
      
//       {/* Image holding area with horizon line */}
//       <div className="relative w-full mt-12 mb-24 overflow-hidden">
//         {/* Grey Horizon Background block stretching infinitely */}
//         <div className="absolute inset-x-0 bottom-0 top-[65%] bg-[#f4f4f4] z-0"></div>
//         {/* Image sized securely on horizon */}
//         <div className="relative w-full max-w-[1200px] mx-auto px-6 h-[300px] md:h-[450px] flex items-end justify-center">
//           <img 
//             key={activeContent.title}
//             src={activeContent.image} 
//             alt={activeContent.title} 
//             className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-2xl animate-in fade-in zoom-in duration-500 pointer-events-none" 
//           />
//         </div>
//       </div>

//       {/* Text Content */}
//       <div className="max-w-[700px] mx-auto px-6 pt-16">
//         <div className="text-left flex flex-col items-start space-y-6">
//           <div className="space-y-6">
//             <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">{activeContent.subtitle}</p>
//             <h3 className="text-3xl tracking-[0.1em] uppercase font-light text-gray-900">{activeContent.title}</h3>
//           </div>
//           <div className="text-[13px] text-gray-500 leading-loose space-y-6 pt-4 w-full">
//             {activeContent.text}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "ARTWORK" | "QUALITY" | "FRAMING" | "PACKAGING";

export function BespokeShowcase() {
  const [activeTab, setActiveTab] = useState<Tab>("ARTWORK");
  const tabs: Tab[] = ["ARTWORK", "QUALITY", "FRAMING", "PACKAGING"];

  const content = {
    ARTWORK: {
      image: "/Illustration.gif", 
      subtitle: "BEHIND",
      title: "Artwork",
      text: (
        <>
          <p>Our posters are created to fit effortlessly into standard frames that are easily available across the globe.</p>
          <p>One of my top choices is the IKEA frame collection (Ribba and Stromby) because of their reliable build quality, reasonable pricing, and worldwide availability.</p>
          <p>Each product page includes the exact print dimensions so you can select the correct frame with confidence.</p>
          <p>You can also find framing tips and print care guidelines here.</p>
        </>
      ),
    },
    QUALITY: {
      image: "https://www.petrolified.com/cdn/shop/files/CnV_Turbo_Orange_Land_Rover_Defender_slideshow-3000x2000_2000x.jpg",
      subtitle: "LASTING",
      title: "Quality",
      text: (
        <>
          <p>At Petrolified, every print is produced with the same level of precision and attention as the vehicles that inspire them.</p>
          <p>Every piece is now professionally Giclée printed using a large-format Epson printer. With 9 separate inks, the printer delivers smoother gradients, richer tones, and a print resolution far beyond standard commercial prints.</p>
          <p>We chose Hahnemühle Pearl paper with a satin finish. It offers vibrant colors, strong contrast, exceptional sharpness, and a subtle sheen that perfectly complements the artwork.</p>
          <p>This is museum-quality printing designed to remain beautiful for decades to come.</p>
        </>
      ),
    },
    FRAMING: {
      image: "https://www.petrolified.com/cdn/shop/files/CnV_Turbo_Orange_Land_Rover_Defender_slideshow-3000x2000_2000x.jpg",
      subtitle: "SIMPLE",
      title: "Framing",
      text: (
        <>
          <p>A properly framed artwork completely transforms the viewing experience. Since framing can often be inconvenient, our print formats are intentionally made to work with ready-made frames available worldwide.</p>
          <p>Personally, I prefer the IKEA STRÖMBY frames. Their clean and minimal design keeps the attention on the artwork while still offering excellent quality, accessibility, and value.</p>
          <p>The dimensions for every print are listed on each product page so you can purchase the right frame immediately.</p>
        </>
      ),
    },
    PACKAGING: {
      image: "https://www.petrolified.com/cdn/shop/files/CnV_Turbo_Orange_Land_Rover_Defender_slideshow-3000x2000_2000x.jpg",
      subtitle: "PREMIUM",
      title: "Packaging",
      text: (
        <>
          <p>Petrolified takes extra care to make sure every print reaches you in perfect condition.</p>
          <p>Before shipping, each print is thoroughly checked and securely wrapped between protective paper sheets.</p>
          <p>The artwork is then packed inside a durable cardboard tube designed to prevent bending or damage during transit. Both ends of the tube are sealed with aluminum caps for additional protection.</p>
        </>
      ),
    },
  };

  const activeContent = content[activeTab];

  return (
    <section className="bg-white py-24 overflow-hidden">
      {/* ── TAB NAVIGATION ── */}
      <nav className="flex justify-center mb-20 border-b border-[#d2d2d7]/50">
        <div className="flex space-x-8 md:space-x-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-4 text-[11px] font-semibold tracking-[0.3em] uppercase transition-colors duration-300 ${
                  isActive ? "text-[#1d1d1f]" : "text-[#86868b] hover:text-[#1d1d1f]"
                }`}
              >
                {tab}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1d1d1f]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── ENHANCED IMAGE CANVAS (Bigger & Wider) ── */}
      <div className="relative h-auto md:h-[650px] flex flex-col items-center justify-end">
        {/* The Horizon Block - adjusted height for bigger images */}
        <div className="absolute bottom-0 w-full h-[30%] bg-[#f5f5f7] z-0" />
        
        {/* Container widened to max-w-7xl for a more cinematic look */}
        <div className="relative z-10 w-full max-w-[1400px] px-4 md:px-12 h-full flex items-end justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              src={activeContent.image}
              alt={activeContent.title}
              // Increased scale to 1.05 to make it feel "big" on entrance
              initial={{ opacity: 0, scale: 1.02, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              // w-full makes it fill the 1400px container
              className="max-h-[95%] w-full object-contain mix-blend-multiply drop-shadow-[0_45px_60px_rgba(0,0,0,0.12)]"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* ── TEXT CONTENT ── */}
      <div className="max-w-4xl mx-auto px-8 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start"
          >
            <div>
              <span className="block text-[11px] uppercase tracking-[0.4em] text-[#86868b] font-bold mb-4">
                {activeContent.subtitle}
              </span>
              <h2 className="text-4xl font-medium text-[#1d1d1f] leading-tight tracking-tight">
                {activeContent.title}
              </h2>
            </div>

            <div className="text-[17px] text-[#86868b] leading-relaxed space-y-6">
              {activeContent.text}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}