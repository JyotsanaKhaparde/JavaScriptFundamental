/***********************************************************************************
 *  Purpose         : Simulates a gambler who start with $stake and place fair bets until
                      he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of
                      times he/she wins and the number of bets he/she makes. Run the experiment N
                      times, averages the results, and prints them out.
 *  @file           : Gambler.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

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