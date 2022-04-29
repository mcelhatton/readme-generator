const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./generateReadme');

const readmePrompt = projectData => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter project name (Required)',
      validate: projectName => {
        if (projectName) {
          return true;
        } else {
          console.log('Please enter a project name:');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Enter project description (Required)',
      validate: projectDescription => {
        if (projectDescription) {
          return true;
        } else {
          console.log('Please enter a project description:');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How will users use this application?'
    },
    {
      type: 'list-input',
      name: 'license',
      message: 'Please select a license:',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter instructions for contributing:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter any test instructions for application:'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Enter contact information for questions:'
    },
    {
      type: 'checkbox',
      name: 'technologies',
      message: 'What technologies were used? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'userStory',
      message: 'Enter user story(stories)'
    },
    {
      type: 'input',
      name: 'acceptanceCriteria',
      message: 'Enter acceptance criteria'
    },
    {
      type: 'input',
      name: 'screenshotURL',
      message: 'Enter screenshot URL (Example: ./assets/profile.png)'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Enter any credits for this project'
    },
    {
      type: 'input',
      name: 'repoLink',
      message: 'Enter github repo URL',
      validate: repoLink => {
        if (repoLink) {
          return true;
        } else {
          console.log('Please enter the projects github repo link');
          return false;
        }
      }
    }
  ]);
};

readmePrompt()
  .then(projectData => {
    const readmeMarkup = generateReadme(projectData);

    fs.writeFile('./README.md', readmeMarkup, err => {
      if (err) throw new Error(err);
    });
  });