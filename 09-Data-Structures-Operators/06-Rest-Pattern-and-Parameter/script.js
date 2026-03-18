'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order is received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },
};

// SPREAD because of RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST because of LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// const arr = [7, 8, 9];
// const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(newBadArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// // Copy array
// const mainMenyCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // iterable : arrays, string , maps, sets. Not objects

// const str = 'Jonas';
// const letter = [...str, ' ', 'S.'];
// console.log(letter);

// // Real life example
// const ingrediants = [
//   // prompt("Let's make pasta ! with Ingrediants 1 ?"),
//   // prompt('Ingrediants 2 ?'),
//   // prompt('Ingrediants 3 ?'),
// ];

// restaurant.orderPasta(ingrediants[0], ingrediants[1], ingrediants[2]);
// restaurant.orderPasta(...ingrediants);

// // Spreading objects

// const newResturaunt = {
//   foundIn: 1991,
//   ...restaurant,
//   founder: 'Anisur Rahman Anik',
// };
// console.log(newResturaunt);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Resturaina Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);
