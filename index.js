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

function fibsRecursive(reptitions) {
  if (reptitions <= 0) {
    return [];
  }
  if (reptitions === 1) {
    return [0];
  }
  if (reptitions === 2) {
    return [0, 1];
  }

  const previousReptitions = fibsRecursive(reptitions - 1);
  const lastNumber = previousReptitions[previousReptitions.length - 1];
  const beforeLastNumber = previousReptitions[previousReptitions.length - 2];
  return previousReptitions.concat(lastNumber + beforeLastNumber);
}

console.log(fibsRecursive(4));

function splitArrayInHalf(unsortedArray) {
  let leftSideMidPoint;
  let rightSideMidPoint;

  if (unsortedArray.length % 2 === 1) {
    leftSideMidPoint = Math.floor(unsortedArray.length / 2);
    rightSideMidPoint = Math.ceil(unsortedArray.length / 2);
  } else {
    leftSideMidPoint = unsortedArray.length / 2 - 1;
    rightSideMidPoint = unsortedArray.length / 2;
  }

  const leftArray = unsortedArray.slice(0, leftSideMidPoint + 1);
  const rightArray = unsortedArray.slice(
    rightSideMidPoint,
    unsortedArray.length
  );

  return { leftArray, rightArray };
}

function mergeSortedArrays(sortedLeftArray, sortedRightArray) {
  let sortedArray = [];

  while (sortedLeftArray.length > 0 || sortedRightArray.length > 0) {
    // Check if either side is empty, then add everything from the other side to save time.
    if (sortedLeftArray.length === 0) {
      sortedArray = sortedArray.concat(sortedRightArray);
      sortedRightArray = [];
      break;
    } else if (sortedRightArray.length === 0) {
      sortedArray = sortedArray.concat(sortedLeftArray);
      sortedLeftArray = [];
      break;
    }

    if (sortedLeftArray[0] < sortedRightArray[0]) {
      sortedArray.push(sortedLeftArray[0]);
      sortedLeftArray.shift();
    } else {
      sortedArray.push(sortedRightArray[0]);
      sortedRightArray.shift();
    }
  }

  return sortedArray;
}

function mergeSort(unsortedArray) {
  if (unsortedArray.length <= 1) {
    const sortedArray = unsortedArray;
    return sortedArray;
  }

  const halvedArrays = splitArrayInHalf(unsortedArray);

  const { leftArray, rightArray } = halvedArrays;

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  return mergeSortedArrays(sortedLeftArray, sortedRightArray);
}

const testArray = [1, 5, 4, 2, 3, 7, 6, -10];
console.log(`Sorted Array: ${mergeSort(testArray)}`);
