//Objects

const p1 = {
  pet: 'dog',
  name: 'Abigail',
  age: 30,
  items: ['tennisball', 'raquet', 'net']
};
console.log(p1);

console.log(p1['name']);
console.log(p1.name);

console.log(Object.keys(p1));

p1.age += 1;

console.log(p1);

const p2 = { ...p1, name: 'Frank' };

console.log(p2);
p1.age += 1;
console.log(p1, p2);

p1.items.push('painting');

console.log(p1, p2);
