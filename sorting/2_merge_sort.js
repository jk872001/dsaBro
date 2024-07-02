// Merge Sort Function
function mergeSort(arr) {
    // Base case: single element arrays are already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively split & merge the arrays
    return merge(mergeSort(left), mergeSort(right));
  }
  
  // Merge Function
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate the remaining elements (if any) from the left and right arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Example usage
  console.log(mergeSort([4, 2, 1, 3])); // Output: [1, 2, 3, 4]
  