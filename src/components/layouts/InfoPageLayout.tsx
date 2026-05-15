import React from "react";

interface InfoPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function InfoPageLayout({ title, subtitle, children }: InfoPageLayoutProps) {
  return (
    <div className="bg-white min-h-screen text-[#1d1d1f] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-medium leading-tight tracking-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[19px] text-[#86868b] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </header>
        <div className="prose prose-neutral max-w-none prose-headings:font-medium prose-headings:text-[#1d1d1f] prose-p:text-[#6e6e73] prose-p:leading-relaxed prose-li:text-[#6e6e73]">
          {children}
        </div>
      </div>
    </div>
  );
}
