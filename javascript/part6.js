// functions

function square(x) {
  return x * x;
}

function printSomething() {
  console.log('This function only prints');
}

console.log(square(5));
printSomething();

function add(a, b) {
  return a + b;
}

console.log(`10 + 6 = ${add(10, 6)}`);

const isEven = (number) => {
  return number % 2 == 0;
};

const isOdd = (number) => !isEven(number);
console.log(isEven(6));
console.log(isOdd(6));

const logDecrementing = (num) => {
  if (num <= 0) {
    console.log(num);
    return;
  }
  console.log(num);
  logDecrementing(num - 1);
};

logDecrementing(10);
