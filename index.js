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
    type: "list",
    message: "Please Write A Short Description Of Your Project.",
    choices: ["MIT", "APACHE", "GPL 3.0", "BSD 3", "OTHER", "NONE"],
  },
  {
    type: "input",
    message: "What Command Should Be Run To Install Dependencies?",
    name: "commandDependencies",
  },
  {
    type: "input",
    message: "What Command Should Be Run To Test?",
    name: "commandTest",
  },
  {
    type: "input",
    message: "What Does The User Need To Know About Using This Repo?",
    name: "RepoKnowledge",
  },
  {
    type: "input",
    message:
      "What Does The User Need To Know About Using Contributing To This Repo?",
    name: "contribution",
  },
]);

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", fileName, data, (err) =>
      err ? console.log(err) : console.log("Success")
}

// function to initialize program
function init() {}

// function call to initialize program
init();
