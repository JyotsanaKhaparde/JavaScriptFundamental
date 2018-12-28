/*
*Synchronous Readline for interactively running to have a conversation with 
*the user via a console(TTY).readlineSync tries to let your script have a 
*conversation with the user via a console, even when the input/output stream is redirected
*/

var read = require('readline-sync');
var number = read.question('Enter a number: ');
console.log('number is: ',number);
