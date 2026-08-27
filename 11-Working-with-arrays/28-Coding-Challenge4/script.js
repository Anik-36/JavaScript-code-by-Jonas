"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovement = function (movements, sorted = false) {
  containerMovements.innerHTML = "";

  const movs = sorted ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovement(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handler

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value,
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
    containerApp.style.opacity = 100;

    // update UI
    updateUI(currentAccount);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);

  const receiverAcc = accounts.find(
    (acc) => inputTransferTo.value === acc.userName,
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    // Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // Find index == when it matches the condition first then returns the elements index . similar as find method.
    const index = accounts.findIndex(
      (acc) => acc.userName === inputCloseUsername.value,
    );

    // Delete from the account array
    // splice(startIndex, numberOfElement); it mutate the array.
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  // Clear input fields
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// reduce method is a snowball or a boiler of the whole array. it makes the array into a single value. reduce method is little bit difference with filter and map method. its 1st parameter is Accumulator, then vale, index, array.
// acc stands for Accumulator of the callback function and the other paramter 0 is the initial value of Accumulator of reduce method.

// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`iteration ${i} : ${acc}`);
//   return acc + curr;
// }, 0);

// const balance = movements.reduce((acc, curr) => acc + curr, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // find the maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(max);

// const eurToUsd = 1.1;

// Pipeline
// const depositeUsd = movements
//   .filter((mov) => mov > 0)
//   // .map((mov) => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(depositeUsd);

// FIND method is similar like filter method like it takes the condition and check and return the boolean value. but there is a difference between them. that , filter method return an array which makes the condition true and make the array but find method only gives the first value that gives the true value of the condition is given.

// const firstWithdrawal = movements.find((move) => move < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

// for (const acc of accounts) if (acc.owner === "Jessica Davis") console.log(acc);

// console.log(movements);

// // Equality -> only check is it equal or not
// console.log(movements.includes(-130));

// // SOME : Functionality -> can give the condition
// console.log(movements.some((mov) => mov === -130));

// const anyDeposite = movements.some((mov) => mov > 0);
// console.log(anyDeposite);

// // EVERY -> cousin of SOME  method but difference is, it give true only when all the elements satisfied the condition.
// console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0)); // acc4 has all the positive value.

// // Seperate callback
// const deposit = (mov) => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// FLAT  method make the array flat. flat(2) means 2 level deeper the method.

// const arr = [[1, 2, 3], 4, 5, [6, 7, 8]];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], 4, 5, [6, [7, 8]]];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// // FLAT
// const overallBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// // FLAT and MAP method is jointly used everywhere. so here comes the flatMap method.

// // FlatMap is use for only 1 level, if need more then must use flat(level).
// const overallBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// // String
// const owner = ["Jonas", "Adam", "Zach", "Marta"];
// console.log(owner.sort());
// console.log(owner);

// // Number

// // this is sorting only string not number.
// // console.log(movements.sort());

// // return < 0 A , B (keep order)
// // return > 0 B < A (switch order)

// // Asscending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// movements.sort((a, b) => a - b);

// console.log(movements);

// // Decending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// movements.sort((a, b) => b - a);

// console.log(movements);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr1 = new Array(1, 2, 3, 4, 5, 6, 7);

// // Empty array

// const x = new Array(7);

// // x.map(() => 5);
// // x.fill(4);
// x.fill(4, 3, 5);

// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener("click", function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => Number(el.textContent.replace("€", "")),
//   );
//   console.log(movementsUI);
//   // const movementsUI2 = [...document.querySelectorAll(".movements__value")];
//   // console.log(movementsUI2);
// });

/// Array Method Practice

//1.
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

//2.
// const numDeposit1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

const numDeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposit1000);

// Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposit, withdrawal } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposit += cur) : (sums.withdrawal += cur);
      sums[cur > 0 ? "deposit" : "withdrawal"] += cur;
      return sums;
    },
    { deposit: 0, withdrawal: 0 },
  );

console.log(deposit, withdrawal);

// 4.
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = [
    "a",
    "an",
    "and",
    "the",
    "or",
    "but",
    "at",
    "in",
    "on",
    "with",
    "to",
  ];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

/*
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1.
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// 2.
const dogBothActivities = breeds.find(
  breed =>
    breed.activities.includes('fetch') && breed.activities.includes('running')
).breed;
console.log(dogBothActivities);

// 3.
// const allActivities = breeds.map(breed => breed.activities).flat();
const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

// 4.
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5.
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(breed => breed.activities)
      .filter(activity => activity !== 'swimming')
  ),
];
console.log(swimmingAdjacent);

// 6.
console.log(breeds.every(breed => breed.averageWeight > 10));

// 7.
console.log(breeds.some(breed => breed.activities.length >= 3));

// BONUS
const fetchWeights = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .map(breed => breed.averageWeight);
const heaviestFetchBreed = Math.max(...fetchWeights);

console.log(fetchWeights);
console.log(heaviestFetchBreed);
*/

///////////////////////////////////////
// Coding Challenge #5

/*
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/
