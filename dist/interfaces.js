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
gameTLOU.getSimilars('Metro');
