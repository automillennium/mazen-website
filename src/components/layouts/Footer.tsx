import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400 border-t border-[#222]">
      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-xs tracking-wider">
        
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold tracking-[0.2em] uppercase text-white mb-2">Links</h4>
          <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
          <Link href="/bespoke" className="hover:text-white transition-colors">Bespoke</Link>
          <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-bold tracking-[0.2em] uppercase text-white mb-2">&nbsp;</h4>
          <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link>
          <Link href="/framing" className="hover:text-white transition-colors">Framing</Link>
          <Link href="/press" className="hover:text-white transition-colors">Press</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-bold tracking-[0.2em] uppercase text-white mb-2">&nbsp;</h4>
          <Link href="/terms" className="hover:text-white transition-colors">T&C</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/imprint" className="hover:text-white transition-colors">Imprint</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="font-bold tracking-[0.2em] uppercase text-white mb-2">Payment</h4>
          {/* Mock payment icons */}
          <div className="flex gap-2 opacity-50">
            <div className="w-8 h-5 bg-white rounded-sm"></div>
            <div className="w-8 h-5 bg-white rounded-sm"></div>
            <div className="w-8 h-5 bg-white rounded-sm"></div>
          </div>
          <div className="text-[10px] text-gray-500 mt-auto pt-8">
            <p>&copy; {new Date().getFullYear()} Mazen Sultan Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Bottom large photo area */}
      <div className="relative w-full h-[300px] mt-10 overflow-hidden group">
        <img 
          src="https://www.petrolified.com/cdn/shop/files/Huayra_Roadster_slideshow-3000x2000_cdfd752e-f9f7-4859-8d96-e297c5994cbe_2400x.jpg" 
          alt="Passion" 
          className="absolute inset-0 w-full h-full object-cover object-bottom opacity-30 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <h2 className="text-white text-lg md:text-2xl tracking-[0.2em] uppercase font-light text-center px-6 drop-shadow-xl bg-black/20 p-4 backdrop-blur-sm rounded">
             You need great passion, because everything you do<br />with great pleasure, you do well
           </h2>
        </div>
      </div>
    </footer>
  );
}
