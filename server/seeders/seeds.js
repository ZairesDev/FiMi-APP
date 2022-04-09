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
  const qas = await QA.insertMany(qaData);
  const employees = await Employee.insertMany(employeeData);



  for (newEmp of employees) {
    // randomly adds a sup to each employee
    const tempSup = supervisors[Math.floor(Math.random() * supervisors.length)];
    newEmp.supervisor = tempSup._id;
    await newEmp.save();

    //randomly adds a qa to an employee
    const tempQA = qas[Math.floor(Math.random() * qas.length)];
    newEmp.qa = tempQA._id;
    await newEmp.save();

    // radomly adds a qasup to a qa
    const tempQASup = qasups[Math.floor(Math.random() * qasups.length)];
    tempQA.qasup = tempQASup._id;
    await tempQA.save();

    // //reference qa on qasup model
    // tempQASup.qas.push(tempQA._id);
    // await tempQASup.save();

    // //reference emp on qa model
    // tempQA.employees.push(newEmp._id);
    // await tempQA.save();

  
  }


  console.log("all done!");
  process.exit(0);  
  
});



