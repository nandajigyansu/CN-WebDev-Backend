const operations = require('./operations.js');

var input = process.argv.slice(2);

var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log("Addition of", a, "and", b, "results in", operations.add(a, b));
console.log("Subtraction of", b, "from", a, "results in", operations.subtract(a, b));
console.log("Multiplication of", a, "and", b, "results in", operations.multiply(a, b));
console.log("Division of", a, "by", b, "results in", operations.divide(a, b));
