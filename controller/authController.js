'use static'

const jwt = require('jsonwebtoken');

class AuthController {
    static async verifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];

        if (bearerHeader) {
            const token = bearerHeader.split(' ')[1];
            let isVerified = null;
            try {
                isVerified = await jwt.verify(token, 'secretKey');
                console.log('%%%%%%%%% ', isVerified);

            } catch (err) {
                res.json({ message: 'Error in jwt.verify' });
            }

            if (isVerified) {
                req.user = { email: isVerified.email };
                next();
            } else {
                res.status(403).json({ message: 'You are not authorized' });
            }
        } else {
            res.status(403).json({ message: 'You are not authorized' });
        }
    }
}

module.exports = AuthController;