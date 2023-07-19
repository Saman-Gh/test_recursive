function findMax(arr) {
    console.log("Array:", arr);
  
    // Base case: If the array has only one element, return that element
    if (arr.length === 1) {
      console.log("Reached base case. Maximum value found:", arr[0]);
      return arr[0];
    }
  
    // Recursive case: Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
  
    console.log("Splitting array into two halves:");
    console.log("Left array:", leftArr);
    console.log("Right array:", rightArr);
  
    // Recursive calls to find the maximum in each half
    const leftMax = findMax(leftArr);
    console.log("Maximum value found in the left half:", leftMax);
  
    const rightMax = findMax(rightArr);
    console.log("Maximum value found in the right half:", rightMax);
  
    // Compare the maximums of the two halves and return the larger one
    const max = Math.max(leftMax, rightMax);
    console.log("Maximum value found:", max);
    return max;
  }
  
  const arr = [45, 23, 58, 85, 62];
  const max = findMax(arr);
  console.log("Overall maximum value:", max);
  