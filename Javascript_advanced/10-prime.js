function countPrimeNumbers () {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
            break;
        }
        }
        if (prime) count++;
    }
    return count;
}

const start = performance.now();
countPrimeNumbers(100);
const stop = performance.now;
console.log("Execution time of printing countPrimeNumbers 100 times was " + (stop - start) + " milliseconds");
