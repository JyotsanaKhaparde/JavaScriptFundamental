/***********************************************************************************
 *  Purpose         : Take year as a input from user and find that year is leap year or not. 
 *  @file           : LeapYear.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

var utility = require('../utility/Utility');
rl.question("enter year: ",(year)=>{
    utility.leapYear(year);

}
)