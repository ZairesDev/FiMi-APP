const { Supervisor, Employee, QASup, QA } = require('../models')
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {

    //login query//for login screen
    me: async (parent, args, context) => {
      if (context.QASup) {
        const QASupData = await QASup.findOne({
          _id: context.QASup._id,
        }).select("-__v -password");

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
      return QASup.findOne({ email }).select("-__v -password").populate("qaStaff");
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
      return QA.find().populate("QASup").populate("employees")
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
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;


