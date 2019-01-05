/***********************************************************************************
 *  Purpose         : program to find the roots of the equation a*x*x + b*x + c.
 *  @file           : Quadratic.js
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

rl.question('Enter value of a : ',(a)=>
rl.question('Enter value of b: ',(b)=>
rl.question('Enter value of c: ',(c)=>
{
    utility.quadratic(a,b,c);
    process.exit();
}

)));