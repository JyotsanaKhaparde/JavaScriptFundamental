/***********************************************************************************
 *  Purpose         : Take user Input and Replace String Template “Hello <<UserName>>, How are you?”
 *  @file           : StringReplace.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();

rl.question("please enter your name: ",(name)=>{
    utility.replceName(name);
    process.exit();
});





