// generate readme file 
const generateReadme = projectData => {
  if (!projectData) {
    return '';
  }

  return `
# ${projectData.projectName}
![badge](https://img.shields.io/badge/license-${projectData.license}-brightgreen)

## DESCRIPTION:<a name="description"></a>
${projectData.projectDescription}

## TABLE OF CONTENTS
- [DESCRIPTION](#description)
- [INSTALLATION](#installation)
- [USAGE](#USAGE)
- [LICENSE](#LICENSE)
- [CONTRIBUTING](#CONTRIBUTING)
- [TESTS](#TESTS)
- [QUESTIONS](#QUESTIONS)
- [TECHNOLOGIES](#TECHNOLOGIES)
- [USER STORY](#user_story)
- [ACCEPTANCE CRITERIA](#acceptance_criteria)
- [APPLICATION SCREENSHOT / VIDEO](#application_screenshot)
- [CREDITS](#CREDITS)
- [PROJECT LINK](#link_to_github_repo)

## INSTALLATION INSTRUCTIONS<a name="installation"></a>
* ${projectData.installation}

## TECHNOLOGIES USED
* ${projectData.technologies}

## USAGE
* ${projectData.usage}

## LICENSES
![badge](https://img.shields.io/badge/license-${projectData.license}-brightgreen)
<br />
* This application is covered by the ${projectData.license} license. 

## CONTRIBUTING
* ${projectData.contributing}

## TESTS
* ${projectData.tests}

## QUESTIONS
* For any questions please reach out to ${projectData.questions}

## USER STORY
* ${projectData.userStory}

## ACCEPTANCE CRITERIA
* ${projectData.acceptanceCriteria}

## APPLICATION SCREENSHOT
![alt='Screenshot of Landing Page'](./assets/${projectData.screenshotURL})
   
## CREDITS
* ${projectData.credits}

## LINK TO GITHUB REPO
[README GENERATOR REPO - Click here!]( https://github.com/mcelhatton/${projectData.repoLink})
  `;
};

module.exports = generateReadme;