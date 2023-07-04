// if statements and for loops

const foo = false;
const bar = true;

if (foo) {
  console.log('foo is true');
}

if (foo || bar) {
  console.log('foo or bar is true');
}

if (foo && bar) {
  console.log('foo and bar is true');
} else {
  console.log('foo and bar are not both true');
}

let i = 0;
while (i < 10) {
  i++;
}
// console.log(i);

do {
  i++;
} while (i < 10);
console.log(i);

for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log(i);
