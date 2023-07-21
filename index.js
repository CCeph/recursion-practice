function fibs(reptitions) {
  if (reptitions <= 0) {
    return [];
  }
  if (reptitions === 1) {
    return [0];
  }
  if (reptitions === 2) {
    return [0, 1];
  }

  const fibArr = [0, 1];
  for (let i = reptitions - 2; i > 0; i -= 1) {
    const lastNumber = fibArr[fibArr.length - 1];
    const beforeLastNumber = fibArr[fibArr.length - 2];
    fibArr.push(lastNumber + beforeLastNumber);
  }
  return fibArr;
}

console.log(fibs(8));
