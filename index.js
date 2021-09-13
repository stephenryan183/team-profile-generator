
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./generateHTML');

const teamMembersArray = []

    const managerQuestions=[
        {
            type: 'input',
            message: 'What is the team managers name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the team managers ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the team managers email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the team managers office number?',
            name: 'officeNumber',
        },
        {
            type: 'confirm',
            message: 'Would you like to add an Engineer or Intern?',
            name: 'another',
            default: false,
    
        },

    ]
    const engineerQuestions =[
        {
            type: 'input',
            message: 'What is your engineer"s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your engineer"s ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your engineer"s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your engineer"s Github username?',
            name: 'github',
        },
        {
            type: 'confirm',
            message: 'Do you want to add another Engineer or Intern?',
            name: 'another',
            default: false,
    
        },
    ]
    const internQuestions=[
        {
            type: 'input',
            message: 'What is your inter"s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your inter"s ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your inter"s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your inter"s school?',
            name: 'school',
        },
        {
            type: 'confirm',
            message: 'Do you want to add another Engineer or Intern?',
            name: 'another',
            default: false,
    
        },
    ]
    const basicQuestions = [
        {
            type: 'list',
            message: 'Enter your name:',
            name: 'name',
            choices: ['Engineer', 'Intern', 'Done']
        },
    ];

    function createManager() {
        inquirer
            .prompt(managerQuestions)
            .then((response) => {
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
                teamMembersArray.push(manager);
                console.log (teamMembersArray);
                if (response.another == true) { mainQuestions() }
        
            })
    };


    function mainQuestions() {
        inquirer
            .prompt(basicQuestions)
            .then(response => {
                if (response.role == 'Manager') { createManager() }
                else if (response.role == 'Engineer') { createEngineer() }
                else { createIntern() }
            });
    };

    function createEngineer() {
        inquirer
            .prompt(engineerQuestions)
            .then((response) => {
                const engineer = new Engineer(response.name, response.id, response.email, response.github)
                teamMembersArray.push(engineer);
                if (response.another == true) { mainQuestions() }   
            })
    };


    function createIntern() {
        inquirer
            .prompt(internQuestions)
            .then((response) => {
                const intern = new Intern(response.name, response.id, response.email, response.school)
                teamMembersArray.push(intern);
                if (response.another == true) { mainQuestions() }
                
            })
    }




    initialize()

    module.exports = initialize;


    
         
    

