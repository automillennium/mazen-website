import { InfoPageLayout } from "@/components/layouts/InfoPageLayout";

export const metadata = {
  title: "Press - Petrolified",
  description: "Media mentions and press contact information.",
};

export default function PressPage() {
  return (
    <InfoPageLayout 
      title="Press" 
      subtitle="The story of Store name / Mazen Sultan Studio in the media."
    >
      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-8">As Seen In</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 opacity-60">
          <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg font-bold tracking-tighter text-xl">TopGear</div>
          <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg font-bold tracking-tighter text-xl">GQ</div>
          <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg font-bold tracking-tighter text-xl">Wired</div>
          <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg font-bold tracking-tighter text-xl">Silodrome</div>
          <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg font-bold tracking-tighter text-xl">Petrolicious</div>
          <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg font-bold tracking-tighter text-xl">Uncrate</div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Press Inquiries</h2>
        <p className="mb-8">
          Are you a journalist or blogger interested in featuring Petrolified? We'd love to hear from you. We can provide high-resolution images, artist bios, and interview opportunities.
        </p>
        <div className="bg-[#f5f5f7] p-8 rounded-2xl inline-block">
          <p className="font-medium">Media Contact</p>
          <p className="text-blue-600">EMAIL_ADDRESS</p>
        </div>
      </section>
    </InfoPageLayout>
  );
}
