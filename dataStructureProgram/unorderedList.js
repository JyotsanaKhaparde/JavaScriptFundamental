/***********************************************************************************
 *  Purpose         : Read the Text from a file, split it into words and arrange it as Linked List.
                      Take a user input to search a Word in the List. If the Word is not found then add it
                      to the list, and if it found then remove the word from the List. In the end save the
                      list into a file
 *  @file           : unorderedList.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 31-12-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')
var rl = utility.userInput();


rl.question('Enter any word for checking: ',(word)=>{
    utility.unorderdeList(word);
    process.exit();
})