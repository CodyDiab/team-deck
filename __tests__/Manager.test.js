const Manager = require('../lib/Manager');

test(" Can asign office number", () => {
    const testNum = 1812;
    const employee = new Manager("Chuck",6,"fake@nihil.com",testNum)
    expect(employee.officeNumber).toBe(testNum);
});

test("Can get role", () => {
    const testRole = "Manager";
    const employee = new Manager("Chuck",6,"fake@nihil.com",1812)
    expect(employee.getRole()).toBe(testRole)
});

test("Can get office number", () => {
   const testNum = 1812;
   const employee = new Manager("Chuck",6,"fake@nihil.com",testNum)
   expect(employee.getOfficeNumber()).toBe(testNum);

});