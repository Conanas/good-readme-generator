// required installs for project
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

// promisified asynchronous write file declaration
const writeFileAsync = util.promisify(fs.writeFile);

// prompts the user for inputs to be transferred into the readme
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
                message: "Enter your email address",
                name: "email"
            }
        ]);
}

// creates the readme using the answers from the promptUser function
function createReadme(answers) {
    // de-structure answers object into variables
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

    // the template literal string with inserted variables to be returned to be written to the readme.md file
    return `
# ${title}

![GitHub](https://img.shields.io/badge/license-${license.replace(/ /g, "%20")}-green)

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

// initialise function
// calls the promptUser function and waits for the user to complete the inputs
// calls the createReadme function with the answers from the promptUser to generate the readme
// writes the returned string from createReadme function to README.md
async function init() {
    try {
        const answers = await promptUser();

        const readme = createReadme(answers);

        await writeFileAsync("README.md", readme);

        console.log("Successfully generated Good-Readme!");
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

// calls the initial function
init();