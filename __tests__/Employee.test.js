const Employee = require('../lib/Employee');

test("Can initiate Employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');

});

test("Can asign name to employee", () => {
    const name = "Charlie";
    const employee = new Employee(name);
    expect(employee.name).toBe(name)
});

test("Can asign ID to employee", () => {
    const testId = 666;
    const employee = new Employee('Chuck',testId);
    expect(employee.id).toBe(testId);
});

test("Can asign email to employee", () => {
  const testMail = "fake@nihi.com";
  const employee = new Employee('Chuck',6,testMail)
  expect(employee.email).toBe(testMail);

});

test("Can get name", () => {
    const name = "Charlie";
    const employee = new Employee(name)
    expect(employee.getName()).toBe(name);
});

test('Can get ID', () => {
    const testId = 666;
    const employee = new Employee('Chuck',testId);
    expect(employee.getId()).toBe(testId)
});

test('Can get email', () => {
    const testMail = "fake@nihil.com";
    const employee = new Employee('Chuck',6,testMail);
    expect(employee.getEmail()).toBe(testMail);
});

test("can get role ", () => {
    const testRole = "Employee";
    const employee = new Employee('Chuck',6,"fake@nihil.com");
    expect(employee.getRole()).toBe(testRole)
});