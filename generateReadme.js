// generate readme file 
const generateReadme = projectData => {
  if (!projectData) {
    return '';
  }

  return `
    # ${projectData.projectName}

    ## Description
    ${projectData.description}

    ## Technologies Used
    ${projectData.technologies}

    ## Usage
    ${projectData.usage}
  `;
};

module.exports = generateReadme;