const friend = ["Michel", "Katty", "Levinho", "Seveu"];

// Add
const lengthArray = friend.push("Jay");
// push method gives the new length of the array
console.log(friend);

console.log(lengthArray);

friend.unshift("John");
console.log(friend);
// unshift can add the value in the beginning of the array

// Remove element

friend.pop();
const popped = friend.pop();
console.log(friend);
console.log(popped);
// pop returns the popped value not length of the new array

friend.shift();
const beginPopped = friend.shift();
// shift can remove the first element of the array and also return the value
console.log(friend);
console.log(beginPopped);

console.log(friend.indexOf("Levinho"));
console.log(friend.indexOf("Bob"));

// include check the value is in the array or not. it gives the true and false value
friend.push(23);
console.log(friend.includes("Katty"));
console.log(friend.includes("Bob"));
console.log(friend.includes(23));

if (friend.includes("Levinho")) {
  console.log("You have a freind named Levinho");
}
