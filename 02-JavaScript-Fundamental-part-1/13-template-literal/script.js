const firstName = "Jonas";
const job = "teacher";
const birthyear = 1991;
const year = 2025;

const jonas =
  "I'm " + firstName + " , a " + (year - birthyear) + " year's old " + job;

console.log(jonas);

const jonasNew = `I'm ${firstName} , a ${year - birthyear} year's old ${job}`;

console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "Multi \n\
line \n\
string\n "
);

console.log(`multi
line
string`);

// this is called template literal
