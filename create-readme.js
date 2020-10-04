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

module.exports = createReadme;