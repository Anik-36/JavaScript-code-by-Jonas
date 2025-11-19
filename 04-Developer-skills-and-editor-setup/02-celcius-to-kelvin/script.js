const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // FIX:
    // value: Number(prompt('Degrees in celcius')),
    value: 10,
  };

  // console.log(measurement);
  console.table(measurement);

  // console.warn(measurement);
  // console.error(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const calcAverageAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    let currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcAverageAmplitudeBug([3, 2, 1, 5], [5, 2, 9, 13]);
console.log(amplitudeBug);
