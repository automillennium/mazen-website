"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';

const SLIDES = [
  {
    id: 1,
    image: "https://www.petrolified.com/cdn/shop/files/Huayra_Roadster_slideshow-3000x2000_cdfd752e-f9f7-4859-8d96-e297c5994cbe_2400x.jpg",
    caption: "01. The Huayra Roadster in Blu Tricolore photographed at Pagani factory in San Cesario sul Panaro",
    link: "/product/huayra-roadster"
  },
  {
    id: 2,
    image: "https://www.petrolified.com/cdn/shop/files/CnV_Turbo_Orange_Land_Rover_Defender_slideshow-3000x2000_2000x.jpg",
    caption: "02. Turbo Orange print from the Cool & Vintage x Petrolified collection.",
    link: "/product/turbo-orange"
  },
  {
    id: 3,
    image: "https://www.petrolified.com/cdn/shop/files/Pagani-Zonda_F-Mid_slideshow-3000x2000_2400x.jpg",
    caption: "03. Closer look at the Pagani Zonda F in Grigio Mercurio.",
    link: "/product/zonda-f"
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[100vh] overflow-hidden bg-gray-100">
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0 z-0'}`}
          style={{ zIndex: index === current ? 10 : 0 }}
        >
          <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
          <img 
            src={slide.image} 
            alt={slide.caption}
            className="object-cover w-full h-full object-center"
          />
          <div className="absolute bottom-12 left-6 md:left-12 z-20 max-w-[80%] md:max-w-xl text-white">
            <Link href={slide.link} className="hover:opacity-70 transition-opacity">
              <h2 className="text-lg md:text-3xl font-light leading-snug drop-shadow-md">
                {slide.caption}
              </h2>
            </Link>
          </div>
        </div>
      ))}
      <div className="absolute bottom-12 right-6 md:right-12 z-20 flex space-x-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
