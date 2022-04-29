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
- [USAGE](#usage)
- [LICENSE](#license)
- [CONTRIBUTING](#contributing)
- [TESTS](#tests)
- [QUESTIONS](#questions)
- [TECHNOLOGIES](#technologies)
- [USER STORY](#userstory)
- [ACCEPTANCE CRITERIA](#acceptance)
- [APPLICATION SCREENSHOT / VIDEO](#screenshot)
- [CREDITS](#credits)
- [PROJECT LINK](#repo)

## INSTALLATION:<a name="installation"></a>
* ${projectData.installation}

## TECHNOLOGIES:<a name="technologies"></a>
* ${projectData.technologies}

## USAGE:<a name="usage"></a>
* ${projectData.usage}

## LICENSE:<a name="license"></a>
![badge](https://img.shields.io/badge/license-${projectData.license}-brightgreen)
<br />
* This application is covered by the ${projectData.license} license. 

## CONTRIBUTING:<a name="contributing"></a>
* ${projectData.contributing}

## TESTS:<a name="tests"></a>
* ${projectData.tests}

## QUESTIONS:<a name="questions"></a>
* For any questions please reach out to ${projectData.questions}

## USERSTORY:<a name="userstory"></a>
* ${projectData.userStory}

## ACCEPTANCE CRITERIA:<a name="acceptance"></a>
* ${projectData.acceptanceCriteria}

## APPLICATION SCREENSHOT:<a name="screenshot"></a>
![alt='Screenshot of Landing Page'](./assets/${projectData.screenshotURL})
   
## CREDITS:<a name="credits"></a>
* ${projectData.credits}

## LINK TO GITHUB REPO:<a name="repo"></a>
[README GENERATOR REPO - Click here!]( https://github.com/mcelhatton/${projectData.repoLink})
  `;
};

module.exports = generateReadme;