const employeeSurvey = [
    {
        type: "rawlist",
        name: "role",
        message: "What type of Employee would you like to add if any?",
        choices: ["Intern", "Engineer", "Manager"],
    },
    {
        type: "input",
        name: "role",
        message: "What is the role of the employee?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    }
]