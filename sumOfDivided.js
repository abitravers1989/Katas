
const isPrime = (n) => {
  if (n !== Math.round(n) || n <= 1) {return false}
  let isPrimes = true;
  for (let i = 2; i <= Math.sqrt(n); i+=1) {
     if (n % i === 0) {isPrimes = false}
  }
  return isPrimes;
};

const sumOfDivided = list => {
  const primeFactorArray = [];
  const savedNums = [];
  list.forEach((item) => {
    if ((typeof item) === 'number') {
      for (let i = 1; i <= item; i+=1) {
      if ((item % i) === 0) {
        let returnArrays;
        if (isPrime(i) === true) {
          savedNums.push(i)
          returnArrays = [i, item]
          primeFactorArray.push(returnArrays)
        }
      }
     }
    }
  })
  const newArray = [];
  savedNums.forEach(item => {
    if(!newArray.includes(item)) {
      newArray.push(item)
    }
  })
  
const finalArray = [];
  newArray.forEach(num => {
    const primeFactorsArray = [];
    list.forEach((listItem) => {
      if (listItem % num === 0) {
        if (primeFactorsArray.includes(num)) {
          primeFactorsArray[1] += listItem
        } else {
          primeFactorsArray.push(num, listItem)
        }
      }
    })
    finalArray.push(primeFactorsArray)
  })
  return finalArray;
}


// console.log('----->', isPråime(2))
sumOfDivided([12, 15]) /* [ [2, 12], [3, 27], [5, 15] ] */
console.log(sumOfDivided([15, 21, 24, 30, 45]))
console.log(sumOfDivided([15, 15, 1000101]))
const today = new Date()
const timeNow = `${today.getMinutes()  }:${  today.getSeconds()}` 
console.log('----->1st time', timeNow)
console.log(sumOfDivided([15, 15, 277777777, 1000101]))
const today2 = new Date()
const timeNow2 = `${today2.getMinutes()  }:${  today2.getSeconds()}` 
console.log('----->1st time', timeNow2)

// current solution takes 1 min

