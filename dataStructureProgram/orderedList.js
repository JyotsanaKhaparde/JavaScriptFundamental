/***********************************************************************************
 *  Purpose         : ­ Read .a List of Numbers from a file and arrange it ascending Order in a
                       List. Take user input for a number, if found then pop the number out of the
                       list else insert the number in appropriate position
 *  @file           : orderedList.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 31-12-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();


rl.question('Enter any word for checking: ',(number)=>{

    // if (isNaN(number))
    //      throw "No input or string found , Please Enter a valid input";

   


    utility.orderedList(number);
    process.exit();
})