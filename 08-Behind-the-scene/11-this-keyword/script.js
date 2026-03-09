'use strict';
// console.log(this);

const calcAge = function (year) {
  console.log(2037 - year);
  // console.log(this);
};
calcAge(1991);

// arrow function doesn't use the this keyword for its own. it takes the sorrounding or parent scope or global object .
const calcAgeArrow = year => {
  console.log(2037 - year);
  // console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;

matilda.calcAge();

// this is not connected with any object. thats why "this" keyword is not get any object to show. thats why its gives undefined result.
const f = jonas.calcAge;
f();
