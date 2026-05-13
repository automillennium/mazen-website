// import Link from "next/link";

// export default function AboutPage() {
//   return (
//     <div className="flex flex-col w-full bg-white pb-20">

//       {/* 1. Hero Image Header with Split Horizontal Background */}
//       <section className="w-full relative h-[350px] md:h-[550px] mt-40">
//         {/* Background color split - Top half is light gray */}
//         <div className="absolute inset-x-0 top-0 h-[65%] bg-[#f9f9f9] z-0"></div>

//         <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 h-full pb-10">
//           <div
//             className="w-full h-full bg-cover bg-top shadow-sm"
//             style={{ backgroundImage: "url('https://www.petrolified.com/cdn/shop/files/About_Profile_Wide_11505769-74a8-4d7b-aedf-e1be2a1ce464.jpg?v=1613158130')" }}
//           ></div>
//         </div>
//       </section>

//       {/* 2. Intro Text */}
//       <section className="max-w-[800px] mx-auto text-left px-6 pt-16 pb-16">
//         <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mb-4">
//           Hello!
//         </p>
//         <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase mb-12 text-[#111]">
//           About
//         </h1>
//         <p className="text-[12px] text-gray-500 font-light leading-relaxed">
//           My name is Martin Miškolci, I’m an artist, a designer, born in 1996 and currently residing in Martin, Slovak Republic. I create automotive illustrations and prints for a living under my brand Petrolified.
//         </p>
//       </section>

//       {/* 3. Interview Q&A Section */}
//       <section className="max-w-[800px] mx-auto px-6 py-12">
//         <div className="space-y-16">

//           <div className="text-center sm:text-left">
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#222] mb-4">How did you get into art?</h3>
//             <p className="text-[12px] text-gray-500 font-light leading-relaxed">
//               I’ve had a pencil in my hand ever since I remember, and all I used to draw was cars. I think it just came naturally to me. Drawing and painting was always something I was passionate about, and over time it all just developed into using digital tools instead of the traditional.
//             </p>
//           </div>

//           <div className="text-center sm:text-left">
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#222] mb-4">What’s the hardest part of illustrating a car from start to finish?</h3>
//             <p className="text-[12px] text-gray-500 font-light leading-relaxed">
//               The resource images. I can easily spend five hours just researching the car and looking for good, high resolution images on the internet. I try to capture the cars from the same perspective, and point of view, each time so it’s never easy to make do with what’s available out there. I wish I had access to all the cars, as that would’ve made my life so much easier…
//             </p>
//           </div>

//           <div className="text-center sm:text-left">
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#222] mb-4">Do you have a favourite car you like to illustrate?</h3>
//             <p className="text-[12px] text-gray-500 font-light leading-relaxed">
//               The 911 has such an iconic shape, that has to be one of my favourites, but if I had to pick just one it’d have to be the BMW M1. There’s something alluring and different about its design that wasn’t matched in its era.
//             </p>
//           </div>

//           <div className="text-center sm:text-left">
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#222] mb-4">What piece of equipment do you think is the most important, or useful, for illustration?</h3>
//             <p className="text-[12px] text-gray-500 font-light leading-relaxed">
//               A powerful computer is essential when you’re working with the level of detail, and amount of Photoshop layers, that I do. Each illustration is made up of more than 1,000 layers, different shapes and then rendering these in real time puts a huge load on the computer. Even though I don’t draw these free hand, but rather as vector shapes, having a graphic tablet is very handy too. It’s a bit more precise and comfortable when working long hours.
//             </p>
//           </div>

//           <div className="text-center sm:text-left">
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#222] mb-4">What car are you currently driving?</h3>
//             <p className="text-[12px] text-gray-500 font-light leading-relaxed">
//               I drive a Renault Clio RS – a 2012 one, so it’s one of the last truly raw, naturally aspirated and manual hot hatches. I love it to bits, despite the lack of comfort and finesse as a daily driver.
//             </p>
//           </div>

