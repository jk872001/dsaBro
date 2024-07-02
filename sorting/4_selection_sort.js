// Selection Sort Function
function selectionSort(arr) {
    let n = arr.length;
  
    // Traverse through the entire array
    for (let i = 0; i < n-1; i++) {
      // Assume the current element is the minimum
      let minIndex = i;
  
      // Check the rest of the array to find the true minimum
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // If the minimum is not the current element, swap them
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr; // Return the sorted array
  }
  
  // Example usage
  console.log(selectionSort([4, 2, 1, 3])); // Output: [1, 2, 3, 4]
  