
// # Interfaces
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

let user = { firstName: "Kelvin", lastName: "Maués" };

document.body.textContent = greeter(user);
