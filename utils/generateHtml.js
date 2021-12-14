const generateHtml = (employeeData) => {
  const generateManager = (manager) => {
    return `<div class="card" style="width: 18rem;">
     <div class="card-header">
       ${manager.getRole()}
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">${manager.getName()}</li>
       <li class="list-group-item">${manager.getId()}</li>
       <li class="list-group-item">${manager.getEmail()}</li>
       <li class="list-group-item">${manager.getOfficeNumber()}</li>
     </ul>
   </div>`;
  };
  const generateEngineer = (engineer) => {
    return `<div class="card" style="width: 18rem;">
     <div class="card-header">
       ${engineer.getRole()}
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">${engineer.getName()}</li>
       <li class="list-group-item">${engineer.getId()}</li>
       <li class="list-group-item">${engineer.getEmail()}</li>
       <li class="list-group-item">${engineer.getGithub()}</li>
     </ul>
   </div>`;
  };
  const generateEngineer = (intern) => {
    return `<div class="card" style="width: 18rem;">
     <div class="card-header">
       ${intern.getRole()}
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">${intern.getName()}</li>
       <li class="list-group-item">${intern.getId()}</li>
       <li class="list-group-item">${intern.getEmail()}</li>
       <li class="list-group-item">${intern.getSchool()}</li>
     </ul>
   </div>`;
  };

  const anotherArray = [];
  anotherArray.push(
    employeeData
      .filter((manager) => manager.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  anotherArray.push(
    employeeData
      .filter((engineer) => engineer.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  anotherArray.push(
    employeeData
      .filter((intern) => intern.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
};
`    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="row team-container">
      </div>
    </div>
  </body>
</html>`;
