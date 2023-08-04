// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return ``;
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This project is licensed by MIT. Please follow this link for information on the license (https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla") {
    return `This project is licensed by Mozilla. Please follow this link for information on the license (https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "Apache") {
    return `This project is licensed by Apache. Please follow this link for information on the license (https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} by ${data.name}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Rules](#contribution-rules)
  * [Test](#tests)
  * [License](#license)
  * [Contact Me](#contact-me)

  ## Description
  ${data.description}


  ## Installation
  ${data.installation}

  
  ## Usage
  ${data.usage}


  ## Contribution Rules
  ${data.contribution}


  ## Tests
  ${data.test}


  ## License
  ${renderLicenseSection(data.license)}

  
  ## Contact Me
  ${data.contact}
`;
}

module.exports = generateMarkdown;
