const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const QASchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  language: {
      type: String,
      required: true,
  },
  site: {
      type: String,
      required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  QASup: {
      type: Schema.Types.ObjectId,
      ref: "QASup"
  },
  employees: [
      {
        type: Schema.Types.ObjectId,
        ref: "Employee"
      }
  ],
},

{
  toJSON: {
    virtuals: true
  },
  id: false
},
);
// set up pre-save middleware to create password
QASchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
QASchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

QASchema.virtual("employeeCount").get(function () {
  return this.employees.length;
});
// create the QA model using the Schema
const QA = model("QA", QASchema);

// export the QA model
module.exports = QA;
