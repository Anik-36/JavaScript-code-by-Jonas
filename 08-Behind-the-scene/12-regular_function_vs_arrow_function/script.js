'use strict';

// var firstName = 'matilda';

const jonas = {
  firstName: 'matilda',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // inside a method if a function called , this should be undefined. bcz it seems like it is outside.
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    // an arrow function use this keyword from its parrent scope, but in regular function this keyword will be undefined. so arrow takes this from the calcAge function this as its own.
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};

jonas.calcAge();

// jonas.greet();

// arguments keyword . only regular function have
const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExp(2, 3, 5, 6, 7);

// arrow function dont have
const addArr = () => {
  console.log(arguments);
  return a + b;
};
addArr(2, 3);
