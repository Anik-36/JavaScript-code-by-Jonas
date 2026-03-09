'use strict';

// var firstName = 'matilda';

const jonas = {
  firstName: 'matilda',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // inside a method if a function called , this should be undefined. bcz it seems like it is outside.
    const self = this;

    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
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
