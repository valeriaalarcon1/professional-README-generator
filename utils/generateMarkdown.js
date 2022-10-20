// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license === "") {
//     console.log("License badge error");
//   } else {
//     const badgeURL = `![License Badge](https://img.shiels.io/badge/License-${license}-green)`
//     return badgeURL;
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//     const licenseURL = `[${license}](https://opensource.org/licenses/${license})`;
//     return licenseURL;
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license === "" && license === "None") {
//     return `## Licenses
    
//     No licenses found.`;
//   } else {
//     return `## Licenses
//     ${renderLicenseLink(license)}  ${renderLicenseBadge(license)}`
//   };
// };


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  You can visit my GitHub portfolio using the username provided and contact me via email using the address below.
  GitHub: ${data.github}
  Email: ${data.email}
`
}

module.exports = generateMarkdown;
