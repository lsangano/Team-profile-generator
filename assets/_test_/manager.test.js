const Manager = require('../lib/Manager');

describe('Manager class', () => {
  it('needs a name', () => {
    expect(new Manager("Whitney", "1", "whitneyh@gmail.com", "222").getName()).toBe("Whitney");
  });
  it('needs an employee ID', () => {
    expect(new Manager("Whitey", "1", "Whitneyh@gmail.com", "222").getId()).toBe("1");
  });
  it('needs an email', () => {
    expect(new Manager("Whitney", "1", "Whitneyh@gmail.com", "222").getEmail()).toBe("Whitneyh@gmail.com");
  });
  it('needs an office number', () => {
    expect(new Manager("Whitney", "1", "Whitneyh@gmail.com", "222").getOfficeNumber()).toBe("222");
  });
});

