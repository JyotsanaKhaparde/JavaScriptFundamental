const readline = require('readline');

const rl = readline.createInterface({
    output: process.stdout,
    input: process.stdin
});

var utility = require('../utility/Utility');

rl.question('please enter any number ',(number)=>{
    utility.powerOf2(number);
});