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
                name: 'installation-instructions',
            },
            // usage information
            {
                type: 'input',
                message: 'What is your Usage Information',
                name: 'usage-information',
            },
            //contribution guidelines
            {
                type: 'input',
                message: 'What are your Contribution Guidelines?',
                name: 'contribution-guidelines',
            },
            // test instructions
            {
                type: 'input',
                message: 'What are your test Instructions?',
                name: 'test-instructions',
            },
            // license options -- adds badge
            {
                type: 'list',
                message: 'Choose a license.',
                name: 'license',
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
}

// Function call to initialize app
init();
