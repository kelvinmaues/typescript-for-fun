// type alias
type Uid = number | string;

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

logDetails(123, "sapato");
logDetails("123", "sapato");

type Platform = "Windows" | "Linux" | "MacOs";

function renderPlatform(plataform: Platform) {
  return plataform;
}

renderPlatform("Linux");
