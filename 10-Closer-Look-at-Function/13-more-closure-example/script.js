// Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Redeclaring of f

h();
f();

console.dir(f);

// Example 2

const boardPassenger = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding of all ${n} passenger`);
    console.log(`We are 3 group, per group passenger ${perGroup}`);
  }, 1000);
  console.log(`Will start boarding at ${wait} second`);
};

perGroup = 1000;
boardPassenger(180, 3);
