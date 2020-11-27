// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectsName}
  ### ${data.username}
   ## ${data.email}
   New Repo 
`;
}

module.exports = generateMarkdown;
