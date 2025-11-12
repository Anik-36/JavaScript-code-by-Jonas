function calcAge(birthyear) {
  return 2037 - birthyear;
}

function yearUntilRetirement(birthyear, name) {
  const age = calcAge(birthyear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${name} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${name} is already retired.`);
    return -1;
  }
}

console.log(yearUntilRetirement(1991, "Anik"));
console.log(yearUntilRetirement(1957, "Jonas"));
