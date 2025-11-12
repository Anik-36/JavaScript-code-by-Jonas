const friend1 = "Michel";
const friend2 = "Jonas";
const friend3 = "Levinho";

const friend = ["Michel", "Jonas", "Levinho", "Seveu"];
console.log(friend);

const y = new Array(1991, 2002, 2004, 2020);

console.log(friend[0]);
console.log(friend[2]);

console.log(friend.length);

friend[3] = "Jay";
console.log(friend[friend.length - 1]);
const firstname = "Jonas";
const jonas = [firstname, "Schebsman", 2037 - 1991, "teacher", friend];
console.log(jonas);

function calcAge(birthyear) {
  return 2037 - birthyear;
}

const years = [1991, 1999, 2008, 2018, 2025];

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
