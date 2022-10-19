// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .createPromptModule([
            // project title
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',

            },
            // description
            {
                type: 'input',
                message: 'Write a description of your project.',
                name: 'description',
            },
            // installation instructions
            {
                type: 'input',
                message: 'What are your Installation Instructions',
                name: 'installation',
            },
            // usage information
            {
                type: 'input',
                message: 'What is your Usage Information',
                name: 'usage',
            },
             // license options -- adds badge
             {
                type: 'list',
                message: 'Choose a license.',
                name: 'license',
            },
            //contribution guidelines
            {
                type: 'input',
                message: 'What are your Contribution Guidelines?',
                name: 'contributing',
            },
            // test instructions
            {
                type: 'input',
                message: 'What are your test Instructions?',
                name: 'tests',
            },
            // github username
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github',
            },
            // email address
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
        ])
];


const data = `# ${title}

##Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

##Description
${description}

##Installation
${installation}

##Usage
${usage}

##License
${license}

##Contributing
${contributing}

##Tests
${tests}

##Questions
You can visit my GitHub portfolio using the username provided and contact me via email using the address below.
GitHub: ${github}
Email: ${email}`



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        err ? console.log(err) : console.log('You have successfully created your project README!')
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md', data)
}

// Function call to initialize app
init();
