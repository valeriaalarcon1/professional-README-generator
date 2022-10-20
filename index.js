const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

inquirer
    .prompt([
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
            choices: [
                "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                "APACHE 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                "Boost [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
                "bsl-1.0 [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" ,
                "Perl [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
                "artistic-2.0 [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
                "None"],
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


.then((data) => {
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('You have successfully created your project README!'))
});





// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, generateMarkdown(data), (err) =>
//     err ? console.err(err) : console.log('Your README has been generated successfully!'))
// };

// function init
// writeToFile('README.md', data);






