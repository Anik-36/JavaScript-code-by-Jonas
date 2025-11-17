const jonas = {
  firstname: "Jonas",
  lastname: "Schebsmann",
  birthyear: 1991,
  job: "teacher",
  friends: ["Michel", "Jonas", "Levinho", "Seveu"],
  hasDriverLicense: false,

  // calcAge: function (birthyear) {
  //   return 2037 - birthyear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthyear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthyear; // make a property for the object with this keyword like joans.age.
    return this.age;
  },

  getSummary: function () {
    return `${this.firstname} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's License`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);

console.log(jonas.getSummary());
// console.log(jonas["calcAge"](1991));
