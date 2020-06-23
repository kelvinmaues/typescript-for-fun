abstract class UserAccount {
  name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level;
  }

  get getNickname() {
    return this.nickname;
  }

  set setNickname(nickname: string) {
    this.nickname = nickname;
  }

  logCharDetails(): void {
    console.log(
      `The player ${this.name} has nickname ${this.nickname} at level ${this.level}`
    );
  }
}

// const kelvin = new UserAccount("Kelvin", 26);
// console.log(kelvin);
// // console.log(kelvin.age);
// kelvin.logDetails();

const ruth = new CharAccount("Ruth", 25, "rutinha", 10);
console.log(ruth);
ruth.logCharDetails();
console.log(ruth.level);

ruth.setNickname = 'petinha'
console.log(ruth.getNickname);