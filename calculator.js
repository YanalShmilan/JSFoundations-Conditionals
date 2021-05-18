const prompt = require('prompt-sync')(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const a = prompt('enter num 1: ');
const b = prompt('enter num 2: ');
const c = prompt('operation: ');
if (isNaN(a) || isNaN(b)) {
  console.log('invalid input');
} else {
  if (c !== '+' && c !== '-' && c !== '+' && c !== '*' && c !== '/') {
    console.log('operation is not valid');
  } else {
    if (c === '+') console.log(parseInt(a) + parseInt(b));
    if (c === '+') console.log(parseInt(a) - parseInt(b));
    if (c === '+') console.log(parseInt(a) * parseInt(b));
    if (c === '+') console.log(parseInt(a) / parseInt(b));
  }
}
