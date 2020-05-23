const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const managers = [];
const engineers = [];
const interns = [];

// create templates for employee roles and HTML


const initPrompt = () => {
    return inquirer.prompt({
        type: "list",
        name:"initEmployee",
        message: "What sort of employee would you like to start with?",
        choices: ["manager","engineer","intern"],
        required:true,
        default: "manager",
    })
    .then(choice=>{
        if(choice.initEmployee === "intern") {
            userPrompt("intern")
        }
        else if(choice.initEmployee === "engineer") {
            userPrompt("engineer");
        }
        else if(choice.initEMployee === "manager") {
            userPrompt("manager")
        }
    })
}

const userPrompt = (role) => {
    return inquirer.prompt([
        {
            type:"input",
            name: "name",
            message: "What is the name of the employee?",
            required: true,
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID?",
            required: true,
            default: "No ID assigned"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email address?",
            required: true,
            default: "No email assigned"
        }

    ])
    .then(input => {
        if(role === "manager") {
            return inquirer.prompt({
                type: "input",
                name: "officeNum",
                message: "What is the manager's office number?",
                required: true,
                default: "No office assigned "
            })
             .then(answer => {
                 const mgmt = new Manager(input.name,input.id,input.email,answer.officeNum);
                 managers.push(mgmt);
                 return addEmployee();
             })
        }
        else if (role === "engineer") {
            return inquirer.prompt({
                type: "input",
                name: "github",
                message: "What is the the engineer's GitHub user name?",
                required: true,
                default: "No Github user name"
            })
            .then(answer => {
                const eng = new Engineer(input.name,input.id,input.email,answer.github);
                engineers.push(eng);
                return addEmployee();
            })
        }
        else if (role === "intern") {
            return inquirer.prompt({
                type: "input",
                name: "school",
                message: "What university is the intern attending?",
                required: true,
                default: "No university assigned"
            })
            .then(answer => {
                const int = new Intern(input.name,input.id,input.email,answer.school);
                interns.push(int);
                return addEmployee();
            })
        }
    })
}

const addEmployee = () => {
    return inquirer.prompt({
        type: "list",
        name: "addAnother",
        message: "Would you like to add another employee? if finished select 'Finish'",
        choices:["manager","engineer","intern","Finished"],
        required: true,
        default: "Finished"
    })
     .then(choice => {
         if(choice.addAnother === "intern") {
             userPrompt("intern")
         }
         else if(choice.addAnother === "engineer") {
             userPrompt("engineer");
         }
         else if(choice.addAnother === "manager") {
             userPrompt("manager")
         }
         else {
             //write file function/////
         }
     })

}
userPrompt.catch = (err) => {
    console.log("ERROR in prompt:",err);
};











initPrompt()