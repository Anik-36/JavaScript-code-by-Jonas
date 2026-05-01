const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

// Closure is a concept that makes the connection between function and its birthplace execution context. so the function can use all the variable of its parent scope. and it is much priorities than scope chain. let say passengerCount = 10 in the global scope. but it will defined as 0 because of closure . cause it has more priority.
