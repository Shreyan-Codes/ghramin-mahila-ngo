import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="pt-24 pb-16 container-custom text-center">
      <h1 className="section-title my-12">Privacy Policy</h1>
      <p className="text-xl text-gray-500 font-medium">[Pending content: Privacy policy content pending]</p>
    </main>
  );
}
