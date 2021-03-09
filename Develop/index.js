// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

// what message user sees first
console.log('Hello, welcome to your README generator')

//questions array
const questions = [
  { 
    type: 'input',
    message: 'What is the authors name?',
    name: 'author',
  },

  {
    type: 'input',
    message:'What is your GitHub username?',
    name: 'username',
  },
  
  {
    type: 'input',
    message:'What is your email address?',
    name: 'email',
  },

  {
    type: 'input',
    message:'What is your projects title?',
    name: 'title',
  },

  {
    type: 'input',
    message:'Please write a brief description of your project:',
    name: 'description',
  },

  {
    type: 'list',
    message: 'What kind of license do you want for your project?',
    name: 'license',
    choices: ['APACHE 2.0','BSD 3', 'ECLIPSE 1.0','GPL V3','IBM 1.0','MIT','NONE'],
  },

  {
    type: 'input',
    message:'What command should be run to install dependencies?',
    name: 'installation',
  },

  {
    type: 'input',
    message:'What command should be run to run tests?',
    name: 'test',
  },  

  {
    type: 'input',
    message:'What should the user know about using the repo?',
    name: 'usage',
  },

  {
    type: 'input',
    message:'What does the user need to know about contributing to the repo?',
    name: 'contribution',
  },
  
];

//prompts user
inquirer.prompt(questions).then(answers)



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile()
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
