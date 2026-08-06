import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function StoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom py-16 text-center">
        <h1 className="section-title">Stories of Impact</h1>
        <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">[Description placeholder]</p>
      </section>

      <section className="container-custom py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['All', 'Women', 'Children', 'Community', 'Health', 'Education'].map(cat => (
            <button key={cat} className="px-4 py-2 border rounded-full hover:bg-gray-100">{cat}</button>
          ))}
        </div>
        <div className="text-center p-12 bg-gray-50 rounded-xl">
          <p className="text-xl text-gray-500 font-medium">Consent-verified stories will be published here.</p>
        </div>
      </section>
    </main>
  );
}
