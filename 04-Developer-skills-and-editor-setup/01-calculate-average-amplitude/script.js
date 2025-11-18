const calcAverageAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    let currTemp = temps[i];

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(min, max);
};

calcAverageAmplitude([3, 5, 1, 0, -34, 16]);
