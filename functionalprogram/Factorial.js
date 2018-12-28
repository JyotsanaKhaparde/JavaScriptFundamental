/***********************************************************************************
 *  Purpose         : This program take number as input and find factorial of that number.
 *  @file           : Factorial.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/


var utility =  require('../utility/Utility')
var rl = utility.userInput();


rl.question('Enter any number: ',(number)=>{
    utility.factorial(number);
    process.exit();
})

