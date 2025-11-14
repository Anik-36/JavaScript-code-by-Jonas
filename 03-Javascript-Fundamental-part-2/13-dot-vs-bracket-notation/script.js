const jonas = {
  firstname: "Jonas",
  lastname: "Schebsmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michel", "Jonas", "Levinho", "Seveu"],
};

// dot notation
console.log(jonas.lastname);

// bracket notation
console.log(jonas["lastname"]);
// in bracket notation , we can give expression for calculate and generate the value. it is a literal template. in dot notation we need to use final property name , but can't use computed property name.
// like

const nameKey = "name";

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// if we want to take input from user and want to find the value , we can't use dot notation. we need bracket notation

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstname,lastname,age, job, friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request. Choose between firstname,lastname,age, job, friends"
  );
}

// to add some value into object

jonas.location = "Portugal";
jonas["twitter"] = "@schedbamann";
console.log(jonas);

// Jonas has 3 freinds , and his best freind is Michel

console.log(
  `${jonas.firstname} has 3 friends, and his best friend is ${jonas.friends[0]}`
);
