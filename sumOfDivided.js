const isPrime = n => {
  if (n !== Math.round(n) || n <= 1) {
    return false;
  }
  let isPrimes = true;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      isPrimes = false;
    }
  }
  return isPrimes;
};

const sumOfDivided = list => {
  const primeFactorDividers = [];
  const deDuplicatedPrimeFactorDividers = [];

  const removeDuplicatePrimeFactors = factorsArray => {
    factorsArray.forEach(item => {
      if (!deDuplicatedPrimeFactorDividers.includes(item)) {
        deDuplicatedPrimeFactorDividers.push(item);
      }
    });
  };
  const positivePrimeSort = () => {
    deDuplicatedPrimeFactorDividers.sort((a, b) => a - b);
  };

  const negativePrimeSort = () => {
    deDuplicatedPrimeFactorDividers.sort((a, b) => b - a);
  };

  list.forEach(item => {
    if (item >= 0) {
      for (let i = 1; i <= item; i += 1) {
        if (item % i === 0) {
          if (isPrime(i) === true) {
            primeFactorDividers.push(i);
            removeDuplicatePrimeFactors(primeFactorDividers);
            positivePrimeSort();
          }
        }
      }
    }
    if (item < 0) {
      for (let z = 0; z >= item; z -= 1) {
        if (item % z === 0) {
          if (isPrime(Math.abs(z)) === true) {
            primeFactorDividers.push(z);
            removeDuplicatePrimeFactors(primeFactorDividers);
            negativePrimeSort();
          }
        }
      }
    }
  });
  
  const finalArray = [];
  deDuplicatedPrimeFactorDividers.forEach(num => {
    const primeFactorsArray = [];
    list.forEach(listItem => {
      if (listItem % num === 0) {
        if (primeFactorsArray.includes(num)) {
          primeFactorsArray[1] += listItem;
        } else {
          primeFactorsArray.push(num, listItem);
        }
      }
    });
    finalArray.push(primeFactorsArray);
  });
  return finalArray;
};

// console.log('----->', sumOfDivided([15,21,24,30,45]))
// console.log('----->', sumOfDivided([ 107, 158, 204, 100, 118, 123, 126, 110, 116, 100 ]))

console.log('----->', sumOfDivided([-29804, -4209]));
// -28265, -72769, -31744
