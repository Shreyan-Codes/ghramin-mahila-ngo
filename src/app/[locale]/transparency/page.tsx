import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function TransparencyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom py-16 text-center">
        <h1 className="section-title">Transparency & Governance</h1>
      </section>
      
      <section className="container-custom py-8 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Registration Details</h2>
          <p>[Registration details placeholder]</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Reports & Documents</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-bold mb-2">Annual Report 2023</h3>
              <p className="text-sm text-gray-600 mb-4">Category: Financial</p>
              <button className="btn-secondary w-full">[Download]</button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Governance Structure</h2>
          <p>[Governance structure placeholder]</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Policies</h2>
          <p>[Policies section placeholder]</p>
        </div>
      </section>
    </main>
  );
}
