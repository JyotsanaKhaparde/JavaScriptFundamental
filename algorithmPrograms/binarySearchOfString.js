/***********************************************************************************
 *  Purpose         : Read in a list of words from File. Then prompt the user to enter a word to
                      search the list.The program reports if the search word is found in the list.
 *  @file           : binarySearchOfInteger.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();

rl.question('Enter the word you want to search: ',(word)=>{
    utility.binarySearchOfString(word);
    process.exit();
})