//           <div className="text-center sm:text-left">
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#222] mb-4">If money was no object, what would be your perfect car (or cars)?</h3>
//             <p className="text-[12px] text-gray-500 font-light leading-relaxed">
//               This is the tough question all of us car fans face. I honestly don’t know. I have a soft spot for all 911s, be it the early ones, or the new 991s. In a perfect world, I would go for the 911R, or perhaps a Singer 911. I’m very close to Japanese cars too – a Skyline is something I dream about, 240Z Datsuns too, or the mighty LFA. All are unique in their own way and ever so special. Too many great cars to choose from and I’d love to have them all!
//             </p>
//           </div>

//           <p className="text-[10px] text-gray-400 italic pt-6 text-center sm:text-left tracking-widest uppercase">
//             This interview was originally written by Tim Ridd-Jolly.
//           </p>

//         </div>
//       </section>

//       {/* 4. Our Team Segment */}
//       <section className="w-full max-w-[1200px] mx-auto px-6 py-24 mb-16 mt-10">
//         <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16 md:gap-24">
//           <div className="w-full md:w-[40%] flex flex-col items-end justify-center text-right md:py-10">
//             <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] uppercase mb-8 text-[#333]">Our Team</h2>
//             <div className="max-w-[420px] space-y-6">
//               <p className="text-[14px] text-gray-500 leading-[1.8] font-light">
//                 For a few years I've been at it alone. Wake up early in the morning to print and pack the orders, then work into the night to do the rest.
//               </p>
//               <p className="text-[14px] text-gray-500 leading-[1.8] font-light">
//                 In 2016 I was very happy that my father, Jaroslav, joined me on the endavour. He's a professional rally co-driver participating yearly in Dakar and Silk Way Rallyes.
//               </p>
//               <p className="text-[14px] text-gray-500 leading-[1.8] font-light">
//                 Spending more time with the family these day, he's helping me take care of all your orders, from the actual printing, through packaging and then shipping to you.
//               </p>
//             </div>
//           </div>
//           <div className="w-full md:w-[60%]">
//             <img src="https://www.petrolified.com/cdn/shop/files/aboutsection1.jpg?v=1613154553" alt="Jaroslav and Martin" className="w-full h-auto object-cover md:min-h-[400px]" />
//           </div>
//         </div>
//       </section>

//       {/* 5. Workspace Intro */}
//       <section className="w-full text-center py-20 pb-0">
//         <h4 className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-4">where I spend the days</h4>
//         <h2 className="text-xl md:text-2xl font-light uppercase tracking-[0.2em] text-[#111]">my workspace</h2>
//       </section>

//       {/* 6. Workspace Full Bleed Setup Image */}
//       <section className="w-full mt-10 mb-16">
//         <div className="w-full h-auto bg-gray-50">
//           <img
//             src="https://www.petrolified.com/cdn/shop/files/aboutsection2.png?v=1613154553"
//             alt="My Workspace"
//             className="w-full h-auto max-h-[700px] object-cover"
//           />
//         </div>
//       </section>

//       {/* 7. Gear List Grid */}
//       <section className="max-w-[1000px] mx-auto px-6 py-12 pb-32">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

