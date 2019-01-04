/***********************************************************************************
 *  Purpose         : A palindrome is a string that reads the same forward and backward, for
                      example, radar, toot, and madam. We would like to construct an algorithm to
                      input a string of characters and check whether it is a palindrome.      
 *  @file           : palindromeChecker.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 02-12-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();


rl.question('Enter any value ',(value)=>{
    if (isNaN(value))
         throw "No input or string found , Please Enter a valid input";

         
    utility.palindromChecker(value);
    
    process.exit();
})