/***********************************************************************************
 *  Purpose         : This program takes user input N and prints a table of the
                      powers of 2 that are less than or equal to 2^N. .
 *  @file           : PowerOfTwo.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

const readline = require('readline');

const rl = readline.createInterface({
    output: process.stdout,
    input: process.stdin
});

var utility = require('../utility/Utility');

rl.question('please enter any number ',(number)=>{
    utility.powerOf2(number);
});