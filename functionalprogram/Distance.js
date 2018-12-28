/***********************************************************************************
 *  Purpose         : program that takes two integer x and y and prints the Euclidean distance.
 *  @file           : Distance.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

 
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
        process.exit();
    }));