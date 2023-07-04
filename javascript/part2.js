//Strings

let foo = 'foo';
const bar = 'bar';

const foobar = foo + bar;

console.log(foobar);
console.log(`${foo}${bar} whatever else you want in the string`);

foo = foo.replaceAll('o', 'b');
console.log(foo);
