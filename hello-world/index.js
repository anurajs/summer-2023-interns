import secretNumber from './lib.js';
import { v4 } from 'uuid';
import fetch from 'node-fetch';

console.log('hello world');

console.log(secretNumber);

console.log(v4());

async function fetchThis() {
  let result = await fetch('https://randomuser.me/api/');
  result = await result.json();
  console.log(result.results[0].name.first);
}

fetchThis();
