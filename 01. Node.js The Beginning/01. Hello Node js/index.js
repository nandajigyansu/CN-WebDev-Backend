console.log("Hello World");

function add(a, b) {
    return a + b;
}

var input = process.argv.slice(2);
console.log(add(parseInt(input[0]), parseInt(input[1])));
