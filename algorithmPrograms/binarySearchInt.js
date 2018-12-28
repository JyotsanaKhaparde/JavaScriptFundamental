/***********************************************************************************
 *  Purpose         :  Read in a list of numbre from File. Then prompt the user to enter a word to
                       search the list.The program reports if the search number is found in the list.
 *  @file           :  binarySearchInt.js
 *  @author         :  Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();

rl.question('Enter the number you want to search: ',(number)=>{
    utility.binarySearchOfInteger(number);
    process.exit();
})
