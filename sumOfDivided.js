const isPrime = (n) => {
  if (n !== Math.round(n) || n <= 1) {return false}
  let isPrimes = true;
  for (let i = 2; i <= Math.sqrt(n); i+=1) {
     if (n % i === 0) {isPrimes = false}
  }
  return isPrimes;
};

const sumOfDivided = list => {
  const savedNums = [];
  list.forEach((item) => {
    console.log('----->item',item )
    if ((typeof item) === 'number') {
      console.log('----->heress')
      for (let i = 1; i <= item; i+=1) {
        console.log('----->i', i)
      if ((item % i) === 0) {
        if (isPrime(i) === true) {
          savedNums.push(i)
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

  newArray.sort((a, b) => a - b)
  console.log('----->newArray', newArray)
  
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


//console.log('----->', sumOfDivided([15,21,24,30,45]))
//console.log('----->', sumOfDivided([ 107, 158, 204, 100, 118, 123, 126, 110, 116, 100 ]))

console.log('----->', sumOfDivided([ -29804, -4209, -28265, -72769, -31744 ]))