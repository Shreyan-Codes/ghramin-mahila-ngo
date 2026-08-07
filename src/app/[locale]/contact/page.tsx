import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactForm from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock, ShieldAlert } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return { title: t('nav.contact') };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="pt-8 pb-16">
      <section className="container-custom py-8 text-center">
        <h1 className="section-title text-4xl font-bold text-[#7B2431]">
          {t('contact.title')}
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          {t('contact.subtitle')}
        </p>
        <div className="mithila-divider w-24 h-1 bg-[#D7A43B] mx-auto mt-4"></div>
      </section>

      <section className="container-custom py-8 grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-[#242424] mb-6">
            {locale === 'ne' ? 'हामीलाई सन्देश पठाउनुहोस्' : 'Send Us a Message'}
          </h2>
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="bg-[#FCF8F1] p-8 rounded-2xl border border-[#EEE5D7] space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#7B2431] text-white flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#242424]">
                  {locale === 'ne' ? 'कार्यालय ठेगाना' : 'Office Address'}
                </h3>
                <p className="text-gray-700 mt-1">
                  {t('footer.address')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C96145] text-white flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#242424]">
                  {locale === 'ne' ? 'सम्पर्क फोन नम्बर' : 'Direct Phone Number'}
                </h3>
                <a href="tel:9849875540" className="text-[#7B2431] font-bold text-xl hover:underline mt-1 block">
                  +977 9849875540
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D7A43B] text-white flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#242424]">
                  {locale === 'ne' ? 'इमेल ठेगाना' : 'Email Address'}
                </h3>
                <p className="text-gray-700 mt-1 font-medium">
                  info@ghraminmahila.org.np
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#263A5F] text-white flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#242424]">
                  {locale === 'ne' ? 'कार्यालय समय' : 'Office Hours'}
                </h3>
                <p className="text-gray-700 mt-1">
                  {locale === 'ne' ? 'आइतबार - शुक्रबार: १०:०० - १७:००' : 'Sunday - Friday: 10:00 AM - 5:00 PM'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FCF8F1] border-2 border-[#7B2431]/20 p-6 rounded-2xl flex items-center gap-4">
            <ShieldAlert className="w-8 h-8 text-[#7B2431] shrink-0" />
            <div>
              <h4 className="font-bold text-[#7B2431]">
                {locale === 'ne' ? 'सुरक्षा तथा अधिकार सम्बन्धी सोधपुछ' : 'Safeguarding & Accountability'}
              </h4>
              <p className="text-xs text-gray-600 mt-0.5">
                {locale === 'ne'
                  ? 'महिला तथा बालबालिकाको सुरक्षा सम्बन्धी चिन्ता वा सोधपुछका लागि सोझै फोन ९८४९८७५५४० मा सम्पर्क गर्नुहोस्।'
                  : 'For urgent safeguarding or protection concerns, please contact phone 9849875540 directly.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
