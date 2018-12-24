const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var utility = require('../utility/Utility');

rl.question('Enter value of t: ',(t)=>
rl.question('Enter value of v: ',(v)=>
{
    if(t > 50 || v > 120 || v  < 3){
        console.log('the formula is not valid if t is larger than 50 or v is larger then 120 or v is less then 3');
    }
    else
    {
        utility.windChill(t,v);
        process.exit();
    }
   

}
));