const temparature = [-1, 3, -5, -6, 'error', 4, 18, 17, 1, 23, -5, 34];

const calcAverageAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    let currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcAverageAmplitude(temparature);
console.log(amplitude);
