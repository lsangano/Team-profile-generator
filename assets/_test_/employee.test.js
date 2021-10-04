const Employee = require('../lib/Employee');

describe('Employee class', () => {
  it('needs a name', () => {
    expect(new Employee("Tester", "1", "tester@test.com").getName()).toBe("Tester");
  });
  it('needs an employee ID', () => {
    expect(new Employee("Tester", "1", "tester@test.com").getId()).toBe("1");
  });
  it('needs an email', () => {
    expect(new Employee("Tester", "1", "tester@test.com").getEmail()).toBe("tester@test.com");
  });
});