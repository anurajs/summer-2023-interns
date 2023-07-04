// fizzbuzz
// log out all the numbers betweeen 1 and 100
// if a number is divisble by 5 and 3 log fizz buzz
// if a number is divisible by 3 log fizz
// if a number is divible by 5 log buzz

for (let i = 1; i <= 100; i++) {
  let temp = '';
  if (i % 3 == 0) {
    temp += 'Fizz';
  }
  if (i % 5 == 0) {
    temp += 'Buzz';
  }
  console.log(temp.length == 0 ? i.toString() : temp);
}
