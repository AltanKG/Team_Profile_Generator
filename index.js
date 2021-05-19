// Declare modules
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
var jsdom = require("jsdom");
$ = require("jquery")(new jsdom.JSDOM().window);

// Declare variables
var engineers = [];
var interns = [];
var managerInfo = [];

// Ask prompts and store user input
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter team manager's name: ",
      name: "managerName",
    },
    {
      type: "input",
      message: "Enter team manager's employee ID: ",
      name: "managerID",
    },
    {
      type: "input",
      message: "Enter team manager's email: ",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "Enter team manager's office number: ",
      name: "managerNum",
    },
    {
      type: "list",
      choices: ["Engineer", "Intern", "Finish Building Team\n"],
      message: "Select to add a team member:",
      name: "memberType",
    },
    {
      type: "input",
      message: "Enter the engineer's name: ",
      name: "engineerName",
      when: (answers) => answers.memberType === "Engineer",
    },
    {
      type: "input",
      message: "Enter the engineer's ID: ",
      name: "engineerID",
      when: (answers) => answers.memberType === "Engineer",
    },
    {
      type: "input",
      message: "Enter the engineer's email: ",
      name: "engineerEmail",
      when: (answers) => answers.memberType === "Engineer",
    },
    {
      type: "input",
      message: "Enter the engineer's Github: ",
      name: "engineerGithub",
      when: (answers) => answers.memberType === "Engineer",
    },
    {
      type: "input",
      message: "Enter the intern's name: ",
      name: "internName",
      when: (answers) => answers.memberType === "Intern",
    },
    {
      type: "input",
      message: "Enter the intern's ID: ",
      name: "internID",
      when: (answers) => answers.memberType === "Intern",
    },
    {
      type: "input",
      message: "Enter the intern's email: ",
      name: "internEmail",
      when: (answers) => answers.memberType === "Intern",
    },
    {
      type: "input",
      message: "Enter the intern's school: ",
      name: "internSchool",
      when: (answers) => answers.memberType === "Intern",
    },
  ])
  .then((response) => {
    // If more team members are wanted then enter loop and start Recursion function to ask same questions
    if (
      response.memberType === "Engineer" ||
      response.memberType === "Intern"
    ) {
      // Recursion functiom
      const getTeamInfo = () => {
        inquirer
          .prompt([
            {
              type: "list",
              choices: ["Engineer", "Intern", "Finish Building Team\n"],
              message: "Select to add a team member:",
              name: "memberType",
            },
            {
              type: "input",
              message: "Enter the engineer's name: ",
              name: "engineerName",
              when: (answers) => answers.memberType === "Engineer",
            },
            {
              type: "input",
              message: "Enter the engineer's ID: ",
              name: "engineerID",
              when: (answers) => answers.memberType === "Engineer",
            },
            {
              type: "input",
              message: "Enter the engineer's email: ",
              name: "engineerEmail",
              when: (answers) => answers.memberType === "Engineer",
            },
            {
              type: "input",
              message: "Enter the engineer's Github: ",
              name: "engineerGithub",
              when: (answers) => answers.memberType === "Engineer",
            },
            {
              type: "input",
              message: "Enter the intern's name: ",
              name: "internName",
              when: (answers) => answers.memberType === "Intern",
            },
            {
              type: "input",
              message: "Enter the intern's ID: ",
              name: "internID",
              when: (answers) => answers.memberType === "Intern",
            },
            {
              type: "input",
              message: "Enter the intern's email: ",
              name: "internEmail",
              when: (answers) => answers.memberType === "Intern",
            },
            {
              type: "input",
              message: "Enter the intern's school: ",
              name: "internSchool",
              when: (answers) => answers.memberType === "Intern",
            },
          ])
          .then((response) => {
            if (
              response.memberType === "Engineer" ||
              response.memberType === "Intern"
            ) {
              getTeamInfo();
            }

            fs.writeFile("./dist/index.html", makeHTML(response), (error) => {
              error
                ? console.log(error)
                : console.log(
                    "You have successfully entered your team information!"
                  );
            });

            if (response.memberType === "Engineer") {
              const engineer = new Engineer(
                response.engineerName,
                response.engineerID,
                response.engineerEmail,
                response.engineerGithub
              );

              engineers.push(engineer);
            }
            if (response.memberType === "Intern") {
              const intern = new Intern(
                response.internName,
                response.internID,
                response.internEmail,
                response.internSchool
              );

              interns.push(intern);
            }
          });
      };

      getTeamInfo();
    }

    // Make a manager object from class
    const manager = new Manager(
      response.managerName,
      response.managerID,
      response.managerEmail,
      response.managerNum
    );
    // Store manager data into array for global use
    managerInfo.push(manager);

    // Write to html file a string function
    fs.writeFile("./dist/index.html", makeHTML(response), (error) => {
      error
        ? console.log(error)
        : console.log("You have successfully entered your team information!");
    });

    // If more team members than gather and store data
    if (response.memberType === "Engineer") {
      const engineer = new Engineer(
        response.engineerName,
        response.engineerID,
        response.engineerEmail,
        response.engineerGithub
      );

      engineers.push(engineer);
    }
    // If more team members than gather and store data
    if (response.memberType === "Intern") {
      const intern = new Intern(
        response.internName,
        response.internID,
        response.internEmail,
        response.internSchool
      );

      interns.push(intern);
    }
  });

