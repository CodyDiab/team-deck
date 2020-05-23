const Employee = require("./Employee")

class Intern extends Employee {
    constructor(nameIn,idIn,emailIn,schoolIn) {

        super(nameIn,idIn,emailIn);
        this.school = schoolIn 
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;