'use client';

import { useState } from 'react';

export default function DonationForm() {
  const [type, setType] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState('50');
  
  return (
    <div className="space-y-8">
      <div className="flex border rounded-lg overflow-hidden">
        <button 
          onClick={() => setType('one-time')} 
          className={`flex-1 py-3 font-semibold ${type === 'one-time' ? 'bg-warm-terracotta text-white' : 'bg-gray-100'}`}
        >
          One-Time
        </button>
        <button 
          onClick={() => setType('monthly')} 
          className={`flex-1 py-3 font-semibold ${type === 'monthly' ? 'bg-warm-terracotta text-white' : 'bg-gray-100'}`}
        >
          Monthly
        </button>
      </div>

      <div>
        <h3 className="font-bold mb-4">Select Program</h3>
        <select className="form-input w-full p-3 border rounded-md">
          <option>General Fund (Greatest Need)</option>
          <option>Women Empowerment</option>
          <option>Education & Literacy</option>
          <option>Health & Nutrition</option>
        </select>
      </div>

      <div>
        <h3 className="font-bold mb-4">Amount</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {['25', '50', '100'].map(val => (
            <button 
              key={val} 
              onClick={() => setAmount(val)}
              className={`py-2 rounded-md border ${amount === val ? 'border-warm-terracotta bg-orange-50 text-warm-terracotta font-bold' : 'border-gray-200'}`}
            >
              ${val}
            </button>
          ))}
        </div>
        <div className="flex items-center border rounded-md p-2">
          <span className="text-gray-500 mr-2">$</span>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            className="w-full outline-none" 
            placeholder="Custom Amount"
          />
        </div>
      </div>

      <div className="bg-soft-sand p-6 rounded-lg text-center">
        <h3 className="font-bold mb-2">Bank Transfer Details</h3>
        <p className="text-sm text-gray-600">[Bank Details Placeholder]</p>
        <div className="mt-4 aspect-square w-32 bg-gray-200 mx-auto flex items-center justify-center text-xs">
          [QR Code]
        </div>
      </div>

      <div className="flex items-start">
        <input type="checkbox" id="anon" className="mt-1 mr-2" />
        <label htmlFor="anon" className="text-sm text-gray-700">Make this donation anonymous</label>
      </div>

      <button className="btn-primary w-full p-4 bg-deep-indigo text-white font-bold rounded-lg text-lg">
        Complete Donation
      </button>
    </div>
  );
}
