const Engineer = require("../lib/Engineer");

test("Can asign GitHub", () => {
    const testHub = "githubUn";
    const employee = new Engineer ("Chuck",6,"fake@nihil.com",testHub);
    expect(employee.github).toBe(testHub);
});

test("can get role Engineer", () => {
    const testRole = "Engineer";
    const employee = new Engineer("Chuck",6,"fake@nihil.com","githubUn");
    expect(employee.getRole()).toBe(testRole);

});

test("can get GitHub", () => {
    const testHub = "githubUn";
    const employee = new Engineer("Chuck",6,"fake@nihil.com",testHub);
    expect(employee.getGithub()).toBe(testHub);
});