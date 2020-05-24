const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(nameIn,idIn,emailIn,githubIn) {
        super(nameIn, idIn, emailIn);
        this.github = githubIn;
    }

    getRole() {
        return "Engineer";
    }

    getGithub(){
        return this.github
    }
}

module.exports = Engineer;