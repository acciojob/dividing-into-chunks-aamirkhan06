const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
    let currentSubarray = [];

    for (const num of arr) {
        if (currentSubarray.reduce((sum, val) => sum + val, 0) + num <= n) {
            // Add the current number to the current subarray
            currentSubarray.push(num);
        } else {
            // Start a new subarray with the current number
            result.push(currentSubarray);
            currentSubarray = [num];
        }
    }

    // Add the last subarray (if any)
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
