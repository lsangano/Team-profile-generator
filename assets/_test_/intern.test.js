const Intern = require('../lib/Intern');

describe('Intern class', () => {
  it('needs a name', () => {
    expect(new Intern("Michael", "1", "michael@gmail.com", "Howard University").getName()).toBe("Michael");
  });
  it('needs an employee ID', () => {
    expect(new Intern("Michael", "1", "michael@gmail.com", "Howard University").getId()).toBe("1");
  });
  it('needs an email', () => {
    expect(new Intern("Michael", "1", "michael@gmail.com", "Howard University").getEmail()).toBe("michael@gmail.com");
  });
  it('needs a school ', () => {
    expect(new Intern("Tester", "1", "michael@gmail.com", "Howard University").getSchool()).toBe("Howard University");
  });
});