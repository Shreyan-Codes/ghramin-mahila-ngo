import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactForm from '@/components/forms/ContactForm';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom py-16 text-center">
        <h1 className="section-title">Contact Us</h1>
      </section>

      <section className="container-custom py-8 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <ContactForm />
        </div>
        <div className="space-y-8 bg-soft-sand p-8 rounded-xl">
          <div>
            <h3 className="font-bold text-lg mb-2">Office Address</h3>
            <p>[Office address placeholder in Siraha, Madhesh Province]</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Contact Details</h3>
            <p>Phone: [Phone placeholder]</p>
            <p>Email: [Email placeholder]</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Office Hours</h3>
            <p>[Office hours placeholder]</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Social Media</h3>
            <p>[Social media links placeholder]</p>
          </div>
          <div className="aspect-video bg-gray-300 w-full flex items-center justify-center rounded-lg mt-4">
            [Map Placeholder]
          </div>
        </div>
      </section>
    </main>
  );
}
