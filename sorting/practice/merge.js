// Merge Sort Function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// Merge Function
function merge(left, right) {
  let result = [];
  let leftInd = 0;
  let rightInd = 0;

  while (leftInd < left.length && rightInd < right.length) {
    if (left[leftInd] < right[rightInd]) {
      result.push(left[leftInd]);
      leftInd++;
    } else {
      result.push(right[rightInd]);
      rightInd++;
    }
  }

  return result.concat(left.slice(leftInd)).concat(right.slice(rightInd));
}

// Example usage
console.log(mergeSort([4, 2, 1, 3])); // Output: [1, 2, 3, 4]
