const mongoose = require("mongoose");
const Employee = require("../models/Employee");
const QA = require("../models/QA");
const Supervisor = require("../models/Supervisor")

mongoose.connect("mongodb://localhost:27017/FiMi-APP", {
  useNewUrlParser: true, useUnifiedTopology: true
})

.then(() => {
  console.log('MONGO CONNECTION OPEN!');
})
.catch((err) => {
  console.log(err)
});


const seedSup = [
  {
    first_name: "Richard",
    last_name: "Cats",
  },
  {
    first_name: "Selena",
    last_name: "Perez",
  },
  {
    first_name: "Jojo",
    last_name: "Valencia",
  },
];



const seedQA = [
  {
    first_name: "Paul",
    last_name: "Holes",
    language: "Eng",
    site: "San Antonio",
    email: "migas123@mail.com"
  },
  {
    first_name: "Karen",
    last_name: "Kilgariff",
    language: "Spn",
    site: "Tyler",
    email: "enchilada123@mail.com"
  },
  {
    first_name: "Georgia",
    last_name: "Hardstark",
    language: "Spn",
    site: "McAllen",
    email: "laflor2345@mail.com"
  },
];


const seedEmp = [
  {
    first_name: "Ricky",
    last_name: "Ricardo",
    employee_number: 1111,
    site: "San Antonio",
    role: "CSR",
    language: "Spn",
    group: "A",
    supervisor: 1,
    qa: "Paul Holes",
  },
  {
    first_name: "Chammy",
    last_name: "Stone",
    employee_number: 2222,
    site: "San Antonio",
    role: "CSR",
    language: "Eng",
    group: "A",
    supervisor: "Richard Cats",
    qa: "Paul Holes",
  },
  {
    first_name: "Perla",
    last_name: "Garcia",
    employee_number: 3333,
    site: "San Antonio",
    role: "CSR",
    language: "Eng",
    group: "A",
    supervisor: "Richard Cats",
    qa: "Paul Holes",
  },
  {
    first_name: "Carla",
    last_name: "Po",
    employee_number: 4444,
    site: "Tyler",
    role: "CSR",
    language: "Eng",
    group: "B",
    supervisor: "Selena Perez",
    qa: "Karen Kilgariff",
  },
  {
    first_name: "Steve",
    last_name: "Madrigal",
    employee_number: 5555,
    site: "Tyler",
    role: "CSR",
    language: "Spn",
    group: "B",
    supervisor: "Selena Perez",
    qa: "Karen Kilgariff",
  },
  {
    first_name: "Tim",
    last_name: "Santiago",
    employee_number: 6647,
    site: "Tyler",
    role: "CSR",
    language: "Spn",
    group: "B",
    supervisor: "Selena Perez",
    qa: "Karen Kilgariff",
  },
  {
    first_name: "Catalina",
    last_name: "Casper",
    employee_number: 7777,
    site: "McAllen",
    role: "CSR",
    language: "Eng",
    group: "B",
    supervisor: "Jojo Valencia",
    qa: "Georgia Hardstark",
  },
  {
    first_name: "Mike",
    last_name: "Zoom",
    employee_number: 8888,
    site: "McAllen",
    role: "CSR",
    language: "Eng",
    group: "B",
    supervisor: "Jojo Valencia",
    qa: "Georgia Hardstark",
  },
  {
    first_name: "Falcon",
    last_name: "Fernandez",
    employee_number: 9999,
    site: "McAllen",
    role: "CSR",
    language: "Eng",
    group: "B",
    supervisor: "Jojo Valencia",
    qa: "Georgia Hardstark",
  },
];


const seedDB = async () => {
  await Supervisor.deleteMany({});
  await Supervisor.insertMany(seedSup);
  await QA.deleteMany({});
  await QA.insertMany(seedQA);
  await Employee.deleteMany({});
  await Employee.insertMany(seedEmp)
};

seedDB().then(() => {
  mongoose.connection.close();
})




// const faker = require("faker");

// const db = require("../config/connection");
// const { Employee, QA, QASup, Supervisor } = require("../models");


// db.once('open', async () => {
//   await Employee.deleteMany({});
//   await QA.deleteMany({});
//   await QASup.deleteMany({});
//   await Supervisor.deleteMany({});

//     // create employee data
//   const employeeData = [];

// for (let i = 0; i < 50; i += 1) {
//     const first_name = faker.internet.first_name();
//     const last_name = faker.internet.last_name();
//     const employee_number = faker.internet.employee_number();
//     const site = faker.internet.site();
//     const role = faker.internet.role();
//     const language = faker.internet.language();
//     const group = faker.internet.group();
//     employeeData.push({ first_name, last_name, employee_number, site, role, language, group });
//   }

//   const createdEmployees = await Employee.collection.insertMany(employeeData);


//   //create supervisor

//   let supData = [];

//   for (let i = 0; i < 50; i += 1) {
//     const first_name = faker.internet.first_name();
//     const last_name = faker.internet.last_name();
//     supData.push({ first_name, last_name });

//   }
 


  

// }