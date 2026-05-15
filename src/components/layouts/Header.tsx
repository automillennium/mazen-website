"use client";

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export function Header({ cartCount = 0 }: { cartCount?: number }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute w-full top-0 z-50 text-white mix-blend-difference pointer-events-none">
      <div className="max-w-[1400px] mx-auto px-6 h-32 flex items-center justify-between relative pointer-events-auto">
        
        {/* Logo - Left */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase flex-shrink-0">
          illustrastore
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Nav - EXACT Center */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-16">
          <Link href="/shop" className="text-[11px] tracking-[0.25em] uppercase font-bold hover:opacity-50 transition-opacity">Shop</Link>
          <Link href="/bespoke" className="text-[11px] tracking-[0.25em] uppercase font-bold hover:opacity-50 transition-opacity">Bespoke</Link>
          <Link href="/gallery" className="text-[11px] tracking-[0.25em] uppercase font-bold hover:opacity-50 transition-opacity">Gallery</Link>
          <Link href="/about" className="text-[11px] tracking-[0.25em] uppercase font-bold hover:opacity-50 transition-opacity">About Me</Link>
        </div>
        
        {/* Cart - Right */}
        <div className="flex items-center justify-end">
          <Link href="/cart" className="flex items-center space-x-3 text-[11px] tracking-[0.25em] uppercase font-bold hover:opacity-50 transition-opacity">
            <span className="hidden sm:inline">{cartCount} {cartCount === 1 ? 'item' : 'items'}</span>
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Mobile Nav Drops */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-6 bg-white text-black flex flex-col space-y-6 mix-blend-normal border-t border-gray-100 pointer-events-auto">
          <Link href="/shop" className="text-[11px] font-bold tracking-[0.3em] uppercase" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link href="/bespoke" className="text-[11px] font-bold tracking-[0.3em] uppercase" onClick={() => setIsMenuOpen(false)}>Bespoke</Link>
          <Link href="/gallery" className="text-[11px] font-bold tracking-[0.3em] uppercase" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link href="/about" className="text-[11px] font-bold tracking-[0.3em] uppercase" onClick={() => setIsMenuOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
}