// String function that is writ into html file
const makeHTML = (response) => {
  let stringHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>

    <link rel="stylesheet" href="style.css">

</head>
<body>
    <header>My Team</header>
    
    <main id = "container">
    ${makeManagerCard()}
    ${makeEngineerCards()}
    ${makeInternCards()}
    </main>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="../index.js"></script>
</body>
</html>
`;
  return stringHTML;
};

// Makes the manager card string
const makeManagerCard = () => {
  var cards = "";

  var card = `
    <section class = "card"><div class="employee">${managerInfo[0].getName()}<div class="title">☕️ ${managerInfo[0].getRole()}</div></div><div class="info"><div class="id">ID: ${managerInfo[0].getId()}</div><div class="email">Email: <a href="mailto: ${managerInfo[0].getEmail()}"> ${managerInfo[0].getEmail()}</a></div><div class="other">Office Number: ${
    managerInfo[0].officeNum
  }</div></div></section>
    `;

  cards = cards.concat(card);

  return cards;
};

// Makes the engineer's cards string
const makeEngineerCards = () => {
  var cards = "";

  for (i = 0; i < engineers.length; i++) {
    var card = `
    <section class = "card"><div class="employee">${engineers[
      i
    ].getName()}<div class="title">👓 ${engineers[
      i
    ].getRole()}</div></div><div class="info"><div class="id">ID: ${engineers[
      i
    ].getId()}</div><div class="email">Email: <a href="mailto: ${engineers[
      i
    ].getEmail()}"> ${engineers[
      i
    ].getEmail()}</a></div><div class="other">Github: <a href="https://github.com/${engineers[
      i
    ].getGithub()}" target="_blank"> ${engineers[
      i
    ].getGithub()}</a></div></div></section>
    `;

    cards = cards.concat(card);
  }

  return cards;
};

// Makes the intern's cards string
const makeInternCards = () => {
  var cards = "";

  for (i = 0; i < interns.length; i++) {
    var card = `
    <section class = "card"><div class="employee">${interns[
      i
    ].getName()}<div class="title">🎓 ${interns[
      i
    ].getRole()}</div></div><div class="info"><div class="id">ID: ${interns[
      i
    ].getId()}</div><div class="email">Email: <a href="mailto: ${interns[
      i
    ].getEmail()}"> ${interns[
      i
    ].getEmail()}</a></div><div class="other">School: ${interns[
      i
    ].getSchool()}</div></div></section>
    `;

    cards = cards.concat(card);
  }

  return cards;
};
