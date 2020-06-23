/**
 * Interface: Works only to describe an object
 * Type Alias: Works to describe an object and primitive types
 */

interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const gameTLOU: Game = {
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "action",
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: ...`);
  },
};

console.log(gameTLOU.genre);
if (gameTLOU.getSimilars) {
  gameTLOU.getSimilars("Metro");
}

// Extending an interface to another
interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftBehind: DLC = {
  title: "The Last of Us - Left Behind",
  description: "You play as Ellie before the original game",
  genre: "action",
  platform: ["PS4"],
  originalGame: gameTLOU,
  newContent: ["new characters", "3 hours story"],
};

// Implementing a class with an 'interface'

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}
