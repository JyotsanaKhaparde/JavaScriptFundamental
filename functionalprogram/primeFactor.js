/***********************************************************************************
 *  Purpose         : Computes the prime factorization of N using brute force.
 *  @file           : primeFactor.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

 
var utility =  require('../utility/Utility')

var rl = utility.userInput();

rl.question('Enter any number : ',(number)=>{
    if(number>0)
    {
        utility.primeFactorization(number);
        process.exit();
    }
    else
    {
        console.log("please enter positive number")
    }
});
