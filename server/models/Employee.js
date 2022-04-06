const { Schema, model } = require("mongoose");

const EmployeeSchema = new Schema (
{
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    employee_number: {
        type: Number,
        reuired: true,
    },
    site: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    language: {
        type: Stromh,
        required: true,
    },
    group: {
        type: String,
        required: true,
    },
    supervisor: {
        type: Schema.Types.ObjectId,
        ref: "Supervisor",
    },
    qa: {
        type: Schema.Types.ObjectId,
        ref: "QA"
    }

});

// create the Employee model using the Schema
const Employee  = model('Employee', EmployeeSchema);

// export the Employee model
module.exports = Employee;