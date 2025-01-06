function hasTargetSum(array, target) {
  // Create a set to store the numbers we've seen so far
  const seenNumbers = new Set();

  // Iterate through the array
  for (let num of array) {
    // Calculate the complement of the current number (target - num)
    const complement = target - num;

    // If the complement exists in the set, we've found a pair
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Otherwise, add the current number to the set
    seenNumbers.add(num);
  }

  // If no pair is found that sums to the target, return false
  return false;
}

/* 
  Time Complexity: O(n)
  - We loop through the array once, and for each number, we perform constant-time operations (set lookup and insertion).
  - Hence, the time complexity is O(n), where n is the number of elements in the array.
*/

/* 
  Pseudocode:
  1. Create an empty set to track numbers we've seen.
  2. Loop through the array of numbers:
     - For each number, compute its complement (target - number).
     - If the complement is in the set, return true (pair found).
     - Otherwise, add the current number to the set.
  3. If no pair is found by the end of the loop, return false.
*/

/*
  Explanation:
  The idea behind this approach is to keep track of the numbers we've already encountered in a set. 
  For each number in the array, we check if there is another number that we've already seen such that the two numbers add up to the target. 
  Using a set allows us to check if the complement (target - current number) is present in constant time, O(1).
  This makes the solution efficient, with a time complexity of O(n), where n is the length of the array.
*/

// Example Test Cases:
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Should return true (3 + 7 = 10)

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25)); // Should return true (19 + 6 = 25)

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4)); // Should return false (no two numbers add up to 4)
}

module.exports = hasTargetSum;

