const range = (start, end) => {
  return Array(end - 1)
    .fill()
    .map((_, index) => index + start)
}

const isPrime = someNumber => {
  return (
    someNumber > 1 &&
    range(2, someNumber - 1).every(divisor => someNumber % divisor !== 0)
  )
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(51))
console.log(isPrime(53))

// Find the total of sqrt of first k primes starting with some number n
const computeTotal = (n, k) => {
  let index = n
  const primes = []
  while (primes.length < k) {
    if (isPrime(index)) {
      primes.push(index)
    }
    index++
  }
  return primes.map(x => Math.sqrt(x)).reduce((p, x) => p + x)
}

console.log(computeTotal(2, 3))

