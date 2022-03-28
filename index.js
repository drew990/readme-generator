// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//Making sure index.js is being read by display a message
console.log("Reading index.js as Node");

// An array of questions for user input
const questions = [
  {
    type: "input",
    name: "inputGitHubUsername",
    message: "Enter in your GitHub username:",
  },
  {
    type: "input",
    name: "inputEmail",
    message: "Enter in your email address:",
  },
  {
    type: "input",
    name: "inputTitle",
    message: "Enter in your project title:",
  },
  {
    type: "input",
    name: "inputDescription",
    message: "Enter in a short description of the project:",
  },
  {
    type: "list",
    name: "licenses",
    message: "What kind of licenses should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "inputInstallation",
    message: "What command should be run to install dependencies:",
    validate(input) {
      if (input.length === 0) {
        return "An input is needed";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "inputTest",
    message: "Command needed to run tests:",
  },
  {
    type: "input",
    name: "inputRepo",
    message: "What do users need to know about your repo?",
  },
  {
    type: "input",
    name: "inputCon",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// TODO: Create a function to write README file
// fileName
function writeToFile(data) {
  //Passes the data enter into generateMarkdown and will return a README
  data = generateMarkdown(data);

  try {
    fs.writeFileSync("./README.md", data);
    console.log("Wrote in the file successfully");
  } catch (err) {
    console.error(err);
  }
}

// TODO: Create a function to initialize app
function init() {
  //Making sure function init is being read
  console.log("Currently in init");

  inquirer.prompt(questions).then((answers) => {
    var data = JSON.stringify(answers);
    data = JSON.parse(data);

    //Calls writeToFile and will generate a README
    writeToFile(data);
  });
}

// Function call to initialize app
init();
