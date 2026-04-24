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
