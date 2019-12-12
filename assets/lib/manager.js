const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, title, id, email, officeNumber) {
    this.name = name;
    this.title = 'Manager';
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }
}

module.exports = Employee;