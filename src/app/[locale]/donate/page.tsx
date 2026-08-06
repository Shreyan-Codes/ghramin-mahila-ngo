import { getTranslations, setRequestLocale } from 'next-intl/server';
import DonationForm from '@/components/forms/DonationForm';

export default async function DonatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom py-16 text-center">
        <h1 className="section-title">Support Our Cause</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600">[Donation page description placeholder]</p>
      </section>

      <section className="container-custom py-8 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <DonationForm />
        </div>
      </section>

      <section className="container-custom py-16 text-center text-sm text-gray-500">
        <p>[Privacy and refund information placeholder]</p>
        <p>NO active payment processing. For demonstration purposes only.</p>
      </section>
    </main>
  );
}
