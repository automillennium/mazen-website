"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StorySection as StorySectionType } from "@/types";

// Helper to parse Shopify's Rich Text JSON into paragraphs
const parseRichText = (jsonString: string) => {
  try {
    const data = JSON.parse(jsonString);
    return data.children.map((child: any) => {
      return child.children?.map((inner: any) => inner.value).join("") || "";
    });
  } catch (e) {
    return [jsonString];
  }
};

interface StorySectionProps {
  storySections: any[]; // Using any[] here because the actual structure in the component uses edge.node
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const StorySection = ({ storySections, activeTab, setActiveTab }: StorySectionProps) => {
  // Find current active section data from your edges
  const currentSection = storySections.find((edge: any) => 
    edge.node.fields.find((f: any) => f.key === "heading")?.value === activeTab
  )?.node;

  const getField = (key: string) => currentSection?.fields.find((f: any) => f.key === key)?.value;

  return (
    <section className="py-20 bg-white border-t border-gray-50">
      {/* Tab Navigation */}
      <nav className="flex justify-center space-x-10 mb-16 overflow-x-auto scrollbar-hide px-6">
        {storySections.map((edge: any) => {
          const title = edge.node.fields.find((f: any) => f.key === "heading")?.value;
          return (
            <button
              key={title}
              onClick={() => setActiveTab(title)}
              className={`text-[11px] tracking-[0.2em] uppercase pb-3 transition-all relative whitespace-nowrap ${
                activeTab === title ? "text-black font-semibold" : "text-gray-300 hover:text-gray-500"
              }`}
            >
              {title}
              {activeTab === title && (
                <motion.div layoutId="tabUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black" />
              )}
            </button>
          );
        })}
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {/* Centered Image Background */}
          <div className="w-full bg-[#f5f5f7] py-24 flex justify-center items-center">
            <div className="max-w-4xl w-full flex justify-center px-6">
              {/* Reference the image GID or a placeholder here */}
              <div className="w-full max-w-[600px] aspect-video bg-transparent flex items-center justify-center border border-dashed border-gray-200">
                 <p className="text-[10px] text-gray-400 tracking-widest uppercase">
                   {activeTab} Visual
                 </p>
              </div>
            </div>
          </div>

          {/* Text Content Grid */}
          <div className="max-w-4xl mx-auto px-8 py-24">
            <header className="mb-14">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#86868b] font-medium block mb-3">
                {getField("sub_heading")}
              </span>
              <h2 className="text-4xl font-light tracking-tight uppercase text-[#1d1d1f]">
                {getField("heading")}
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {parseRichText(getField("description") || "").map((para: string, idx: number) => (
                para && (
                  <p key={idx} className="text-[14px] leading-[1.9] text-[#86868b] font-normal">
                    {para}
                  </p>
                )
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default StorySection;