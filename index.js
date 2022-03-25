//Making sure index.js is being read by display a message
console.log("Reading index.js as Node");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  { name: "Question 1 -", message: "Whats your project title?" },
  { name: "Question 2 -", message: "Whats going in your table of contents?" },
  {
    name: "Question 3 -",
    message:
      "Any installation needed? If yes, please enter the packages. If no please leave empty",
  },
  { name: "Question 4 -", message: "What is the usage of the code?" },
  {
    name: "Question 5 -",
    message:
      "Is there a licenses? If yes, enter it in. If no please leave empty",
  },
  { name: "Question 6 -", message: "Who are the contributing authors?" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  ("use strict");
  var inquirer = require("inquirer");

  //Making sure function init is being read
  console.log("Currently in init");

  inquirer.prompt(questions).then((answers) => {
    console.log("Answer: ", JSON.stringify(answers));
  });

  //Will begin to ask questions to the user
}

// Function call to initialize app
init();
