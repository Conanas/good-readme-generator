const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        name: "name"
    }]);
}