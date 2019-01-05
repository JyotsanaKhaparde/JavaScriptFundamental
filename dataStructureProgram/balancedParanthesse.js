/***********************************************************************************
 *  Purpose         : Take an Arithmetic Expression where parentheses are used to order the
                      performance of operations. Ensure parentheses must appear in a balanced
                      fashion.

 *  @file           : balancedParanthesse.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 28-12-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')
var rl = utility.userInput();


rl.question('Enter expression ',(value)=>{
        if(value===" ")
        {
            console.log('please enter valid input');
        }
        else
        {
            utility.balancedParantheses(value);
            process.exit();
        } 
})
