import { InfoPageLayout } from "@/components/layouts/InfoPageLayout";

export const metadata = {
  title: "Imprint - Mazen Sultan Studio",
  description: "Legal information about the business.",
};

export default function ImprintPage() {
  return (
    <InfoPageLayout 
      title="Imprint" 
      subtitle="Legal Disclosure"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Business Information</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Company Name</p>
            <p>Store name / Mazen Sultan Studio</p>
          </div>
          <div>
            <p className="font-medium">Registered Address</p>
            <p>
W3M5+3R - Jabal Ali Industrial Third 
</p>
            <p>- National Industries Park</p>
            <p>Dubai</p>
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p>studio@email.com</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Legal Representative</h2>
        <p>Mazen Sultan, Founder & Artist</p>
      </section>




    </InfoPageLayout>
  );
}
