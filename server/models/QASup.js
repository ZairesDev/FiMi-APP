const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const QASupSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  qaStaff: [
      {
          type: Schema.Types.ObjectId,
          ref: "QA"
      },
  ],
},
{
  toJSON: {
    virtuals: true
  }
}

);

// set up pre-save middleware to create password
QASupSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
QASupSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

QASupSchema.virtual("QAStaffCount").get(function () {
  return this.qaStaff.length;
});

// create the QASupervisor model using the Schema
const QASup = model("QASup", QASupSchema);

// export the QASupervisor model
module.exports = QASup;
