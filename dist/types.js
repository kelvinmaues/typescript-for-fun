"use strict";
// boolean (true | false)
var isOpen;
isOpen = true;
// string (``, '', "")
var message;
message = "foo " + isOpen;
// number
var total;
total = 112.12;
// array (type[])
var items;
items = [1, 2, 3];
var values;
values = ["1", "2", "3"];
// tuple
var title;
title = [1, "foo"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#FFF";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any
var thing; // NOT COOL
thing = true;
// void
var logger = function () { return console.log("foo"); };
// never
function error() {
    throw new Error("error");
}
// object
var cart;
cart = {
    key: "fi",
};
