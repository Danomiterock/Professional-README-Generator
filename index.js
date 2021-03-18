// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    prompt([
        {
            type: "input"
            name: "github"
            message: "What is your GitHub username?"
        }
        {
            type: "input"
            name: "email"
            message: "What is your email address?"
        }
        {
            type: "input"
            name: "project title"
            message: "What is your project title?"
        }
        {
            type: "input"
            name: "description"
            message: "Provide a short description providing the what, why, and how of your project."
        }
        {
            type: "input"
            name: "instalation"
            message: "Please provide instructions on how to install your product."
        }
        {
            type: "input"
            name: "credits"
            message: "List your collaborators with links to their GitHub profile."
        }
        {
            type: "checkbox"
            name: "licenses"
            message: "Please select the appropriate license."
            choices: ["Apache", "Boost", "BSD", "Creative Commons", "Eclipse", "IBM", "ISC", "MIT", "Mozilla", "Open Data Commons", "Perl", "SIL", "Unlicense", "WTFPL", "Zlib"]
        }
        {
            type: "input"
            name: "badges"
            message: "Would you like to include a badge for your license selection?"
        }
        {
            type: "input"
            name: "features"
            message: "List any important features."
        }
    ])
    .then(function(data){
        console.log(data);
        fs.writeFile("README2.md", convertToMarkdown(data), () => console.log("Written to File.");
    })
};

// Function call to initialize app
init();

