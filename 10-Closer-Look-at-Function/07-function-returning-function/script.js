'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('Hey');
greeter('Jonas');
greeter('Steven');

greet('Hello')('Jonas');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greets = greetArrow('WhatsUpp');
greets('Anik');

greetArrow('HI')('Jemin');
