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
  const qas = await QA.insertMany(qaData);
  const qasups = await QASup.insertMany(qaSupData);
  const employees = await Employee.insertMany(employeeData);
  const tempQASup = qasups[Math.floor(Math.random() * qasups.length)];
  const tempQA = qas[Math.floor(Math.random() * qas.length)];
  const tempSup = supervisors[Math.floor(Math.random() * supervisors.length)];

  for (newEmp of employees) {
    // radomly adds a qasup to a qa

    tempQA.qasup = tempQASup._id;
    await tempQA.save();

    //randomly adds a qa to an employee

    newEmp.qa = tempQA._id;
    await newEmp.save();

    // randomly adds a sup to each employee

    newEmp.supervisor = tempSup._id;
    await newEmp.save();

    // //reference qa on qasup model
    // tempQASup.qas.push(tempQA._id);
    // await tempQASup.save();

    // //reference emp on qa model
    // tempQA.employees.push(newEmp._id);
    // await tempQA.save();
  }
  


  console.log("seeds done!");
  process.exit(0);  
  
});



