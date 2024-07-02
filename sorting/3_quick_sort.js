// Quick Sort Function
function quickSort(arr, low = 0, high = arr.length - 1) {
    // Base case: If the sub-array has more than one element
    if (low < high) {
      // Partition the array and get the pivot index
      const pivotIndex = partition(arr, low, high);
  
      // Recursively sort elements before and after partition
      quickSort(arr, low, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, high);
    }
    
    return arr; // Return the sorted array
  }
  
  // Partition Function
  function partition(arr, low, high) {
    // Choose the pivot element (last element of the sub-array)
    const pivot = arr[high];
    let i = low - 1;
  
    // Traverse through the array and rearrange elements
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        // Swap elements
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  
    // Place the pivot element in its correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  
    // Return the index of the pivot element
    return i + 1;
  }
  
  // Example usage
  console.log(quickSort([4, 2, 1, 3])); // Output: [1, 2, 3, 4]
  