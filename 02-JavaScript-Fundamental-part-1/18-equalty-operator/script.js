const age = "18";
if (age === 18) {
  console.log("sarah is adult (strict)");
}
if (age == 18) {
  console.log("you are not adult (loose)");
}

// strict equalty means it check both sieds values are equal or not
// loose equalty means it convert the string to number and give truth

// if want to take input from the webpage, we use prompt.

const favorite = Number(prompt("What is your favourite number?"));
console.log(favorite);
console.log(typeof favorite);
if (favorite === 23) {
  // '23' == 23
  console.log("23 is an amazing number");
} else if (favorite === 7) {
  console.log("cool, 7 is an amazing number");
} else if (favorite === 9) {
  console.log("cool , 9 is an amazing number");
}

if (favorite != 23) {
  console.log("why not 23?");
}
