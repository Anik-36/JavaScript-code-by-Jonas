// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

/* Arrow function

it is used for more easier and faster to use

 structure
const functino_name = parameter => return_value;

*/
// for single line of code
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// for multi-line of code
const yearLeftRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearLeftRetirement(1991));

// for multi-line and mutli-parameters code

const retirementYear = (birthYear, name) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${name} is retired in ${retirement} years `;
};

console.log(retirementYear(1991, "anik"));
console.log(retirementYear(1980, "Bob"));
