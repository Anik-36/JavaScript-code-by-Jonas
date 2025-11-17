// let rep = 1;
// while (rep <= 10) {
//   console.log(`reptation of lift weighting is ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log(`the loop is gonna break`);
  }
}
