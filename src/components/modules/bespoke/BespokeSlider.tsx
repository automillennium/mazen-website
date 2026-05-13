"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  "https://www.petrolified.com/cdn/shop/files/Pagani-Zonda_F-Mid_slideshow-3000x2000_2400x.jpg",
  "https://www.petrolified.com/cdn/shop/files/CnV_Clay_Land_Rover_Defender_slideshow-3000x2000_2000x.jpg",
  "https://www.petrolified.com/cdn/shop/files/Huayra_Roadster_slideshow-3000x2000_cdfd752e-f9f7-4859-8d96-e297c5994cbe_2400x.jpg"
];

export function BespokeSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((p) => (p + 1) % IMAGES.length);
  const prevSlide = () => setCurrent((p) => (p - 1 + IMAGES.length) % IMAGES.length);

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center overflow-hidden group">
      {IMAGES.map((img, idx) => (
        <img 
          key={img}
          src={img} 
          alt={`Custom Work Slide ${idx + 1}`} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        />
      ))}

      {/* Slider Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-black transition-colors"
        aria-label="Previous Slide"
      >
         <ChevronLeft strokeWidth={1} className="w-8 h-8" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-black transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight strokeWidth={1} className="w-8 h-8" />
      </button>
    </div>
  );
}
