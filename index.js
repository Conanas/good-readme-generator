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
                name: "contributed"
            },
            {
                type: "input",
                message: "Enter test parameters",
                name: "test"
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

    `
        WHEN I click on the links in the Table of Contents
        THEN I am taken to the corresponding section of the README
        `

}

function createReadme(answers) {
    return `
# Title

<a name="description"/>

## Description 

## Table of Contents

[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

<a name="installation"/>

## Installation

<a name="usage"/>

## Usage 

<a name="license"/>

## License 

<a name="contributing"/>

## Contributing 

<a name="tests"/>

## Tests 

<a name="questions"/>

## Questions 

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