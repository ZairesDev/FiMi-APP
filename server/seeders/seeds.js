const db = require("../config/connection");
const { Employee, QA, QASup, Supervisor } = require("../models");

const employeeData = require("./employeeData.json");
const qaData = require("./qaData.json");
const qaSupData = require("./qaSupData.json");
const supervisorData = require("./supervisorData.json");

db.once("open", async () => {
  // this cleans database on start

  await Supervisor.deleteMany({});
  await QASup.deleteMany({});
  await QA.deleteMany({});
  await Employee.deleteMany({});

  //creates each model in bulk
  const supervisors = await Supervisor.insertMany(supervisorData);
  const qasups = await QASup.insertMany(qaSupData);
  const qa = await QA.insertMany(qaData);
  const employees = await Employee.insertMany(employeeData);
  const tempEmp = employees[Math.floor(Math.random() * employees.length)];


  for (newEmp of employees) {
    // randomly adds a sup to each employee
    const tempSup = supervisors[Math.floor(Math.random() * supervisors.length)];
    newEmp.supervisor = tempSup._id;
    await tempEmp.save();

    //randomly adds a qa to an employee
    const tempQA = qa[Math.floor(Math.random() * qa.length)];
    newEmp.qa = tempQA._id;
    await tempEmp.save();
  }



  //randomly add qasup to a qa
  for (newqaSup of qasups) {
  }
});



