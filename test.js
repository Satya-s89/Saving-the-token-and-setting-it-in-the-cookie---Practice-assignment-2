// Test file to demonstrate JWT creation and verification

const { encrypt, verifyToken } = require('./script');

// Secret key for signing the token
const SECRET_KEY = 'your-secret-key';

// Sample payload data
const userData = {
  userId: 123,
  username: 'testuser',
  role: 'user'
};

// Create a token with 30 seconds expiry for testing
const token = encrypt(userData, SECRET_KEY, '30s');
console.log('Generated JWT Token:', token);

// Decode and verify the token
const decoded = verifyToken(token, SECRET_KEY);
console.log('Decoded Token Payload:', decoded);

// Demonstrate token expiry
console.log('Waiting for token to expire...');
setTimeout(() => {
  const expiredCheck = verifyToken(token, SECRET_KEY);
  console.log('Checking expired token:', expiredCheck);
  console.log('Token expired:', expiredCheck === null);
}, 31000); // Wait 31 seconds to ensure token has expired
