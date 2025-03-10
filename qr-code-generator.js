#!/usr/bin/env node
const speakeasy = require('speakeasy');
const qrcode = require('qrcode-terminal');

// Generate a new TOTP secret; adjust options as needed (e.g., name for display)
const secret = speakeasy.generateSecret({
  length: 20,
  name: 'MyWebApp'
});

// Display the Base32 secret (to be used later for TOTP verification)
console.log('Your new TOTP secret (Base32 encoded):');
console.log(secret.base32);

// Print the QR code (using the otpauth URL) in the terminal as ASCII blocks
console.log('\nScan the following QR Code with your Authenticator app:');
qrcode.generate(secret.otpauth_url, { small: true });
