// TODO: Include packages needed for this application

const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your github username?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Can you give a description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What are your installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "Do you have usage information?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are your guidelines for contribution?",
        name: "contribution",
    },
    {
        type: "input",
        message: "Instructions for testing?",
        name: "test",
    },
    {
        type: "list",
        message: "What is your licensing?",
        name: "license",
        choices: [
            "MIT",
            "GNU Gen Pub v3.0",
            "Mozilla",
            "Apache",
            "The Unlicense"
        ],
    },
    {
        type: "input",
        message: "What is the best way to reach you for any questions?",
        name: "contact",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
        }
        console.log("Your readMe file has been created.")
    })
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const responses = await inquirer.prompt(questions);
        console.log(responses);

        const markdown = generateMarkdown(responses);
        console.log(markdown);

        writeToFile('sampleReadMe.md', markdown);
    } catch (error) {
        consolee.log(error);
    }

};

// Function call to initialize app
init();
