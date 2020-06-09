type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: "Kelvin",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "Bolinha",
  level: 90,
};

// types intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 1234,
  name: "Kelvin",
  nickname: "Bolinha",
  level: 100,
};
