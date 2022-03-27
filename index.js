const inquirer = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");
const UI = require("inquirer/lib/ui/baseui");
const generateMarkdown = require("./utils/generateMarkdown");

//Making sure index.js is being read by display a message
console.log("Reading index.js as Node");

// TODO: Include packages needed for this application
const packagesNeeded = [];

// TODO: Create an array of questions for user input
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
    message: "Enter any extra info enter in here about your repo:",
  },
  { type: "input", name: "inputContributor", message: "Contributors: " },
];

// TODO: Create a function to write README file
// fileName
function writeToFile(data) {
  //Passes the data enter into generateMarkdown and will return a README
  data = generateMarkdown(data);

  try {
    fs.writeFileSync("./Read.md", data);
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

    // console.log(data);
    // console.log(data.inputTitle);

    //Calls writeToFile
    writeToFile(data);
  });
}

// Function call to initialize app
init();
