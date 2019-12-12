const Employee = require("./employee.js");

class Engineer extends Employee {
  constructor(name, title, id, email, gitHub) {
    super(name, title, id, )
    this.name = name;
    this.role = 'Engineer';
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;
  }

  getgitHub(){

    return this.gitHub;

  }

}

module.exports = Employee;