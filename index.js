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
                message: "Who contributed to this project?",
                name: "contributing"
            },
            {
                type: "input",
                message: "Enter test parameters",
                name: "tests"
            },
            {
                type: "list",
                message: "Choose a license",
                choices: [
                    "License 1",
                    "license 2"
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

${answers.github}
${answers.email}
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