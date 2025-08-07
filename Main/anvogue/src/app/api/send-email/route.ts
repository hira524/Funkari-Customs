import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, productId, details } = await request.json();

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // funkaricustoms@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD, // App password (not regular password)
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'funkaricustoms@gmail.com',
      subject: `New Customization Request from ${name}`,
      html: `
        <h2>New Customization Request</h2>
        <p><strong>Customer Name:</strong> ${name}</p>
        <p><strong>Customer Email:</strong> ${email}</p>
        <p><strong>Product ID:</strong> ${productId || 'Not specified'}</p>
        <p><strong>Customization Details:</strong></p>
        <p>${details.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This email was sent from your website's contact form.</em></p>
      `,
      replyTo: email, // So you can reply directly to the customer
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
