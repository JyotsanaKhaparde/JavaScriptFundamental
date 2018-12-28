/***********************************************************************************
 *  Purpose         : Program that outputs the binary (base 2) representation of
                      the decimal number typed as the input.
 *  @file           : toBinary.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility2/Utility')

var rl = utility.userInput();

rl.question('Enter decimal number :',(number)=>{
   var reverse =  utility.toBinary(number);
  console.log('decimal to binary is : ',(reverse));
   process.exit();
})