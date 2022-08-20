const jwt = require('jsonwebtoken');

// this will enable the server to verify whether it recognizes a given  token
//TODO: place secret into .env file
const secret = 'mycatisbetterthanyourdogsshhhhh';
// the token will expire within 1 hour. Given that this app is ideally made for a companies Quality Assurance Dept., I figured less time would be ideal for security reasons.
const expiration = '1h';

module.exports = {
  authMiddleware: function ({ req }) {
    // token can now be sent by either: req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      // will separate the 'Bearer' from '<tokenvalue>'
      token = token.split(' ').pop().trim();
    }

    try {
      // destructed data object will have a decoded jwt interaction and attach the qasup data to a req object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.qaSup = data;
    } catch {
      console.log('Invalid token');
    }

    // returns the new and updated req {}
    return req;
  },

  // expects a user object and will add the users email, _id properties to the token.
  signToken: function ({ email, _id }) {
    const payload = { email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
