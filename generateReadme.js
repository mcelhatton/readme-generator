// generate readme file 
const generateReadme = projectData => {
  if (!projectData) {
    return '';
  }

  return `
    # ${projectData.projectName}

    ## DESCRIPTION:
    ${projectData.description}

    ## TABLE OF CONTENTS
    - [DESCRIPTION]
    - [INSTALLATION]
    - [USAGE]
    - [LICENSE]
    - [CONTRIBUTING]
    - [TESTS]
    - [QUESTIONS]
    - [TECHNOLOGIES]
    - [USER STORY]
    - [ACCEPTANCE CRITERIA]
    - [APPLICATION SCREENSHOT / VIDEO]
    - [CREDITS]
    - [PROJECT LINK]

    ## INSTALLATION INSTRUCTIONS
    ${projectData.installation}

    ## TECHNOLOGIES USED
    ${projectData.technologies}

    ## USAGE
    ${projectData.usage}

    ## LICENSES
    ${projectData.license}

    ## CONTRIBUTING
    ${projectData.contributing}

    ## TESTS
    ${projectData.tests}

    ## QUESTIONS
    For any questions please reach out to ${projectData.questions}

    ## USER STORY
    ${projectData.userStory}

    ## ACCEPTANCE CRITERIA
    ${projectData.acceptanceCriteria}

    ## APPLICATION SCREENSHOT
    ![alt='Screenshot of Landing Page'](./assets/${projectData.screenshotURL})
   

    ## CREDITS
    ${projectData.credits}

    ## LINK TO GITHUB REPOSITORY
    [README GENERATOR REPO - Click here!]( https://mcelhatton.github.io/${projectData.repoLink})
  
  `;
};

module.exports = generateReadme;