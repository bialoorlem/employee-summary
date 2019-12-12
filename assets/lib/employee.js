class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.role = 'Employee';
    this.id = id;
    this.email = email;
  }

  //referred this coding section from Jake O'Toole's repo

  getName() {
    return this.name;
  }
  getTitle() {
    return this.title;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole(){
    return this.role;
  }
}

module.exports = Employee;
 