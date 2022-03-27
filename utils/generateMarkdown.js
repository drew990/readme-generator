// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "APACHE 2.0") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  } else if (license === "GPL 3.0") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else {
    return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "APACHE 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else {
    return "https://opensource.org/licenses/BSD-3-Clause";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  let licenseLink, licenseBadge;

  if (license === "None") {
    return "";
  } else {
    licenseBadge = renderLicenseBadge(license);
    licenseLink = renderLicenseLink(license);

    return `[![License](${licenseBadge})](${licenseLink})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("gen:", data);
  let badge;

  //Gets licenses data
  badge = renderLicenseSection(data.licenses);

  return `
  # ${data.inputTitle}

  ${badge}

  ## Description
  ${data.inputDescription}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Installation](#installation)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)

  ## Installation
  
  To install necessary dependencies, run the following command:

  ---
  ${data.inputInstallation}
  ---

  ## Usage
  ${data.inputDescription}

  ## License
  This Project is licensed under the ${data.licenses} license.

  ## Tests
  To run Tests, run the following command:
'
  ${data.inputTest}
'

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.inputEmail}. You can find more of my work at [${data.inputGitHubUsername}](https://github.com/${data.inputGitHubUsername}/)

`;
}

module.exports = generateMarkdown;
