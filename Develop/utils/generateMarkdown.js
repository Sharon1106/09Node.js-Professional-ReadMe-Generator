// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description
    ${data.description}
  
  # Table of Contents

  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contribution] (#contribution)
  * [Tests] (#tests)
  * [Questions] (#questions)
  
  # Installation
  Installation instructions: ${data.installation}

  # Usage 
  You can use this apllication for ${data.usage}

  # Tests
  ${data.tests}

  # License 
  ${data.license}

  # How to contribute
  ${data.contribution}

  # Questions 
  Go to ${data.username} or you can contact me directly at ${data.email}
`;
}

module.exports = generateMarkdown;
