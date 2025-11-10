function logger() {
  console.log("I am jonas");
}

logger();
logger();
logger();

function fruitProcessor(apple, orange) {
  console.log(apple, orange);
  return `Juice made with ${apple} apples and ${orange} oranges`;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(4, 5);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);
