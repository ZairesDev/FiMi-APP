const jwt = require('jsonwebtoken');

// this will enable the server to verify whether it recognizes a given  token
const secret = 'mycatisbetterthanyourdogsshhhhh';
// the token will expire within 1 hour. Given that this app is ideally made for a companies Quality Assurance Dept., I figured less time would be ideal for security reasons.
const expiration = '1h';

module.exports = {
  // expects a user object and will add the users username, email, and _id properties to the token.
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
