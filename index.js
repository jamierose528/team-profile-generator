const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employees = [];

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
    when: (answers) => answer.role === "manager",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's Github username?",
    when: (answers) => answer.role === "engineer",
  },
  {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
    when: (answers) => answer.role === "intern",
  },
  {
    type: "confirm",
    name: "another",
    message: "Would you like to add another employee?",
  },
];

inquirer.prompt(questions).then((data) => {
  fs.writeFile("index.html", generateMarkdown(data));
});

function startApplication() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the name of the manager?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's ID?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email?",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        employees.push(manager);
      });
  }

  function createEmployees() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeChoice",
          message: "Would you like to add another employee?",
          choices: ["Intern", "Engineer", "No"],
        },
      ])
      .then((answer) => {
        switch (answer) {
          case "Intern":
            createIntern();
            break;
          case "Engineer":
            createEngineer();
            break;
          case "No":
            finishTeam();
            break;
          default:
            break;
        }
      });
  }
  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the name of the intern?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's ID?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email?",
        },
        {
          type: "input",
          name: "internSchoolName",
          message: "What school does the intern attend?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchoolName
        );
        employees.push(intern);
      });
  }
  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the name of the engineer?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's ID?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
        },
        {
          type: "input",
          name: "githubUsername",
          message: "What is the engineer's github username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerOfficeNumber
        );
        employees.push(engineer);
      });
  }
}
