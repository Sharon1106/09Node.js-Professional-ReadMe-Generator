// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

const questions = ([
  { 
    type: 'input',
    message: "What is the authors name?",
    name: 'name',
  },

  {
    type: 'input',
    message:"What is your GitHub username?",
    name: 'username',
  },
  
  {
  type: 'input',
  message:"What is your email address?",
  name: 'email',
  },

  {
  type: 'input',
  message:"What is your project's title?",
  name: 'title',
  },

  {
  type: 'input',
  message:"Please write a brief description of your project:",
  name: 'description',
  },

  {
  type: 'list',
  message: "What kind of license do you want for your project?",
  name: 'license',
  choices: [''],
  },

  {
  type: 'input',
  message:"What command should be run to install dependencies?",
  name: 'installation',
  },

  {
  type: 'input',
  message:"What command should be run to run tests?",
  name: 'test',
  },  

  {
  type: 'input',
  message:"What should the user know about using the repo?",
  name: 'usage',
  },

  {
  type: 'input',
  message:"What does the user need to know about contributing to the repo?",
  name: 'contribution',
  },

]);
console.log(questions)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
