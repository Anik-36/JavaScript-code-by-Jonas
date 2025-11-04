//type conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);
// NaN means Not a Number. but its type is number.

console.log(String(23), 23);

// type coersion

console.log("I am " + 23 + " years old ");
// + er khetre always digit theke string a auto conversion hoye jay. baki sob khtre string thakleo digit a convert hoy.

console.log("23" - "10" - 3);
console.log("23" * "3");
console.log("23" / "3");

let n = "1" + 1;
n = n - 1;
console.log(n);
