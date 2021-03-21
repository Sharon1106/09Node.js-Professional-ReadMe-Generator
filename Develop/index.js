
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')



console.log('Hello, welcome to your README generator')


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
    type: 'input',
    message: 'What tools did you use for this project?',
    name: 'tools',

  },
  {
    type: 'list',
    message: 'What kind of license do you want for your project?',
    name: 'license',
    choices: ['APACHE 2.0','BSD 3', 'ECLIPSE 1.0','GPL V3','IBM 1.0', 'ISC','MIT','N/A'],
  },

  {
    type: 'input',
    message:'What command should be run to install dependencies?',
    name: 'installation',
  },

  {
    type: 'input',
    message:'What command should be run to run tests?',
    name: 'tests',
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




function writeToFile(fileName, data) {

  fs.writeFile("./test/" + fileName, data,

  function(err){
    if (err) {
      return console.log(err);
      //else
    } else {
      console.log("Succesfully created: " + fileName);
    }
  })
}


function init() {

  inquirer.prompt(questions)
  .then(function(data) {
   
    writeToFile("yourREADME.md", generateMarkdown(data));
  })
}

init();
