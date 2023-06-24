const customAPIError = require('./custom-error');
const BadRequestError = require('./bad-requests');
const unauthenticatedError = require('./unauthenticated');


module.exports = {
    customAPIError,
    BadRequestError,
    unauthenticatedError,
}