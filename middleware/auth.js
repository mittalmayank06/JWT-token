const jwt = require('jsonwebtoken');
const customAPIError = require('../errors/custom-error');

const authenticationMiddleware = async (req, res,next) =>{
    console.log(req.headers.authorization);
    next()
}

module.exports = authenticationMiddleware;

/*This error-middleware is not implemented for now due to confusion */