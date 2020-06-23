"use strict";
/**
 * Interface: Works only to describe an object
 * Type Alias: Works to describe an object and primitive types
 */
var gameTLOU = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "action",
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": ...");
    },
};
console.log(gameTLOU.genre);
if (gameTLOU.getSimilars) {
    gameTLOU.getSimilars("Metro");
}
var leftBehind = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "action",
    platform: ["PS4"],
    originalGame: gameTLOU,
    newContent: ["new characters", "3 hours story"],
};
// Implementing a class with an 'interface'
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
