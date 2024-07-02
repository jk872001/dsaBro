function insertionSort(arr) {
    let n = arr.length;
  
    // Traverse through 1 to n
    for (let i = 1; i < n; i++) {
      // Store the current element
      let current = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1], that are greater than the current element,
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place the current element at the correct position
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
  // Example usage
  console.log(insertionSort([4, 2, 1, 3])); // Output: [1, 2, 3, 4]
  