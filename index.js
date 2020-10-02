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
                choices: "License 1",
                name: "license"
            }
        ]);

    `
        WHEN I choose a license for my application from a list of options
        THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
        WHEN I enter my GitHub username
        THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        WHEN I enter my email address
        THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        WHEN I click on the links in the Table of Contents
        THEN I am taken to the corresponding section of the README
        `

}

function createReadme(answers) {
    return `
    # Title

    ## Description

    ## Table of Contents

    ## Installation

    ## Usage

    ## License

    ## Contributing

    ## Tests

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