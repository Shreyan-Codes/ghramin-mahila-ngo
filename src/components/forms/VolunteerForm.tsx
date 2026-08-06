'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function VolunteerForm() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  if (status === 'submitted') {
    return <div className="text-center p-8 bg-green-50 text-green-800 rounded-lg font-medium">Thank you for your interest! We will contact you soon.</div>;
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setStatus('submitted'); }} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="form-label block mb-2 text-sm font-medium">Name</label>
          <input required type="text" className="form-input w-full p-3 border rounded-md" />
        </div>
        <div>
          <label className="form-label block mb-2 text-sm font-medium">Email</label>
          <input required type="email" className="form-input w-full p-3 border rounded-md" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="form-label block mb-2 text-sm font-medium">Phone</label>
          <input type="tel" className="form-input w-full p-3 border rounded-md" />
        </div>
        <div>
          <label className="form-label block mb-2 text-sm font-medium">Area of Interest</label>
          <select className="form-input w-full p-3 border rounded-md">
            <option>Education</option>
            <option>Health</option>
            <option>Women Empowerment</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="form-label block mb-2 text-sm font-medium">Skills</label>
        <input type="text" className="form-input w-full p-3 border rounded-md" />
      </div>
      <div>
        <label className="form-label block mb-2 text-sm font-medium">Availability</label>
        <input type="text" className="form-input w-full p-3 border rounded-md" />
      </div>
      <div>
        <label className="form-label block mb-2 text-sm font-medium">Motivation</label>
        <textarea required className="form-input w-full p-3 border rounded-md min-h-[100px]"></textarea>
      </div>
      <div className="flex items-start">
        <input required type="checkbox" id="v-consent" className="mt-1 mr-2" />
        <label htmlFor="v-consent" className="text-sm text-gray-600">I consent to sharing this information with Ghramin Mahila.</label>
      </div>
      <button type="submit" className="btn-primary w-full p-3 bg-deep-indigo text-white rounded-md font-bold">Submit Application</button>
    </form>
  );
}
