import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return { title: 'Our Impact' };
}

export default async function ImpactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom py-16 text-center">
        <h1 className="section-title">Our Impact</h1>
      </section>

      <section className="container-custom py-16 bg-soft-sand grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1,2,3,4].map(i => (
          <div key={i} className="text-center">
            <div className="text-4xl font-bold text-deep-indigo">[Stat {i}]</div>
            <div className="text-gray-600 mt-2">[Stat Label {i}]</div>
          </div>
        ))}
      </section>

      <section className="container-custom py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="card p-6">
              <h3 className="font-bold mb-2">[Achievement {i}]</h3>
              <p className="text-sm text-gray-600">[Description]</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-custom py-16 bg-warm-ivory text-center">
        <h2 className="text-3xl font-bold mb-8">Where We Work</h2>
        <div className="aspect-[21/9] bg-gray-200 flex items-center justify-center mx-auto max-w-4xl">
          [Map Placeholder for Siraha/Madhesh area]
        </div>
      </section>

      <section className="container-custom py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Timeline</h2>
        <p className="text-center">[Timeline placeholder]</p>
      </section>

      <section className="container-custom py-16 bg-soft-sand text-center">
        <h2 className="text-3xl font-bold mb-8">Reports & Methodology</h2>
        <p className="mb-4">[Reports download placeholder]</p>
        <p className="text-sm italic text-gray-600">All impact claims are based on program records and community feedback.</p>
      </section>
    </main>
  );
}
