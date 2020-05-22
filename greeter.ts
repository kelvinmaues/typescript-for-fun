// # Classes
// A class with a few public field
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

// # Interface
// 1. Two types are compatible if their internal structure is compatible
// 2. This allows to implement an interface just by having the shape the interface requires.
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

// let user = "Jane User";
// let user = { firstName: "Kelvin", lastName: "Maués" };
let user = new Student("Kelvin", "G.", "Maués");

document.body.textContent = greeter(user);
