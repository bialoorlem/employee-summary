const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, role, id, email, officeNumber) {
    super(name, 'Manager', id, email);
    this.name = name;
    this.role = 'Manager';
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  getOfficeNumber(){

    return this.officeNumber;

  }

}

module.exports = Manager;