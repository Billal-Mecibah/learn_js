var a = 1;
let b = 2;

function showText() {
    var a = 1;
    let b = 4;
    console.log(`Function - From Global ${a}`);
    console.log(`Function - From Global ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();
