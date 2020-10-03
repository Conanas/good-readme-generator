const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer
        .prompt([{
                type: "input",
                message: "What is the project title?",
                name: "title"
            },
            {
                type: "input",
                message: "Enter project description",
                name: "description"
            },
            {
                type: "input",
                message: "Enter project insatallation instructions",
                name: "installation"
            },
            {
                type: "input",
                message: "Enter the usage of the project",
                name: "usage"
            },
            {
                type: "input",
                message: "Enter the contribution guidelines",
                name: "contributing"
            },
            {
                type: "input",
                message: "Enter the test instructions",
                name: "tests"
            },
            {
                type: "list",
                message: "Choose a license",
                choices: [
                    "Apache License 2.0",
                    "GNU General Public License v3.0",
                    "MIT License",
                    "BSD 2-Clause 'Simplified' License",
                    'BSD 3-Clause "New" or "Revised" License',
                    "Boost Software License 1.0",
                    "Creative Commons Zero v1.0 Universal",
                    "Eclipse Public License 2.0",
                    "GNU Affero General Public License v3.0",
                    "GNU General Public License v2.0",
                    "GNU Lesser General Public License v2.1",
                    "Mozilla Public License 2.0",
                    "The Unlicense"
                ],
                name: "license"
            },
            {
                type: "input",
                message: "Enter your GitHub username",
                name: "github"
            },
            {
                type: "input",
                message: "Enter your emai address",
                name: "email"
            }
        ]);
}

function createReadme(answers) {
    return `
# Title

![GitHub](https://img.shields.io/badge/license-${answers.license}-green)

${answers.title}

## Table of Contents

[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

<a name="description"/>

## Description 

${answers.description}

<a name="installation"/>

## Installation

${answers.installation}

<a name="usage"/>

## Usage 

${answers.usage}

<a name="license"/>

## License 

${answers.license}

<a name="contributing"/>

## Contributing 

${answers.contributing}

<a name="tests"/>

## Tests 

${answers.tests}

<a name="questions"/>

## Questions 

Here is my GitHub portfolio page: <https://github.com/${answers.github}>
Any Questions then please email me at: <${answers.email}>
`
}

async function init() {
    try {
        const answers = await promptUser();

        const readme = createReadme(answers);

        await writeFileAsync("README.md", readme);

        console.log("Successfully created Readme");
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

init();