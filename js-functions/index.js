function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function identityf(x) {
  return function() {
    return x;
  };
}

function addf(a) {
  return function(b) {
    return add(a, b);
  };
}

function liftf(fn) {
  return function(first) {
    return function(second) {
      return fn(first, second) 
    }
  }
}

const liftf2 = fn => first => second => fn(first, second)

const curry = (fn, ...first) => (...second) => fn(...first, ...second)

const twice = fn => a => fn(a, a)
const reverse = fn => (first, second) => fn(second, first)

const from = i => () => i++
const from2 = function (start) {
  return function() {
    var next = start
    start += 1
    return next
  }
}

const i = from2(0)
i()
console.log(i(), i())
