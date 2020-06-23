// Type Alias

// definição
type TGame = {
  title: string;
};

type TDLC = {
  extra: string;
};

// intersection
type TGameCollection = TGame & TDLC;

// implements
// class CreateGame implements TGameCollection {}

// declarar função
type TgetSimilars = (title: string) => void;
