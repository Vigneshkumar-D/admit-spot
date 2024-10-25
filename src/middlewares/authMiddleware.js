const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwtConfig');

// Middleware to validate JWT token
const authMiddleware = (req, res, next) => {
    // Check if headers and authorization are present
    if (!req.headers || !req.headers.authorization) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    try {
        // Verify the token using the secret
        const decoded = jwt.verify(token, secret);
        req.user = decoded; // Attach the decoded user info to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token, authorization denied' });
    }
};

module.exports = authMiddleware;

