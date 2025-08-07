'use client';

import React, { useState, useEffect, useRef } from 'react';
import MenuEight from '@/components/Header/Menu/MenuEight';
import Footer from '@/components/Footer/Footer';
import emailjs from '@emailjs/browser';

export default function CustomizePage() {
  const [productId, setProductId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const form = useRef<HTMLFormElement>(null);

  // EmailJS Configuration from environment variables
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  // Validate environment variables
  useEffect(() => {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS environment variables are missing. Please check your .env.local file.');
    }
  }, [EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY]);

  // Get productId from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setProductId(params.get('productId') || '');
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Add current date and time to the form data
      const now = new Date();
      const dateStr = now.toLocaleDateString();
      const timeStr = now.toLocaleTimeString();

      // Create a temporary form with additional fields
      const formData = new FormData(e.currentTarget);
      
      // Add date and time fields for the email template
      const emailData = {
        from_name: formData.get('from_name'),
        from_email: formData.get('from_email'),
        product_id: formData.get('product_id'),
        message: formData.get('message'),
        date: dateStr,
        time: timeStr,
      };

      // Enhanced logging for debugging
      console.log('🚀 EmailJS Send Attempt:', {
        service: EMAILJS_SERVICE_ID,
        template: EMAILJS_TEMPLATE_ID,
        data: emailData,
        timestamp: now.toISOString()
      });

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailData,
        EMAILJS_PUBLIC_KEY
      );

      // Log success details
      console.log('✅ EmailJS Success:', {
        status: result.status,
        text: result.text,
        timestamp: new Date().toISOString()
      });

      if (result.status === 200) {
        setSubmitStatus('success');
        if (form.current) {
          form.current.reset();
        }
        // Reset productId if it was from URL
        const params = new URLSearchParams(window.location.search);
        setProductId(params.get('productId') || '');
      } else {
        console.warn('⚠️ Unexpected status:', result.status);
        setSubmitStatus('error');
      }
    } catch (error: any) {
      // Enhanced error logging
      console.error('💥 EmailJS Error Details:', {
        message: error.message,
        name: error.name,
        stack: error.stack,
        timestamp: new Date().toISOString()
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <MenuEight />
      <div className="customize-bg min-h-[70vh] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-xl bg-white/90 shadow-xl rounded-2xl p-8 border border-line">
          <h1 className="heading3 mb-6 text-center">Customize Your Product</h1>
          <form
            ref={form}
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Your customization request has been sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Failed to send request. Please try again.
              </div>
            )}
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Your Name</label>
              <input
                className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                name="from_name"
                required
                placeholder="Enter your name"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Your Email</label>
              <input
                className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                name="from_email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Product ID</label>
              <input
                className="border border-gray-200 px-4 py-2 w-full rounded-lg bg-gray-100"
                name="product_id"
                value={productId}
                readOnly
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Customization Details</label>
              <textarea
                className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                name="message"
                required
                rows={5}
                placeholder="Describe your customization request in detail"
              />
            </div>
            <button
              className="button-main w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md hover:scale-105 active:scale-95 duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Request'}
            </button>
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