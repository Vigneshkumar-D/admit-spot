const nodemailer = require('nodemailer');
const emailConfig = require('../config/emailConfig');

// Set up email transporter
const transporter = nodemailer.createTransport(emailConfig);

// Send email verification link
const sendVerificationEmail = async (user, token) => {
  const url = `http://your-domain.com/verify-email/${token}`;
  await transporter.sendMail({
    from: '"Your App" <no-reply@yourapp.com>',
    to: user.email,
    subject: 'Email Verification',
    text: `Please verify your email by clicking this link: ${url}`,
    html: `<a href="${url}">Verify Email</a>`,
  });
};

// Send password reset email
const sendPasswordResetEmail = async (user, token) => {
  const url = `http://your-domain.com/reset-password/${token}`;
  await transporter.sendMail({
    from: '"Your App" <no-reply@yourapp.com>',
    to: user.email,
    subject: 'Password Reset',
    text: `Reset your password by clicking this link: ${url}`,
    html: `<a href="${url}">Reset Password</a>`,
  });
};

module.exports = {
  sendVerificationEmail,
  sendPasswordResetEmail,
};
