const fs = require("fs");
const inquirer = require("inquirer");



function askQuestion() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "How big is it?",
        name: "dave"
      },
      {
        type: "input",
        message: "What is your nieces name?",
        name: "niecesName"
      },
      {
        type: "input",
        message: "Why are you late?",
        name: "late"
      }
    ])
    .then(function(response) {
      console.log(response);
    });
}
