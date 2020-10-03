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
                message: "Enter project installation instructions",
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
    let {
        title,
        description,
        installation,
        usage,
        license,
        contributing,
        tests,
        github,
        email
    } = answers;

    return `
# ${title}

![GitHub](https://img.shields.io/badge/license-${license.replace(" ", "%20")}-green)

## Table of Contents

[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

<a name="description"></a>

## Description 

${description}

<a name="installation"></a>

## Installation

${installation}

<a name="usage"></a>

## Usage 

${usage}

<a name="license"></a>

## License 

${license}

<a name="contributing"></a>

## Contributing 

${contributing}

<a name="tests"></a>

## Tests 

${tests}

<a name="questions"></a>

## Questions 

Here is my GitHub portfolio page: <https://github.com/${github}>
Any Questions then please email me at: <${email}>
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