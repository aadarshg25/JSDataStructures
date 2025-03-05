function findTriplets(arr) {
    let triplets = [];

    // Sort the array to apply two-pointer approach
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 2; i++) {
    
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1, right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);

                // Move left and right pointers to avoid duplicates
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return triplets;
}

let numbers = [-1, 0, 1, 2, -1, -4];
console.log("Triplets that sum to zero:", findTriplets(numbers));
