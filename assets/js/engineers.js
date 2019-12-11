const Employee = require("./employee.js");

class Engineer extends Employee {
  constructor(name, title, id, email, gitHub) {
    this.name = name;
    this.title = title;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;
  }
}

module.exports = Employee;