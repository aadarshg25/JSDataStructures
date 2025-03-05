function primeFactors(n) {
    let factors = [];
    
    // Check for number of 2s that divide n
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    // If n is a prime number > 2, add it to the list
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

let number = 100; 
let factorsArray = primeFactors(number);
console.log(`Prime factors of ${number}:`, factorsArray);
