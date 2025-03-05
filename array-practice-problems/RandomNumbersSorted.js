function generateRandomNumbers(count, min, max) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function findSecondLargestAndSmallestSorted(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b); // Sorting in ascending order
    return {
        secondSmallest: sortedArr[1],  
        secondLargest: sortedArr[sortedArr.length - 2] 
    };
}

// Generate and store 10 random 3-digit numbers
let randomNumbers = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", randomNumbers);

let sortedResults = findSecondLargestAndSmallestSorted(randomNumbers);
console.log("Sorted Numbers:", [...randomNumbers].sort((a, b) => a - b)); 
console.log("With Sorting - Second Largest:", sortedResults.secondLargest);
console.log("With Sorting - Second Smallest:", sortedResults.secondSmallest);
