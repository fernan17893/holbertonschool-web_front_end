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
countPrimeNumbers();
const stop = performance.now;
console.log("Execution time of printing countPrimeNumbers was" + (stop - start) + "milliseconds");

