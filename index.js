const inquirer = require("inquirer");
const fs = require("fs");


// array of questions for user
const questions = inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub UserName?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your Email Address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your Your Project`s Name?",
        name: "projectsName",
      },
      {
        type: "input",
        message: "Please Write A Short Description Of Your Project.",
        name: "description",
      },



]);






// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
