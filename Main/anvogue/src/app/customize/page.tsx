'use client';

import React, { useState, useEffect } from 'react';
import MenuEight from '@/components/Header/Menu/MenuEight';
import Footer from '@/components/Footer/Footer';

export default function CustomizePage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    productId: '',
    details: '',
  });
  const [status, setStatus] = useState('');

  // Get productId from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setForm(f => ({ ...f, productId: params.get('productId') || '' }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    const res = await fetch('/api/send-customization', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('Your customization request has been sent!');
      setForm({ name: '', email: '', productId: form.productId, details: '' });
    } else {
      setStatus('Failed to send. Please try again.');
    }
  };

  return (
    <>
      <MenuEight />
      <div className="customize-bg min-h-[70vh] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-xl bg-white/90 shadow-xl rounded-2xl p-8 border border-line">
          <h1 className="heading3 mb-6 text-center">Customize Your Product</h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Your Name</label>
              <input
                className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Your Email</label>
              <input
                className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Product ID</label>
              <input
                className="border border-gray-200 px-4 py-2 w-full rounded-lg bg-gray-100"
                name="productId"
                value={form.productId}
                readOnly
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Customization Details</label>
              <textarea
                className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                name="details"
                value={form.details}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your customization request in detail"
              />
            </div>
            <button
              className="button-main w-full bg-blue-600 text-black px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md hover:scale-105 active:scale-95 duration-150"
              type="submit"
            >
              Send Request
            </button>
           
            {status && (
              <div className={`mt-2 text-center ${status.includes('sent') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
      <style jsx global>{`
        .customize-bg {
          background: linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%);
        }
      `}</style>
    </>
  );
}