const runOnce = function () {
  console.log('This will run once');
};
runOnce();

// IIFE = Immediately Invoked Function Expression. When we need to not redeclare a function for more than one time we can use iife .`

// create a expression not statement
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will never run Once again'))();

{
  const isPrivate = 23;
  var notPrivate = 44;
}
// console.log(isPrivate);
console.log(notPrivate);
