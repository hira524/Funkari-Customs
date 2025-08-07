'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function TestEmailPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [emailLogs, setEmailLogs] = useState<string[]>([]);
  const form = useRef<HTMLFormElement>(null);

  // EmailJS Configuration from environment variables
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
  const TEST_EMAIL = process.env.NEXT_PUBLIC_TEST_EMAIL!;

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setEmailLogs(prev => [...prev, `[${timestamp}] ${message}`]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    addLog('🚀 Starting email send process...');

    try {
      const formData = new FormData(e.currentTarget);
      const now = new Date();
      
      const emailData = {
        from_name: formData.get('from_name'),
        from_email: formData.get('from_email'),
        product_id: formData.get('product_id'),
        message: formData.get('message'),
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        to_email: TEST_EMAIL, // Send to your test email
      };

      addLog(`📧 Sending to: ${TEST_EMAIL}`);
      addLog(`👤 From: ${emailData.from_name} (${emailData.from_email})`);
      addLog(`🏷️ Product ID: ${emailData.product_id}`);

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailData,
        EMAILJS_PUBLIC_KEY
      );

      addLog(`✅ EmailJS Response: Status ${result.status}`);
      addLog(`📨 Message ID: ${result.text}`);

      if (result.status === 200) {
        setSubmitStatus('success');
        addLog('🎉 Email sent successfully!');
        if (form.current) {
          form.current.reset();
        }
      } else {
        setSubmitStatus('error');
        addLog(`❌ Unexpected status: ${result.status}`);
      }
    } catch (error: any) {
      addLog(`💥 Error occurred: ${error.message}`);
      addLog(`🔍 Error details: ${JSON.stringify(error)}`);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">📧 Email Test Page</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Test Email Form</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  ✅ Test email sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  ❌ Failed to send test email. Check logs below.
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name
                </label>
                <input
                  name="from_name"
                  required
                  placeholder="Test Customer"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Email
                </label>
                <input
                  name="from_email"
                  type="email"
                  required
                  placeholder="test@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product ID
                </label>
                <input
                  name="product_id"
                  placeholder="TEST-001"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="This is a test message for email functionality..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '📤 Sending...' : '🚀 Send Test Email'}
              </button>
            </form>
          </div>

          {/* Logs Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">📋 Email Logs</h2>
              <button
                onClick={() => setEmailLogs([])}
                className="text-sm bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
              >
                Clear Logs
              </button>
            </div>
            
            <div className="bg-gray-900 text-green-400 p-4 rounded-md h-96 overflow-y-auto font-mono text-sm">
              {emailLogs.length === 0 ? (
                <div className="text-gray-500">No logs yet. Send a test email to see logs here.</div>
              ) : (
                emailLogs.map((log, index) => (
                  <div key={index} className="mb-1">{log}</div>
                ))
              )}
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800">
                <strong>📍 Test Email:</strong> {TEST_EMAIL}
              </p>
              <p className="text-sm text-blue-800 mt-1">
                <strong>🔧 Service ID:</strong> {EMAILJS_SERVICE_ID}
              </p>
              <p className="text-sm text-blue-800 mt-1">
                <strong>📧 Template ID:</strong> {EMAILJS_TEMPLATE_ID}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
