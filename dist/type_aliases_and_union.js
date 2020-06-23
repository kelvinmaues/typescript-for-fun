"use strict";
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
function logInfo(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
logDetails(123, "sapato");
logDetails("123", "sapato");
function renderPlatform(plataform) {
    return plataform;
}
renderPlatform("Linux");
