let fs = require("fs");
let text = fs.readFileSync("./jokes.txt").toString('utf-8');
let jokes = text.split("\r\n\r\n")

// This line removes the New line character from jokes in the jokes file and adds the new line to the end.
jokes = jokes.map(joke => joke.replace(/(\r\n|\n|\r)/gm, " "));

text = jokes.join('\r\n\r\n');

fs.writeFileSync("./jokes.txt", text)
