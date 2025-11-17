const jonas = [
  "jonas",
  "schabsmann",
  2037 - 1991,
  "teacher",
  ["levinho", "seveu", "michel"],
  true,
];

const types = [];
for (let i = 0; i < jonas.length; i++) {
  // read the array
  console.log(jonas[i], typeof jonas[i]);

  //filling types of array
  // types[i] = typeof jonas[i];
  types.push(jonas[i]);
}

console.log(types);

const years = [1991, 2020, 2013, 2001];

const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

console.log("----- ONLY STRING PRINTED ------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] != "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("----- ONLY BERAK WHEN ACCESS NUMBER ------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] == "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
