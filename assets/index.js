const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// Module imports
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Build your team
const commonQuestions = [
    {
        name: 'name',
        message: 'What is their name?'
    },
    {
        name: 'id',
        message: 'What is their employee ID number?'
    },
    {
        name: 'email',
        message: 'What is their email address?'
    }
];
const managerQuestions = commonQuestions.concat({
    name: 'officeNumber',
    message: 'What is their office number?'
});
const internQuestions = commonQuestions.concat({
    name: 'school',
    message: 'What school do they attend?'
});
const engineerQuestions = commonQuestions.concat({
    name: 'github',
    message: 'What is their github username?'
});
const addEmployeeQuestion = [
    {
        name: 'addEmployee',
        type: 'list',
        message: 'Who would you like to add to the team?',
        choices: ["Engineer", "Intern", "Nobody"]
    }
];

async function init() {
    // Creates the manager for the team based on input
    const createManager = async () => {
        console.log("Enter the following information about the Manager: ")
        let answers = await inquirer.prompt(managerQuestions);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        return manager;
    }

    const teamManager = await createManager();

    // Creates the rest of the team
    const createEmployees = async () => {
        let running = true;   // Until user selects "Nobody", run program
        let otherEmployees = [];
    
        while (running) {
            // Ask who they want to add
            let menuAnswer = await inquirer.prompt(addEmployeeQuestion)
    
            if (menuAnswer.addEmployee == "Engineer") {
                console.log("\nEnter the following information about the Engineer: ")
                let answers = await inquirer.prompt(engineerQuestions);
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                otherEmployees.push(engineer);
            }
    
            else if (menuAnswer.addEmployee == "Intern") {
                console.log("\nEnter the following information about the Intern: ")
                let answers = await inquirer.prompt(internQuestions);
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                otherEmployees.push(intern);
            }
    
            else if (menuAnswer.addEmployee == "Nobody") {
                running = false;
            }
        }
    
        return otherEmployees
    }

    // Array for all employees on the team
    const teamMembers = await createEmployees();
    teamMembers.push(teamManager)  // Add manager to team of Engineers/Interns

    // Sort array by employee ID
    teamMembers.sort((a, b) => (a.id > b.id) ? 1 : -1)

    // Creates employee cards for each employee
    const employeeCards = (team) => {
        const cards = team.map(employee => employee.card).join('')
        return cards;
    }

    // String that holds HTML code for all employee cards
    const cardCode = await employeeCards(teamMembers);

    // Generates entire HTML code
    const createHTMLCode = (cardCode) => {
        const code = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Bootstrap 4.0 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <!-- Custom stylesheet -->
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Team Profile Generator</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Other Stuff</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Employee Card -->
    <div class="container">
        <div class="row">
        ${cardCode}
        </div>
        <!-- Bootstrap Bundle -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
            crossorigin="anonymous"></script>
</body>
</html>
        `;

        return code;
    }

    // Generate html code for the entire webpage
    const htmlCode = await createHTMLCode(cardCode);

    // Write code to file
    writeFileAsync('./dist/index.html', htmlCode)

}

init();