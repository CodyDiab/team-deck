const Intern = require("../lib/Intern");

test("Can asign school", () => {
    const testSchool = "Oxford";
    const employee = new Intern("Chuck",6,"fake@nihil.com",testSchool);
    expect(employee.school).toBe(testSchool);
});

test("Can get role of Intern", () => {
   const testRole = "Intern";
   const employee = new Intern("Chuck",6,"fake@nihil.com","Oxford");
   expect(employee.getRole()).toBe(testRole);
});

test("Can get school", () => {
    const testSchool = "Oxford";
    const employee = new Intern("Chuck",6,"fake@nihil.com",testSchool)
    expect(employee.getSchool()).toBe(testSchool);
});