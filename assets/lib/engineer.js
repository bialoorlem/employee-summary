// const Employee = require("./employee");

// class Engineer extends Employee {
//   constructor(name, id, email, github) {
//     super(name, 'Engineer', id, email);
//     this.name = name;
//     this.role = 'Engineer';
//     this.id = id;
//     this.email = email;
//     this.gitHub = github;
//   }

//   getGitHub(){

//     return this.github;

//   }
// }
 
const Employee = require('./employee')

class Engineer extends Employee {

    constructor(id, email, name, github) {

        super(id, email, name, 'Engineer');
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = 'Engineer';
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
}
 
module.exports = Engineer;