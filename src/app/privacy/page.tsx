import { InfoPageLayout } from "@/components/layouts/InfoPageLayout";

export const metadata = {
  title: "Privacy Policy - Petrolified",
  description: "How we protect and handle your personal data.",
};

export default function PrivacyPage() {
  return (
    <InfoPageLayout 
      title="Privacy Policy" 
      subtitle="Your privacy is important to us."
    >
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Information We Collect</h2>
        <p>
          We collect information that you provide directly to us when you make a purchase, sign up for our newsletter, or contact us with an inquiry. This may include your name, email address, shipping address, and payment information.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">How We Use Your Data</h2>
        <p>
          We use your information to process your orders, communicate with you about your purchases, and—if you've opted in—send you updates about new collections and studio news.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Data Sharing</h2>
        <p>
          We do not sell your personal data. We only share information with third-party services (like Shopify for our storefront and DHL/UPS for shipping) that are necessary to fulfill your order.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Cookies</h2>
        <p>
          Our website uses cookies to enhance your browsing experience and analyze site traffic. You can manage your cookie preferences through your browser settings.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact us at privacy@petrolified.com.
        </p>
      </section>
    </InfoPageLayout>
  );
}
