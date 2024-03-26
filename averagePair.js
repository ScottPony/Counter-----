function averagePair(sortedArr, num) {
  let counter = {};
  let pairs = [];

  for (let i = 0; i < sortedArr.length; i++) {
    counter[sortedArr[i]] = 2 * num - sortedArr[i];
  }

  console.log(counter);

  for (let j = 0; j < sortedArr.length; j++) {
    if (!counter[counter[sortedArr[j]]]) {
      continue;
    }

    if (counter[counter[sortedArr[j]]] === sortedArr[j]) {
      pairs.push([sortedArr[j], counter[sortedArr[j]]]);
    }
  }

  return pairs;
}

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
