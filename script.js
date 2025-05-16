const jwt = require('jsonwebtoken');

/**
 * Creates a JWT token with an expiry time
 * @param {Object} payload - The data to be encoded in the token
 * @param {string} secret - The secret key used to sign the token
 * @param {string|number} expiresIn - The expiration time (e.g., '1h', '2d', 3600)
 * @returns {string} The generated JWT token
 */
const encrypt = (payload, secret, expiresIn = '1h') => {
  try {
    // Create a JWT with the payload, secret, and expiry time
    const token = jwt.sign(payload, secret, { expiresIn });
    return token;
  } catch (error) {
    console.error('Error creating JWT:', error.message);
    throw error;
  }
};

/**
 * Verifies a JWT token
 * @param {string} token - The JWT token to verify
 * @param {string} secret - The secret key used to sign the token
 * @returns {Object|null} The decoded payload if valid, null if expired or invalid
 */
const verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      console.error('Token has expired');
    } else {
      console.error('Invalid token:', error.message);
    }
    return null;
  }
};

module.exports = { encrypt, verifyToken };
