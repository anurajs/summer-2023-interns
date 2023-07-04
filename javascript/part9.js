// destructuring

let [first, second] = [5, 3];

console.log(first, second);

[first, second] = [second, first];
let [a, , c] = [1, 2, 3];
console.log(a, c);

console.log(first, second);

const { name: n, age } = { name: 'Tony', age: 30 };
console.log(n, age);

function destructured({ name: l, age }) {
  console.log(l);
  console.log(age);
}

destructured({ name: 'Stark', age: 50 });
