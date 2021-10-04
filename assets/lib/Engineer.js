const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github= github;

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
  
    getGithub() {
    return this.github;
    }

 getRole() {
    return 'Engineer';
 }

};

module.exports = Engineer;