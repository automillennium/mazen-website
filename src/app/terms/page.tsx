import { InfoPageLayout } from "@/components/layouts/InfoPageLayout";

export const metadata = {
  title: "Terms & Conditions - Petrolified",
  description: "Our terms of service and purchasing conditions.",
};

export default function TermsPage() {
  return (
    <InfoPageLayout 
      title="Terms & Conditions" 
      subtitle="Last updated: May 15, 2026"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">1. Introduction</h2>
        <p>
          Welcome to Petrolified. By accessing our website and purchasing our prints, you agree to comply with and be bound by the following terms and conditions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">2. Intellectual Property</h2>
        <p>
          All artwork and illustrations featured on this website are the intellectual property of Martin Miškolci and Petrolified. Unauthorized reproduction or commercial use of our designs is strictly prohibited.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">3. Orders and Payment</h2>
        <p>
          All orders are subject to acceptance and availability. Prices are inclusive of VAT where applicable. Payments are processed securely via our third-party payment providers.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">4. Returns and Refunds</h2>
        <p>
          As our prints are often produced on-demand, we can only accept returns for items that arrive damaged or incorrect. Please contact us within 14 days of receipt if there is an issue with your order.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">5. Limitation of Liability</h2>
        <p>
          Petrolified shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our products or website.
        </p>
      </section>
    </InfoPageLayout>
  );
}
