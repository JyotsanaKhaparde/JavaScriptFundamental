/***********************************************************************************
 *  Purpose         : Program to read an integer as an input, convert to Binary using toBinary
                      function and perform the following functions - Swap nibbles and find the new number.
 *  @file           : binary.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();
rl.question('please enter decimal number: ',(number)=>{
    utility.binary(number);
    process.exit();
})