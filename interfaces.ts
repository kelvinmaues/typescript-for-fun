/**
 * Interface: Works only to describe an object
 * Type Alias: Works to describe an object and primitive types
 */

interface Game {
  title: string;
  description: string;
  genre: string;
  platform: string[];
  getSimilars: (title: string) => void;
}

const gameTLOU: Game = {
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: ...`);
  },
};

gameTLOU.getSimilars('Metro')
