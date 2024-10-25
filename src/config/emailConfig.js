// config/emailConfig.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,    // SMTP host, e.g., smtp.gmail.com for Gmail
  port: process.env.EMAIL_PORT || 587, // Port (587 for TLS, 465 for SSL)
  secure: false,                   // Use TLS (false for Gmail)
  auth: {
    user: process.env.EMAIL_USER,  // Email account username
    pass: process.env.EMAIL_PASS   // Email account password (use an app password for Gmail)
  }
});

async function sendEmail(options) {
  try {
    const info = await transporter.sendMail({
      from: `"Contact Manager" <${process.env.EMAIL_USER}>`, // Sender address
      to: options.to,       // Recipient address
      subject: options.subject, // Subject line
      text: options.text,       // Plain text body
      html: options.html        // HTML body (optional)
    });

    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = sendEmail;
