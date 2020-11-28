// function to generate markdown for README
function generateMarkdown(data) {
  return `
   ## ${data.username}
   # ${data.email}
   # ${data.projectsName}
   # ${data.description}
   ## ${data.commandDependencies}
   # ${data.commandTest}
   ## ${data.RepoKnowledge}
   # ${data.contribution}
`;
}

module.exports = generateMarkdown;