//           <div className="flex flex-col text-center sm:text-left items-center sm:items-start">
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4 text-[#222]">Computer</h3>
//             <div className="w-8 border-b-2 border-[#111] mb-4"></div>
//             <p className="text-[11px] text-gray-500 font-light leading-[2] max-w-[300px]">
//               It‘s a late 2013 27-inch iMac, running a 3.5GHz i7, 32GB of RAM, GTX 775M 2GB graphics card and a 1GB SSD. Great workhorse for running Adobe's Photoshop.
//             </p>
//           </div>

//           <div className="flex flex-col text-center sm:text-left items-center sm:items-start">
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4 text-[#222]">Tablet</h3>
//             <div className="w-8 border-b-2 border-[#111] mb-4"></div>
//             <p className="text-[11px] text-gray-500 font-light leading-[2] max-w-[300px]">
//               My good old Wacom Intuos 3. My parents bought it to me for probably a fortune back in 2005 and I‘m still grateful for it to this date. After all the years it‘s still running like a champ.
//             </p>
//           </div>

//           <div className="flex flex-col text-center sm:text-left items-center sm:items-start">
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4 text-[#222]">Speakers</h3>
//             <div className="w-8 border-b-2 border-[#111] mb-4"></div>
//             <p className="text-[11px] text-gray-500 font-light leading-[2] max-w-[300px]">
//               These Bose speakers are as old as I am (well maybe not) but wonderful as can be.
//             </p>
//           </div>

//           <div className="flex flex-col text-center sm:text-left items-center sm:items-start">
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4 text-[#222]">Notebook</h3>
//             <div className="w-8 border-b-2 border-[#111] mb-4"></div>
//             <p className="text-[11px] text-gray-500 font-light leading-[2] max-w-[300px]">
//               Whenever an idea hits me I need to write or draw it down. I went through many notebooks but now settled on this Baron Fig Confidant. Easily my favourite that I keep near me at all times whether I‘m at home or travelling.
//             </p>
//           </div>

//           <div className="flex flex-col text-center sm:text-left items-center sm:items-start md:col-span-2 md:items-center md:text-center mt-8">
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4 text-[#222]">Headphones</h3>
//             <div className="w-8 border-b-2 border-[#111] mb-4"></div>
//             <p className="text-[11px] text-gray-500 font-light leading-[2] max-w-[500px]">
//               My most recent and best purchase are these BeoPlay H5s by Bang & Olufsen. Great sound, beautiful design and most importantly very comfortable for the long hours of illustration.
//             </p>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }


"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SPRING = { 
  type: "spring", 
  stiffness: 80, 
  damping: 22 
} as const; // Add this

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...SPRING, delay }}
    >
      {children}
    </motion.div>
  );
}

function QA({ question, answer, delay = 0, index = 0 }: { question: string; answer: string; delay?: number; index?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="py-10" style={{ borderTop: "0.5px solid #e5e5e5" }}>
        <div className="flex gap-8 items-start">
          <span
            className="shrink-0 mt-1"
            style={{ fontSize: "11px", color: "#bbb", fontWeight: 400, letterSpacing: "0.08em", minWidth: "20px" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1">
            <p
              className="uppercase text-[#111] mb-5"
              style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", lineHeight: 1.5 }}
            >
              {question}
            </p>
            <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.85, letterSpacing: "-0.005em", color: "#555" }}>
              {answer}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function GearItem({ title, description, delay = 0, center = false }: { title: string; description: string; delay?: number; center?: boolean }) {
  return (
    <Reveal delay={delay} className={center ? "md:col-span-2" : ""}>
      <div className={`flex flex-col ${center ? "items-center text-center" : "items-start"}`}>
        <p
          className="uppercase text-[#111] mb-4"
          style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em" }}
        >
          {title}
        </p>
        <div style={{ width: "24px", height: "1px", background: "linear-gradient(90deg,#111,#888)", marginBottom: "20px" }} />
        <p style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.85, maxWidth: "340px", letterSpacing: "-0.005em", color: "#666" }}>
          {description}
        </p>
      </div>
    </Reveal>
  );
}

const QAS = [
  {
    q: "How did you get into art?",
    a: "I've had a pencil in my hand ever since I remember, and all I used to draw was cars. Drawing and painting was always something I was passionate about, and over time it all just developed into using digital tools instead of the traditional.",
  },
  {
    q: "What's the hardest part of illustrating a car from start to finish?",
    a: "The resource images. I can easily spend five hours just researching the car and looking for good, high resolution images on the internet. I try to capture the cars from the same perspective each time so it's never easy to make do with what's available. I wish I had access to all the cars…",
  },
  {
    q: "Do you have a favourite car you like to illustrate?",
    a: "The 911 has such an iconic shape, that has to be one of my favourites, but if I had to pick just one it'd have to be the BMW M1. There's something alluring and different about its design that wasn't matched in its era.",
  },
  {
    q: "What piece of equipment is most important for illustration?",
    a: "A powerful computer is essential when you're working with the level of detail, and amount of Photoshop layers, that I do. Each illustration is made up of more than 1,000 layers. Even though I don't draw free hand but rather as vector shapes, having a graphic tablet is very handy — it's more precise and comfortable for long sessions.",
  },
  {
    q: "What car are you currently driving?",
    a: "I drive a Renault Clio RS — a 2012 one, so it's one of the last truly raw, naturally aspirated and manual hot hatches. I love it to bits, despite the lack of comfort and finesse as a daily driver.",
  },
  {
    q: "If money was no object, what would be your perfect car?",
    a: "I have a soft spot for all 911s, be it the early ones or the new 991s. In a perfect world, I'd go for the 911R, or perhaps a Singer. I'm very close to Japanese cars too — a Skyline is something I dream about, 240Z Datsuns, or the mighty LFA. Too many great cars to choose from!",
  },
];

