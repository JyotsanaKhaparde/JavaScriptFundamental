const readline = require('readline');
const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

    var utility = require('../utility/Utility');

    rl.question('Enter value of x : ',(x)=>
    rl.question('Enter value of y : ',(y)=>
    {
        utility.distance(x,y);
    }));