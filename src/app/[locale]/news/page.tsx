import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom py-16 text-center">
        <h1 className="section-title">News & Events</h1>
      </section>

      <section className="container-custom py-8 text-center p-12 bg-gray-50 rounded-xl">
        <p className="text-xl text-gray-500 font-medium">[Pending content: News articles and upcoming events will be listed here]</p>
      </section>
    </main>
  );
}
