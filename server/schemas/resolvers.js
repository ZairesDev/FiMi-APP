const { Supervisor, Employee } = require('../models')

const resolvers = {
  Query: {
    supervisors: async () => {
      return Supervisor.find();
    },

    employees: async () => {
      return Employee.find().populate("supervisor")
      
    },
  },

  Mutation: {
    createSupervisor: async (parent, args) => {
      const newSup = await Supervisor.create(args);

      return newSup;
    },

    addEmployee: async (parent, args) => {
      const newEmp = await Employee.create(args)

      const getNewEmp = await Employee.findById(newEmp._id).populate("supervisor")
       

      return getNewEmp;
    },
  },
};

module.exports = resolvers;


