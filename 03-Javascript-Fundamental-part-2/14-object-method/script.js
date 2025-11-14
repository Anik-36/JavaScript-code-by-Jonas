const jonas = {
  firstname: "Jonas",
  lastname: "Schebsmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michel", "Jonas", "Levinho", "Seveu"],

  calcAge: function (birthyear) {
    return 2037 - birthyear;
  },
};

console.log(jonas.calcAge(1991));
console.log(jonas["calcAge"](1991));
