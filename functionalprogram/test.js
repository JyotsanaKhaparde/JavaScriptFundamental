/***********************************************************************************
 *  Purpose         : Print all Permutations of input string using iterative method.
 *  @file           : StringIterativePermutation.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

const readline = require('readline');
const utility = require('../utility/Utility');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

var a = 10;
var b = 20;
console.log("addition");

function add(){
    rl.question('Enter your name: ',(name)=>{//asking foe user input
        console.log("name: ",name);
    })
}

add();