
const Employee = require("./Employee.js")

class Intern extends Employee {
    constructor(name, id, email, school){
        super(id, name, email)
        this.school = school;
        this.role = 'Intern';
    }
    getSchool() {
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
