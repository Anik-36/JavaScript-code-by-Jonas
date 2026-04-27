'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );

    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(36, 'Kein Williams');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
// Doesn't work. because book is a regular function and this keyword will be undefined in a regular function.
// book(23, 'Sarah Williams');

// Call method -> takes arguments as the object and function paremeter
book.call(eurowings, 237, 'Corry Madison');
console.log(eurowings);

book.call(lufthansa, 209, 'Marry Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 792, 'Anisur Rahman Anik');
console.log(swiss);

// Apply method -> takes arguments as the object and array
const flightData = [983, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

// Bind method -> it returns a function for specific location . and we can also give other paremeters by default for make it simple for further easy use. EX: bookEW23

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
const bookEW = book.bind(eurowings);

bookEW(233, 'Martha Zayrados');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Anisur Rahman Anik');

// With event Listener

lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.plane++;

  console.log(this.plane);
};

// addEventListener function call a function and that 'this' keyword defines the element that eventHandler function attached with, not the object or other things. that's why it gives the element not the function value. so though we need the a function in the eventListener function we can't use call function because call method call's the function not give the function , so we use the bind method, because it returns a function
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partail Application

const addVAT = (rate, value) => value + value * rate;

// thoug the function is not in any object so we give the value to null for object
const addTAX = addVAT.bind(null, 0.23);
console.log(addTAX(100));
console.log(addTAX(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addTAx2 = addTaxRate(10);
console.log(addTAx2(100));

const addVAT2 = rate => value => value + value * rate;

const addTAX2 = addVAT2(0.1);
console.log(addTAX2(200));
console.log(addVAT2(0.23)(23));
