// Exporting the function / Exporting the package
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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

  //function to initialize program/unction call to initialize program
  .then((data) => {
    console.log(data);
    let generateMarkdownResponse = generateMarkdown(data);
    writeToFile("README.md", generateMarkdownResponse);
    console.log(generateMarkdownResponse);
  });
//Creation of README.md
let writeToFile = (fileName, data) => {
  console.log(data);
  fs.writeFile(fileName, data, () => {
    console.log("File saved");
    console.log(data);
  });
};
