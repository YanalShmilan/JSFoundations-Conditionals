const prompt = require('prompt-sync')(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const a = parseInt(prompt('enter num 1: '));
const b = parseInt(prompt('enter num 2: '));
const c = prompt('operation: ');
if (c === '+') console.log(a + b);
if (c === '-') console.log(a - b);
if (c === '*') console.log(a * b);
if (c === '/') console.log(a / b);

const laila = prompt('which laila are you (A or B)');
if (laila === 'A');
console.log('You are the best Laila!');
