
var fs = require("fs");
var filePath = process.argv[2];


var numOfNewLines = fs.readFileSync(filePath).toString().split("\n").length;

console.log(numOfNewLines-1);