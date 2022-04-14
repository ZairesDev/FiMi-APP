<<<<<<< HEAD
const { QASup } = require('../models');
const { signToken } = require('../utils/auth');
//* variable name of 'supervisor' may change depending on model information
const resolvers = {
  Query: {
    me: async (parent, args) => {
      if (context.QASup) {
        const qaSupData = await QASup.findOne({ _id: context.QASup })
          .select('-__v -password')
          .populate('qaStaff');

        return qaSupData;
      }

      throw new AuthenticationError('You are not logged in. Please log in.');
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
=======
const { AuthenticationError } = require("apollo-server-express");
const { Supervisor, Employee, QASup, QA } = require("../models");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    //login query//for login screen
    me: async (parent, args, context) => {
      if (context.QASup) {
        const QASupData = await QASup.findOne({
          _id: context.QASup._id,
        })
          .select("-__v -password")
          .populate("qaStaff");

        return QASupData;
      }

      throw new AuthenticationError("Not logged in");
    },

    //get all qa sups
    QASups: async () => {
      return QASup.find().select("-__v -password");
    },

    //get a qa sup by email
    QASup: async (parent, { email }) => {
      return QASup.findOne({ email })
        .select("-__v -password")
        .populate("qaStaff");
    },

    //get all CSR employees
    employees: async () => {
      return Employee.find().populate("supervisor").populate("qa");
    },

    // get all CSR supervisors
    supervisors: async () => {
      return Supervisor.find();
    },

    // get all QA staff
    QA: async () => {
      return QA.find().populate("QASup").populate("employees");
    },
  },

  ////////////MUTATIONS///////

  Mutation: {
    //create a CSR sup
    createSupervisor: async (parent, args) => {
      const newSup = await Supervisor.create(args);

      return newSup;
    },

    //create a CSR employee
    addEmployee: async (parent, args) => {
      const newEmp = await Employee.create(args);

      const getNewEmp = await Employee.findById(newEmp._id)
        .populate("supervisor")
        .populate("qa");

      return getNewEmp;
    },

    //create a QA Sup
    addQASupUser: async (parent, args) => {
      const newQASupUser = await QASup.create(args);
      const token = signToken(newQASupUser);

      return { token, newQASupUser };
    },

    // add new QA staff member
    addQA: async (parent, args) => {
      const QANew = await QA.create(args);

      const getQANew = await QA.findById(QANew._id).populate("QASup");

      return getQANew;
    },

    //login mutation
    login: async (parent, { email, password }) => {
      const user = await QASup.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);
      return { token, user };
>>>>>>> develop
    },
  },
};

module.exports = resolvers;
