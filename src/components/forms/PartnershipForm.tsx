'use client';

import { useState } from 'react';

export default function PartnershipForm() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  if (status === 'submitted') {
    return <div className="text-center p-8 bg-green-50 text-green-800 rounded-lg font-medium">Thank you for your interest in partnering with us!</div>;
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setStatus('submitted'); }} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="form-label block mb-2 text-sm font-medium">Organization Name</label>
          <input required type="text" className="form-input w-full p-3 border rounded-md" />
        </div>
        <div>
          <label className="form-label block mb-2 text-sm font-medium">Organization Type</label>
          <select className="form-input w-full p-3 border rounded-md">
            <option>Corporate</option>
            <option>NGO</option>
            <option>Government</option>
            <option>Academic</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="form-label block mb-2 text-sm font-medium">Contact Person</label>
          <input required type="text" className="form-input w-full p-3 border rounded-md" />
        </div>
        <div>
          <label className="form-label block mb-2 text-sm font-medium">Email</label>
          <input required type="email" className="form-input w-full p-3 border rounded-md" />
        </div>
      </div>
      <div>
        <label className="form-label block mb-2 text-sm font-medium">Phone</label>
        <input type="tel" className="form-input w-full p-3 border rounded-md" />
      </div>
      <div>
        <label className="form-label block mb-2 text-sm font-medium">Proposed Collaboration Area</label>
        <input required type="text" className="form-input w-full p-3 border rounded-md" />
      </div>
      <div>
        <label className="form-label block mb-2 text-sm font-medium">Message</label>
        <textarea required className="form-input w-full p-3 border rounded-md min-h-[100px]"></textarea>
      </div>
      <div className="flex items-start">
        <input required type="checkbox" id="p-consent" className="mt-1 mr-2" />
        <label htmlFor="p-consent" className="text-sm text-gray-600">I consent to sharing this information.</label>
      </div>
      <button type="submit" className="btn-primary w-full p-3 bg-warm-terracotta text-white rounded-md font-bold">Submit Inquiry</button>
    </form>
  );
}
