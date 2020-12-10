let fs = require("fs");
let text = fs.readFileSync("./jokes.txt").toString('utf-8');
let jokes = text.split("\r\n\r\n");

console.log("Joke of this time:\n> "+jokes[Math.floor(Math.random() * jokes.length)]);
