const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log(`Sarah should drive the car...`);
// } else {
//   console.log(`Others should drive the car...`);
// }

const isTired = false;

// const shouldDrive = hasDriverLicense && hasGoodVision;
if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log(`Sarah should drive the car...`);
} else {
  console.log(`Others should drive the car...`);
}
