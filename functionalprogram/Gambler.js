const readline = require('readline');
const rl = readline.createInterface({
    input  : process.stdin,
    output : process.stdout

});
var utility =  require('../utility/Utility')

rl.question('Enter value of stack: ',(stack)=>
rl.question('Enter value of goal: ',(goal)=>
rl.question('Enter trails: ',(trails)=>
{
    utility.gambler(stack,goal,trails);
    process.exit();
}
)));