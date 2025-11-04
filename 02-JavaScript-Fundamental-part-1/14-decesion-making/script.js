// taking decesion : if else statement
/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start for driving licence");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young . wait for ${yearLeft} year's`);
}

*/

const birthyear = 2012;
let century;
if (birthyear < -2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
