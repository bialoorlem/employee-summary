const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, title, id, email, officeNumber) {
    super(name, 'Manager', id, email);
    this.name = name;
    this.title = 'Manager';
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  getOfficeNumber(){

    return this.officeNumber;

  }

}

module.exports = Manager;