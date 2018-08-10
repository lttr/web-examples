// binary funcitons
const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
// unary functions
const doubl = a => a * 2
const square = a => a ** 2

// functions returning functions
const identityf = x => () => x
const addf = a => b => add(a, b)
const liftf = fn => first => second => fn(first, second)
const curry = (fn, ...first) => (...second) => fn(...first, ...second)

const twice = fn => a => fn(a, a)
console.log(twice(add)(2))

const reverse = fn => (first, second) => fn(second, first)

// composing functions
const composeu = (f, g) => a => g(f(a))
console.log(composeu(doubl, square)(5))

const composeb = (f, g) => (a, b, c) => g(f(a, b), c)
console.log(composeb(add, mul)(2, 3, 5))

const limit = (fn, count) => (a, b) => {
  if (count >= 1) {
    count -= 1
    return fn(a, b)
  }
  return undefined
}
const limitedAdd = limit(add, 1)
console.log(limitedAdd(1, 2), limitedAdd(2, 3))

const from = i => () => i++
const fromOne = from(1)
console.log(fromOne(), fromOne(), fromOne())

const to = (gen, end) => () => {
  const value = gen()
  if (value < end) {
    return value
  }
  return undefined
}
const toThree = to(from(1), 3)
console.log(toThree(), toThree(), toThree())

const fromTo = (start, end) => to(from(start), end)
const fromToOneTwo = fromTo(1, 2)
console.log(fromToOneTwo(), fromToOneTwo())

const element = (arr, gen) => () => {
  const index = gen()
  if (index !== undefined) {
    return arr[index]
  }
}
const ele = element(['a', 'b', 'c'], fromTo(1, 3))
console.log(ele(), ele(), ele())
