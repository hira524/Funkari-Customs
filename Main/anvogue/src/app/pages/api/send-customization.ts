import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, productId, details } = req.body;

  // Use environment variables for security
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || 'syedhira2846@gmail.com',
      pass: process.env.GMAIL_PASS || 'YOUR_APP_PASSWORD', // Set GMAIL_PASS in your .env file
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'syedhira2846@gmail.com',
      subject: `New Customization Request for Product ${productId}`,
      text: `Name: ${name}\nEmail: ${email}\nProduct ID: ${productId}\nDetails:\n${details}`,
      html: `
        <h2>New Customization Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Product ID:</strong> ${productId}</p>
        <p><strong>Details:</strong><br/>${details.replace(/\n/g, '<br/>')}</p>
      `,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
}