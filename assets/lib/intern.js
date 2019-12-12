const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, title, id, email, uni) {
    super(name, 'Intern', id, email);
    this.name = name;
    this.title = 'Intern';
    this.id = id;
    this.email = email;
    this.uni = uni;
  }

  getUni(){

    return this.uni;

  }

}

module.exports = Intern;