#!/usr/bin/env node
const speakeasy = require('speakeasy');
const qrcode = require('qrcode-terminal');

// Get the optional 'name' argument from the command line
const name = process.argv[2] || 'MyWebApp';

// Generate a new TOTP secret
const secret = speakeasy.generateSecret({
  length: 20,
  name: name
});

// Display the Base32 secret
console.log('Your new TOTP secret (Base32 encoded):');
console.log(secret.base32);

// Print the QR code in the terminal
console.log(`\nScan the following QR Code with your Authenticator app (Account Name: ${name}):`);
qrcode.generate(secret.otpauth_url, { small: true });
