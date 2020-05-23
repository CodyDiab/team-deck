const EMployee = require("./Employee");

class Manager extends EMployee {
    constructor(nameIn,idIn,emailIn,officeNumberIn) {

        super(nameIn,idIn,emailIn);
        this.officeNumber = officeNumberIn;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}






module.exports = Manager; 