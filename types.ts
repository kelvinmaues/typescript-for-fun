// boolean (true | false)
let isOpen: boolean;
isOpen = true;

// string (``, '', "")
let message: string;
message = `foo ${isOpen}`;

// number
let total: number;
total = 112.12;

// array (type[])
let items: number[];
items = [1, 2, 3];

let values: Array<string>;
values = ["1", "2", "3"];

// tuple
let title: [number, string];
title = [1, "foo"];

// enum
enum Colors {
  white = "#FFF",
  black = "#000",
}

// any
let thing: any; // NOT COOL
thing = true;

// void
const logger = () => console.log("foo");

// null | undefined
type Bla = string | undefined;

// never
function error(): never {
  throw new Error("error");
}

// object
let cart: object;
cart = {
  key: "fi",
};
