import { InfoPageLayout } from "@/components/layouts/InfoPageLayout";

export const metadata = {
  title: "Framing Guide - Mazen Sultan Studio",
  description: "How to frame your archival automotive prints easily and affordably.",
};

export default function FramingPage() {
  return (
    <InfoPageLayout 
      title="Framing Guide" 
      subtitle="Standard sizes for effortless framing."
    >
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Designed for Ease</h2>
        <p>
          One of our core goals is to make high-quality art accessible. That's why every Mazen Sultan Studio print is designed to fit standard, off-the-shelf frame sizes. You won't need expensive custom framing to make your walls look gallery-ready.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Common Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f5f5f7] p-8 rounded-2xl">
            <h3 className="font-medium mb-2">A3 / A2</h3>
            <p className="text-sm">Standard International paper sizes. Extremely common at IKEA, Amazon, and local art shops.</p>
          </div>
          <div className="bg-[#f5f5f7] p-8 rounded-2xl">
            <h3 className="font-medium mb-2">50 x 70 cm</h3>
            <p className="text-sm">A popular large-format size that provides a significant presence on any wall.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Our Recommendations</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Minimalist:</strong> Thin black or oak wood frames complement our clean illustrations perfectly.</li>
          <li><strong>Glass:</strong> We recommend using real glass or high-quality acrylic with UV protection to preserve the colors for decades.</li>
          <li><strong>Mounting:</strong> While our prints look great edge-to-edge, adding a white mount (mat) can add an extra level of sophistication to larger frames.</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
