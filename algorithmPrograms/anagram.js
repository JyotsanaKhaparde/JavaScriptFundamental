/***********************************************************************************
 *  Purpose         : Take 2 string from user and find that string is anagr4am or not.
                      the start and end clicks.
 *  @file           : anagram.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();

rl.question('Enter first string : ',(string1)=>
rl.question('Enter second string : ',(string2)=>{
   utility.anagram(string1,string2);
  

    process.exit();
}));
