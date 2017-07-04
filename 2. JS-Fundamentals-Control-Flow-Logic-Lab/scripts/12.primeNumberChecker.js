function isPrime(n) {
    let isPrime = true;
    for(let currentDivisor = 2; currentDivisor < Math.sqrt(n); currentDivisor++) {
        if(n % currentDivisor === 0) {
            isPrime = false;
        }
    }

    return isPrime && n > 1;
}

console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(81));