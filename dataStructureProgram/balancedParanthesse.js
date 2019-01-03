/***********************************************************************************
 *  Purpose         : Take an Arithmetic Expression where parentheses are used to order the
                      performance of operations. Ensure parentheses must appear in a balanced
                      fashion.

 *  @file           : balancedParanthesse.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();


rl.question('Enter expression ',(value)=>{
    utility.balancedParantheses(value);
    process.exit();
})
