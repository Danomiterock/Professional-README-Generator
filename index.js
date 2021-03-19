// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//require file system package
const fs = require('fs');
//import utilities module
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
//require README-TEMPLATE
// const template = require('./README-TEMPLATE.md')
const writeAsynchronous = util.promisify(fs.writeFile)
// Use promisify to convert callback 
// based method fs.readdir to  
// promise based method 
const readdir = util.promisify(fs.readdir) 
   
const readFiles = async (path) => { 
    const files = await readdir(path) 
     
  } 
   
  readFiles(process.cwd()).catch(err => { 
    console.log(err) 
  }) 
//create object for licensee badges
const badges = {
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    WTFPL: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'

}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description providing the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'Please provide instructions on how to install your product.',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'list',
        name: 'screenshot',
        message: 'Have you provided an image in the assets/images folder?',
        choices: ['Yes', 'No'],
    },    
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators with links to their GitHub profile.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the appropriate license.',
        choices: [
            {
				name: 'MIT',
				value: {
					name: 'MIT',
					link: 'MIT',
					url: 'https://opensource.org/licenses/MIT',
					color: 'yellow',
			},    
            {
                name: 'IBM',
                value: {
                    name: 'IBM',
                    link: 'IBM',
                    url: 'https://opensource.org/licenses/IPL-1.0',
                    color: 'blue',
            },
            {
                name: 'Mozilla',
                value: {
                    name: 'Mozilla',
                    link: 'Mozilla',
                    url: 'https://opensource.org/licenses/MPL-2.0',
                    color: 'brightgreen',
            },          
        ],
        },
    {
        type: 'input',
        name: 'features',
        message: 'List any important features.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
       
    .then(function(data){
        console.log(data);
        console.log('Written to File.');
        writeAsynchronous('README.md', generateMarkdown(data))
    })
};

// Function call to initialize app
init();

