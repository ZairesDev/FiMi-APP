const { Supervisor, Employee } = require('../models')

const resolvers = {
  Query: {
    supervisors: async () => {
      return Supervisor.find();
    },

    employees: async () => {
      return Employee.find();
    },
  },

  Mutation: {
    createSupervisor: async (parent, args) => {
      const newSup = await Supervisor.create(args);

      return newSup;
    },

    addEmployee: async (parent, args) => {
      const newEmp = await Employee.create(args);

      return newEmp;
    },
  },
};

module.exports = resolvers;


