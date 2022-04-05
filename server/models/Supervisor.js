const { Schema, model } = require("mongoose");

const SupervisorSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
});

// create the Supervisor model using the Schema
const Supervisor  = model('Supervisor', SupervisorSchema);

// export the Supervisor model
module.exports = Supervisor;
