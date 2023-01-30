function countPrimeNumbers () {
    /**
       * @var {Boolean} isPrime - True if number is prime or False
       * @var {Number} countPrimes - counter for primes
       * @var {Number} i - iterator
       * @var {Number} end - End limiter
       * @var {Number} mod - mod
       */
  
    let isPrime;
    let countPrimes = 0;
  
    for (let i = 2; i <= 100; i++) {
      isPrime = true;
      const end = Math.round(Math.sqrt(i));
  
      for (let mod = 2; mod <= end; mod++) {
        if (i % mod == 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        countPrimes = countPrimes + 1;
      }
    }
  
    console.log(countPrimes);
    return countPrimes;
  }
  
  /**
   * @var {Number} startCountPrimeNumbers - Define start
   * @var {Number} endCountPrimeNumbers - Define end
   */
  
  const startCountPrimeNumbers = window.performance.now();
  countPrimeNumbers();
  
  const endCountPrimeNumbers = window.performance.now();
  
  console.log('Execution time of printing countPrimeNumbers was ' + (endCountPrimeNumbers - startCountPrimeNumbers) + ' milliseconds.');
  