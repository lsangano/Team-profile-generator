const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
  it('needs a name', () => {
    expect(new Engineer("Diana", "1", "diana@gmail.com", "diana").getName()).toBe("Diana");
  });
  it('needs an employee ID', () => {
    expect(new Engineer("Diana", "1", "diana@gmail.com", "diana").getId()).toBe("1");
  });
  it('needs an email', () => {
    expect(new Engineer("Diana", "1", "diana@gmail.com", "diana").getEmail()).toBe("diana@gmail.com");
  });
  it('needs a github username', () => {
    expect(new Engineer("Diana", "1", "diana@gmail.com", "diana").getGithub()).toBe("diana");
  });
});