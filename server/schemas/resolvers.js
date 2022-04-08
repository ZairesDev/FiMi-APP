const { QASup } = require('../models');
const { signToken } = require('../utils/auth');
//* variable name of 'supervisor' may change depending on model information
const resolvers = {
  Query: {
    me: async (parent, args) => {
      if (context.qaSup) {
        const qaSupData = await QASup.findOne({}).select('-__v -password').populate('qaStaff');

        return qaSupData;
      }
    },
  },

  Mutation: {
    addQaSup: async (parent, args) => {
      const qaSup = await QASup.create(args);
      const token = signToken(qaSup);

      return { token, qaSup };
    },
    login: async (parent, { email, password }) => {
      const qaSup = await QASup.findOne({ email });

      if (!qaSup) {
        throw new AuthenticationError('Invalid credentials');
      }

      const correctPw = await qaSup.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Invalid credentials');
      }

      const token = signToken(qaSup);
      return { token, qaSup };
    },
  },
};

module.exports = resolvers;
