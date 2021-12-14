const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeeSurvey = [
  {
    type: "rawlist",
    name: "role",
    message: "What type of Employee would you like to add if any?",
    choices: ["Intern", "Engineer", "Manager"],
  },
  {
    type: "input",
    name: "name",
    message: "What is the name of the employee?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email?",
  },
  {
    type: "input",
    name: "office",
    message: "What is the manager's office number?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's Github username?",
  },
  {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
  },
  {
    type: "confirm",
    name: "another",
    message: "Would you like to add another employee?",
  },
];
