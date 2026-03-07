'use strict';
console.log(this);

const calcAge = function (year) {
  console.log(2037 - year);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = year => {
  console.log(2037 - year);
  console.log(this);
};

calcAgeArrow(1980);
