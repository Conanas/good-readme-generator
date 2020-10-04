// required modules for file
const promptUser = require("./promptUser");
const createReadme = require("./createReadme");

// required installs for project
const fs = require("fs");
const util = require("util");

// promisified asynchronous write file declaration
const writeFileAsync = util.promisify(fs.writeFile);

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