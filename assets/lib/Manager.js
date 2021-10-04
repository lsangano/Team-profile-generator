const Employee = require("./Employee");

class Manager extends Employee {
constructor (name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    
    
    // HTML code for the card
    this.card = this.generateCard()
}

// Overwrites Employee generateCard() to include officeNumber
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
            <tr>
                <th scope="row">Office Number</th>
                <td>${this.getOfficeNumber()}</td>
            </tr>
        </tbody>
    </table>
</div>
</div>
`
    return card;
}

getOfficeNumber() {
    return this.officeNumber;
}
    
    getRole() {
        return 'Manager';
    }
};
module.exports = Manager;