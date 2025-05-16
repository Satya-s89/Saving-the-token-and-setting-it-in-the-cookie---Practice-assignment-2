# JWT Token Generator with Expiry

This project demonstrates how to create and verify JSON Web Tokens (JWTs) with expiration times.

## Features

- Generate JWT tokens with custom payloads
- Set expiration times for tokens
- Verify tokens and handle expired tokens
- Browser-based UI for token generation and verification
- Node.js server implementation for backend token handling

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

#### Browser UI

1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to the provided URL (usually http://localhost:8080)
3. Use the form to generate and verify tokens

#### Node.js Server

1. Start the Node.js server:
   ```
   node server.js
   ```
2. The server will run on http://localhost:3000
3. Use API endpoints:
   - POST /api/token - Generate a JWT token
   - POST /api/verify - Verify a JWT token

## How to Use the JWT Functions

### In JavaScript Code

```javascript
const { encrypt, verifyToken } = require('./script');

// Secret key for signing tokens
const SECRET_KEY = 'your-secret-key';

// Sample payload data
const userData = {
  userId: 123,
  username: 'testuser',
  role: 'user'
};

// Create a token with 1 hour expiry
const token = encrypt(userData, SECRET_KEY, '1h');
console.log('Generated JWT Token:', token);

// Verify the token
const decoded = verifyToken(token, SECRET_KEY);
if (decoded) {
  console.log('Token is valid:', decoded);
} else {
  console.log('Token is invalid or expired');
}
```

### Expiry Time Formats

You can specify the expiration time in various formats:

- Seconds: `30s`
- Minutes: `5m`
- Hours: `1h`
- Days: `2d`
- Numeric value (in seconds): `3600`

## Understanding JWT Structure

A JWT consists of three parts separated by dots (`.`):

1. **Header**: Contains the token type and signing algorithm
2. **Payload**: Contains the claims (data)
3. **Signature**: Used to verify the token hasn't been tampered with

Example:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyNDI2MjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

## Security Considerations

- Never store sensitive information in JWTs as they can be decoded (but not verified without the secret)
- Keep your secret key secure and never expose it in client-side code
- Always use HTTPS in production to protect tokens in transit
- Set appropriate expiration times based on your security requirements

## Testing

Run the test script to see JWT generation and expiration in action:

```
node test.js
```

This will create a token with a 30-second expiry and demonstrate verification before and after expiration.
