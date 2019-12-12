const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, title, id, email, uni) {
    this.name = name;
    this.title = 'Intern';
    this.id = id;
    this.email = email;
    this.uni = uni;
  }
}

module.exports = Intern;