export default function AboutPage() {
  return (
    <div
      className="flex flex-col w-full bg-white"
      style={{ fontFamily: "-apple-system,'SF Pro Display','Helvetica Neue',sans-serif", color: "#1d1d1f" }}
    >

      {/* ── HERO ── */}
      <section className="w-full relative" style={{ height: "clamp(340px, 52vw, 620px)", marginTop: "80px" }}>
        <div className="absolute inset-x-0 top-0" style={{ height: "60%", background: "#f5f5f7" }} />
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-8 h-full pb-12 mt-20">
          <motion.div
            className="w-full h-full overflow-hidden"
            style={{ borderRadius: "20px" }}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.1 }}
          >
            <img
              src="https://www.petrolified.com/cdn/shop/files/About_Profile_Wide_11505769-74a8-4d7b-aedf-e1be2a1ce464.jpg?v=1613158130"
              alt="Martin Miškolci — Petrolified"
              className="w-full h-full object-cover object-top"
              style={{ filter: "saturate(1.06) brightness(0.96)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="max-w-[760px] mx-auto px-8 pt-24 pb-24">
        <Reveal>
          <p className="uppercase text-[#aaa] mb-6" style={{ fontSize: "11px", letterSpacing: "0.3em", fontWeight: 400 }}>
            Hello
          </p>
          <h1 style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#1d1d1f", marginBottom: "32px" }}>
            About Martin
          </h1>
          <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg,#999,transparent)", marginBottom: "32px" }} />
          <p style={{ fontSize: "18px", fontWeight: 300, lineHeight: 1.82, color: "#555", letterSpacing: "-0.01em" }}>
            My name is Martin Miškolci — an artist and designer born in 1996, currently
            residing in Martin, Slovak Republic. I create automotive illustrations and fine
            art prints under my brand{" "}
            <span style={{ color: "#1d1d1f", fontWeight: 400 }}>Petrolified</span>.
          </p>
        </Reveal>
      </section>

      {/* ── Q&A ── */}
      <section className="max-w-[760px] mx-auto px-8 pb-32 w-full">
        {QAS.map((item, i) => (
          <QA key={i} index={i} question={item.q} answer={item.a} delay={i * 0.03} />
        ))}
        <Reveal>
          <div className="py-10" style={{ borderTop: "0.5px solid #e5e5e5" }}>
            <p style={{ fontSize: "12px", color: "#aaa", letterSpacing: "0.16em", textTransform: "uppercase", fontStyle: "italic" }}>
              Originally written by Tim Ridd-Jolly
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── OUR TEAM ── */}
      <section className="w-full" style={{ background: "#f5f5f7", paddingTop: "96px", paddingBottom: "96px" }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

            <Reveal className="w-full md:w-[42%]">
              <div className="flex flex-col">
                <p className="uppercase text-[#aaa] mb-6" style={{ fontSize: "11px", letterSpacing: "0.3em", fontWeight: 400 }}>
                  The people
                </p>
                <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 300, letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.08, marginBottom: "36px" }}>
                  Our Team
                </h2>
                <div className="space-y-5">
                  {[
                    "For a few years I've been at it alone — waking up early to print and pack orders, then working into the night on everything else.",
                    "In 2016 my father Jaroslav joined the endeavour. He's a professional rally co-driver, competing yearly in the Dakar and Silk Way Rallyes.",
                    "Now spending more time with family, he helps take care of all your orders — from printing and packaging, right through to shipping.",
                  ].map((text, i) => (
                    <p key={i} style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.82, color: "#555", letterSpacing: "-0.005em" }}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="w-full md:w-[58%]">
              <div className="overflow-hidden" style={{ borderRadius: "20px" }}>
                <motion.img
                  src="https://www.petrolified.com/cdn/shop/files/aboutsection1.jpg?v=1613154553"
                  alt="Jaroslav and Martin"
                  className="w-full object-cover block"
                  style={{ minHeight: "380px", maxHeight: "540px", objectFit: "cover", filter: "saturate(1.05) brightness(0.97)" }}
                  whileHover={{ scale: 1.02, filter: "saturate(1.1) brightness(1.01)" }}
                  transition={SPRING}
                />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── WORKSPACE ── */}
      <section className="w-full bg-white pt-28 pb-0">
        <Reveal>
          <div className="text-center mb-14">
            <p className="uppercase text-[#aaa] mb-5" style={{ fontSize: "11px", letterSpacing: "0.3em", fontWeight: 400 }}>
              Where I spend the days
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, letterSpacing: "-0.025em", color: "#1d1d1f" }}>
              My Workspace
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="w-full overflow-hidden">
            <motion.img
              src="https://www.petrolified.com/cdn/shop/files/aboutsection2.png?v=1613154553"
              alt="My Workspace"
              className="w-full object-cover block"
              style={{ maxHeight: "700px", filter: "saturate(1.05) brightness(0.97)" }}
              whileHover={{ scale: 1.008, filter: "saturate(1.1) brightness(1.01)" }}
              transition={SPRING}
            />
          </div>
        </Reveal>
      </section>

      {/* ── GEAR ── */}
      <section style={{ background: "#f5f5f7", paddingTop: "96px", paddingBottom: "112px" }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <Reveal>
            <div className="text-center mb-20">
              <p className="uppercase text-[#aaa] mb-5" style={{ fontSize: "11px", letterSpacing: "0.3em", fontWeight: 400 }}>
                Tools of the trade
              </p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, letterSpacing: "-0.025em", color: "#1d1d1f" }}>
                The Setup
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            <GearItem delay={0} title="Computer" description="A late 2013 27-inch iMac running a 3.5GHz i7, 32GB of RAM, GTX 775M and a 1TB SSD. An essential workhorse for rendering thousands of Photoshop layers in real time." />
            <GearItem delay={0.06} title="Tablet" description="My trusty Wacom Intuos 3 — purchased by my parents back in 2005 and still going strong. More precise and comfortable for the long hours of detailed illustration work." />
            <GearItem delay={0.08} title="Speakers" description="A pair of classic Bose speakers. As old as I am, perhaps — but wonderful as can be and a constant companion in the studio." />
            <GearItem delay={0.1} title="Notebook" description="A Baron Fig Confidant. Whenever an idea hits I need to write or draw it immediately. My favourite notebook, kept close whether I'm at home or travelling." />
            <GearItem delay={0.08} center title="Headphones" description="Bang & Olufsen BeoPlay H5s. Great sound, beautiful Scandinavian design and — most importantly — incredibly comfortable for the long illustration sessions." />
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="w-full text-center" style={{ background: "#1d1d1f", paddingTop: "96px", paddingBottom: "96px" }}>
        <Reveal>
          <p className="uppercase text-[#666] mb-6" style={{ fontSize: "11px", letterSpacing: "0.3em", fontWeight: 400 }}>
            Petrolified
          </p>
          <h2 style={{ fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 300, letterSpacing: "-0.03em", color: "#f5f5f7", marginBottom: "44px", lineHeight: 1.1 }}>
            Automobiles. Illustrated.
          </h2>
          <motion.a
            href="/shop"
            className="inline-block"
            style={{
              fontSize: "13px", fontWeight: 400, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#1d1d1f", background: "#f5f5f7",
              padding: "16px 44px", borderRadius: "100px", textDecoration: "none",
            }}
            whileHover={{ scale: 1.04, background: "#fff" }}
            whileTap={{ scale: 0.97 }}
            transition={SPRING}
          >
            Shop the Collection
          </motion.a>
        </Reveal>
      </section>

    </div>
  );
}