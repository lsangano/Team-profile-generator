const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
  getSchool() {
      return this.school;

       // HTML code for the card
       this.card = this.generateCard();
    }
    generateCard() {
        
        const card = `
<div class="col m-4">
<div class="card" style="width: 18rem;">
    <div class="card-header">
        <!-- Employee's Role -->
        ${this.getRole()}
    </div>
    <table class="table table-hover">
        <tbody>
            <tr>
                <th scope="row">Name</th>
                <td>${this.getName()}</td>
            </tr>
            <tr>
                <th scope="row">ID</th>
                <td>${this.getId()}</td>
            </tr>
            <tr>
                <th scope="row">Email</th>
                <td><a href="mailto:${this.getEmail()}">${this.getEmail()}</a></td>
            </tr>
        </tbody>
    </table>
</div>
</div>
`

      return card;
  }
   
  getRole() {
      return 'Intern';
  }
};

module.exports = Intern;