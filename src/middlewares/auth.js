
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ 
            erro: true,
            message: 'No token provider' 
        });
    }
    const parts = authHeader.split(' ');

    if (!parts.length == 2) {
        return res.status(401).send({ 
            erro: true,
            message: 'Token error!' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ 
            erro: true,
            message: 'Token malFormatted' });
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ 
            erro: true,
            message: 'Token invalid' });

        req.userId = decoded.id;
        console.log(decoded.id)

        return next();
    });

};