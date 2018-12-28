/***********************************************************************************
 *  Purpose         : Write a function sqrt to compute the square root of a nonnegative number c
                      given in the input using Newton's method.
 *  @file           : sqrt.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();
rl.question('Enter value of c: ',(c)=>{
var t =  utility.sqrt(c);
 console.log("t is: "+t);
 process.exit();

})