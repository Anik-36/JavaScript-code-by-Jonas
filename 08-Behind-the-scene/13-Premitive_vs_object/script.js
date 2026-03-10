'use strict';
let age = 30;
let oldAge = age;
age = 31;

console.log('Old age : ' + oldAge);
console.log('age : ' + age);

const me = {
  name: 'Jonas',
  age: 27,
};

const friend = me;
friend.age = 27;
console.log('friend : ' + friend.age);
console.log('me : ' + me.age);
