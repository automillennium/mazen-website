import { InfoPageLayout } from "@/components/layouts/InfoPageLayout";

export const metadata = {
  title: "Shipping - Petrolified",
  description: "Worldwide shipping information and packaging details.",
};

export default function ShippingPage() {
  return (
    <InfoPageLayout 
      title="Shipping Information" 
      subtitle="We ship our archival prints to collectors all over the world."
    >
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Worldwide Delivery</h2>
        <p>
          Whether you're in London, Los Angeles, or Tokyo, we'll get your art to you. We partner with reliable carriers to ensure safe and timely delivery globally.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Rates & Free Shipping</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Domestic (EU):</strong> €9.00 (Standard)</li>
          <li><strong>International:</strong> €15.00 (Standard)</li>
          <li><strong>Free Shipping:</strong> Automatically applied to all orders over €98.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Packaging</h2>
        <p>
          To guarantee that your prints arrive in pristine condition, they are carefully rolled in acid-free tissue paper and placed inside high-strength, hard cardboard tubes. We avoid flat shipping for larger prints as tubes offer significantly better protection against bending and edge damage.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Handling Upon Arrival</h2>
        <p>
          Once you receive your tube, we recommend carefully removing the print and allowing it to flatten on a clean, flat surface for 24 hours before framing. Placing a few heavy, clean objects (like books) on the corners can help speed up this process.
        </p>
      </section>
    </InfoPageLayout>
  );
}
