"use strict";
// # Classes
// A class with a few public field
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// let user = "Jane User";
// let user = { firstName: "Kelvin", lastName: "Maués" };
var user = new Student("Kelvin", "G.", "Maués");
document.body.textContent = greeter(user);
