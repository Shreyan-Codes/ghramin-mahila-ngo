'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  if (status === 'submitted') {
    return <div className="text-center p-8 bg-green-50 text-green-800 rounded-lg font-medium">Message sent successfully!</div>;
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setStatus('submitted'); }} className="space-y-6">
      <div>
        <label className="form-label block mb-2 text-sm font-medium">Name</label>
        <input required type="text" className="form-input w-full p-3 border rounded-md" />
      </div>
      <div>
        <label className="form-label block mb-2 text-sm font-medium">Email</label>
        <input required type="email" className="form-input w-full p-3 border rounded-md" />
      </div>
      <div>
        <label className="form-label block mb-2 text-sm font-medium">Inquiry Type</label>
        <select className="form-input w-full p-3 border rounded-md">
          <option>General</option>
          <option>Support</option>
          <option>Media</option>
        </select>
      </div>
      <div>
        <label className="form-label block mb-2 text-sm font-medium">Message</label>
        <textarea required className="form-input w-full p-3 border rounded-md min-h-[120px]"></textarea>
      </div>
      <button type="submit" className="btn-primary w-full p-3 bg-deep-indigo text-white rounded-md font-bold">Send Message</button>
    </form>
  );
}
