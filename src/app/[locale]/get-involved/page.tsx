import { getTranslations, setRequestLocale } from 'next-intl/server';
import VolunteerForm from '@/components/forms/VolunteerForm';
import PartnershipForm from '@/components/forms/PartnershipForm';

export default async function GetInvolvedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="pt-24 pb-16">
      <section className="container-custom py-16 text-center">
        <h1 className="section-title">{t('getInvolved.title') || 'Get Involved'}</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600">{t('getInvolved.description') || '[Description placeholder]'}</p>
      </section>

      <section className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card p-8 text-center border-2 border-deep-indigo">
            <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
            <p className="mb-6 text-gray-600">[Volunteer description]</p>
            <a href="#volunteer-form" className="btn-primary inline-block">Apply Now</a>
          </div>
          <div className="card p-8 text-center border-2 border-warm-terracotta">
            <h3 className="text-2xl font-bold mb-4">Partner</h3>
            <p className="mb-6 text-gray-600">[Partner description]</p>
            <a href="#partner-form" className="btn-primary inline-block">Collaborate</a>
          </div>
          <div className="card p-8 text-center border-2 border-mustard-gold">
            <h3 className="text-2xl font-bold mb-4">Donate</h3>
            <p className="mb-6 text-gray-600">[Donate description]</p>
            <a href="/donate" className="btn-primary inline-block">Support Us</a>
          </div>
        </div>
      </section>

      <section id="volunteer-form" className="container-custom py-16 bg-soft-sand rounded-xl mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Volunteer Application</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <VolunteerForm />
        </div>
      </section>

      <section id="partner-form" className="container-custom py-16 bg-warm-ivory rounded-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Partnership Inquiry</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <PartnershipForm />
        </div>
      </section>
    </main>
  );
}
