// Boolean

const foo = true;
const bar = false;

console.log('foo == true', foo == true);
console.log('bar == 0', bar == 0);
console.log('foo == bar', foo == bar);

console.log('foo != bar', foo != bar);

const num1 = 5;
const num2 = 10;
console.log('num1 < num2', num1 < num2);

const a = 0;
const b = '0';
console.log(`0 == '0'`, a == b);

console.log(NaN == true, NaN == false, NaN == NaN, Number.isNaN(NaN));
console.log(null == false);
