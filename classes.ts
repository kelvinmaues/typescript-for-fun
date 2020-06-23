class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }
}

const kelvin = new UserAccount("Kelvin", 26);
console.log(kelvin);
console.log(kelvin.age);
kelvin.logDetails();

const ruth = new CharAccount("Ruth", 25, "rutinha", 10);
console.log(ruth)
ruth.logDetails()
