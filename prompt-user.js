const inquirer = require("inquirer");

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

module.exports = promptUser;