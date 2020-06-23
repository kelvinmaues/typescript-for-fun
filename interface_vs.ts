// Interface

// definição
interface IGame {
  title: string;
}

interface IDLC {
  extra: string;
}

// intersection / extends
interface IGameCollection extends IGame, IDLC {}

// implements
// class CreateGame implements IGameCollection {}

// declarar função
interface IgetSimilars {
  (title: string): void;
}
