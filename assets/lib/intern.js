const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, 'Intern', id, email);
    this.name = name;
    this.role = 'Intern';
    this.id = id;
    this.email = email;
    this.school = school;
  }

  getSchool(){

    return this.school;

  }

}

module.exports = Intern;