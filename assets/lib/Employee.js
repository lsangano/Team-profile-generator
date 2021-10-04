class Employee {
  constructor(name, id, email) { 
    this.name= name;
    this.id= id;
    this.email = email;

 // HTML code for the card
 this.card = this.generateCard();
}

// This function returns the HTML code that creates an employee card
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
  getName() {
    return this.name;
}
getId() {
    return this.id;
 }
getEmail() {
  return this.email;
 }
 getRole() {
   return 'Employee';
  }
};
module.exports = Employee;