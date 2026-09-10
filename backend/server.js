const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const INQUIRIES_FILE = path.join(__dirname, 'inquiries.json');

// Initialize inquiries database file if not present
if (!fs.existsSync(INQUIRIES_FILE)) {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2), 'utf8');
}

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Create nodemailer transporter if credentials exist
function getTransporter() {
  const user = process.env.GMAIL_USER || process.env.SMTP_USER;
  const pass = process.env.GMAIL_APP_PASS || process.env.SMTP_PASS;

  if (user && pass) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass }
    });
  }
  return null;
}

// 1. Healthcheck Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'RI Creative Agency Email & Lead Server',
    timestamp: new Date().toISOString()
  });
});

// 2. Lead & Email Dispatch Endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      service,
      packageTier,
      budget,
      timeline,
      message,
      notes,
      refId: clientRefId,
      subject: customSubject
    } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Client Name and Phone/WhatsApp are required.'
      });
    }

    const refId = clientRefId || `RI-${Math.floor(100000 + Math.random() * 900000)}`;
    const inquiryRecord = {
      refId,
      name,
      phone,
      email: email || 'Not provided',
      service: service || 'General Consultation',
      packageTier: packageTier || 'Standard',
      budget: budget || 'To be discussed',
      timeline: timeline || 'Standard',
      message: message || notes || '',
      receivedAt: new Date().toISOString(),
      status: 'NEW'
    };

    // Save permanently to inquiries.json ledger
    let inquiries = [];
    try {
      const data = fs.readFileSync(INQUIRIES_FILE, 'utf8');
      inquiries = JSON.parse(data);
    } catch (e) {
      inquiries = [];
    }
    inquiries.unshift(inquiryRecord);
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), 'utf8');

    // Attempt to send real email via Nodemailer
    let emailSent = false;
    let emailError = null;
    const transporter = getTransporter();

    if (transporter) {
      const recipient = process.env.RECIPIENT_EMAIL || 'rafiqulislam.globalwork@gmail.com';
      const mailOptions = {
        from: `"${name} via RI Creative Agency" <${process.env.GMAIL_USER || process.env.SMTP_USER}>`,
        to: recipient,
        replyTo: email && email.includes('@') ? email : undefined,
        subject: customSubject || `[New Project Inquiry] ${service || 'General'} from ${name} (Ref: ${refId})`,
        text: `New Inquiry Received on RI Creative Agency:
--------------------------------------------------
Reference ID : ${refId}
Client Name  : ${name}
Phone/WA     : ${phone}
Client Email : ${email || 'Not provided'}
Service      : ${service || 'General'}
Package Tier : ${packageTier || 'Standard'}
Budget Range : ${budget || 'To be discussed'}
Timeline     : ${timeline || 'Flexible'}

Project Scope:
${message || notes || 'No extra notes.'}
--------------------------------------------------
Direct WhatsApp Reply: https://wa.me/${phone.replace(/[^0-9]/g, '')}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background: #1e3a8a; color: #ffffff; padding: 20px; text-align: center;">
              <h2 style="margin: 0; font-size: 20px;">New Project Inquiry</h2>
              <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">RI Creative Agency Client Portal</p>
            </div>
            <div style="padding: 24px; background: #ffffff;">
              <div style="background: #f1f5f9; padding: 12px 16px; border-radius: 6px; margin-bottom: 20px;">
                <strong style="color: #0f172a;">Reference ID:</strong> <span style="font-family: monospace; color: #2563eb; font-weight: bold;">${refId}</span>
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                <tr><td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Client Name:</strong></td><td style="padding: 8px 0; color: #0f172a;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Phone / WhatsApp:</strong></td><td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email Address:</strong></td><td style="padding: 8px 0; color: #0f172a;">${email ? `<a href="mailto:${email}" style="color: #2563eb;">${email}</a>` : 'Not provided'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Requested Service:</strong></td><td style="padding: 8px 0; color: #0f172a;">${service || 'General Inquiry'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Package Tier:</strong></td><td style="padding: 8px 0; color: #0f172a;">${packageTier || 'Standard'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Budget:</strong></td><td style="padding: 8px 0; color: #0f172a;">${budget || 'Flexible'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Timeline:</strong></td><td style="padding: 8px 0; color: #0f172a;">${timeline || 'Standard'}</td></tr>
              </table>
              <div style="border-top: 1px solid #e2e8f0; padding-top: 16px;">
                <strong style="color: #0f172a; display: block; margin-bottom: 8px;">Project Scope / Message:</strong>
                <p style="background: #f8fafc; padding: 12px; border-radius: 6px; color: #334155; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message || notes || 'No extra notes provided.'}</p>
              </div>
              <div style="margin-top: 24px; text-align: center;">
                <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background: #25d366; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">Chat with Client on WhatsApp</a>
              </div>
            </div>
            <div style="background: #f8fafc; padding: 12px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
              RI Creative Agency • Jamirdia, Hobirbari, Bhaluka, Mymensingh, Bangladesh
            </div>
          </div>
        `
      };

      try {
        await transporter.sendMail(mailOptions);
        emailSent = true;
      } catch (err) {
        console.error('Nodemailer error:', err.message);
        emailError = err.message;
      }
    }

    return res.json({
      success: true,
      refId,
      emailSent,
      emailError,
      logged: true,
      message: emailSent
        ? 'Email dispatched to Founder inbox and inquiry logged.'
        : 'Inquiry saved to server database. (Configure SMTP in .env for direct email sending).'
    });

  } catch (error) {
    console.error('Server error processing inquiry:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 3. View Inquiries Endpoint (for Founder / Admin)
app.get('/api/inquiries', (req, res) => {
  try {
    const data = fs.readFileSync(INQUIRIES_FILE, 'utf8');
    res.json(JSON.parse(data));
  } catch (e) {
    res.json([]);
  }
});

app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`🚀 RI Creative Agency Lead & Mail Server running on port ${PORT}`);
  console.log(`👉 API Endpoint: http://localhost:${PORT}/api/send-email`);
  console.log(`👉 Inquiries Ledger: http://localhost:${PORT}/api/inquiries`);
  console.log(`===================================================`);
});
