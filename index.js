// Exporting the function / Exporting the package
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../Develop/utils/generateMarkdown");

// array of questions for user
// const questions =
inquirer
  .prompt([
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
      type: "rawlist",
      message: "Please Write A Short Description Of Your Project.",
      name: "description",
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
  ])

  .then((fileName, data) => {
   // const README = `${fileName, data.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile("README.md", JSON.stringify(fileName, data), (err) =>
      err ? console.log(err) : console.log("RADME.md Created!")
    );
    generateMarkdown(data);
  });



  
// function to write README file
// const writeToFile = (fileName, data) => {
//   fs.writeFile("README.md", JSON.stringify(fileName, data,), (err) =>
//     err ? console.log(err) : console.log("RADME.md Created")
//   );
// }
// function to initialize program
// function init() {

//   generateMarkdown(data)
// }
// // function call to initialize program
// init();
