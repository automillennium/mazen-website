import { InfoPageLayout } from "@/components/layouts/InfoPageLayout";

export const metadata = {
  title: "FAQ - Mazen Sultan Studio",
  description: "Frequently asked questions about our archival automotive prints.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What is an archival print?",
      a: "Archival prints are museum-quality pieces made using pigment-based inks and acid-free papers. They are designed to last for over 100 years without fading when kept under normal indoor lighting conditions.",
    },
    {
      q: "Are the frames included?",
      a: "No, all listings are for the print only. This allows us to keep shipping costs low and gives you the freedom to choose a frame that matches your interior perfectly.",
    },
    {
      q: "What size are the prints?",
      a: "Most of our prints come in standard sizes like A3 (297 x 420 mm), A2 (420 x 594 mm), and 50x70 cm. These are standard 'off-the-shelf' sizes, meaning you can easily find affordable frames at most retailers.",
    },
    {
      q: "Do you offer custom/bespoke illustrations?",
      a: "Yes! If you have a specific car or configuration that isn't in our shop, you can request a bespoke illustration. Prices depend on the complexity and current studio schedule. Visit our Bespoke page for more details.",
    },
    {
      q: "How are the prints shipped?",
      a: "Prints are carefully rolled and shipped in heavy-duty cardboard tubes to ensure they arrive in perfect condition, no matter where you are in the world.",
    },
  ];

  return (
    <InfoPageLayout 
      title="Frequently Asked Questions" 
      subtitle="Everything you need to know about our prints, process, and studio."
    >
      <div className="space-y-12">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-100 pb-8">
            <h3 className="text-xl font-medium mb-4">{faq.q}</h3>
            <p className="text-[#6e6e73] leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </InfoPageLayout>
  );
}
