// Objects and Arrays

const l = Array();
l.push('wwww');
l.push(232);
console.log(l);
console.log(l[0]);
l.pop();
console.log(l);

const str = 'This is a string of words';

console.log(str.split(' '));

const foo = [1, 3, 5, 7];

let sum = 0;
for (let i = 0; i < foo.length; i++) {
  sum += foo[i];
}
console.log(sum);

sum = 0;
for (let i of foo) {
  sum += i;
}
console.log(sum);
