/***********************************************************************************
 *  Purpose         : takes a command­line argument N, asks you to think of a number
                      between 0 and N­1, where N = 2^n, and always guesses the answer with n
                      questions
 *  @file           : guessNumber.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/


var utility=require('../utility/Utility');
function find() 
{
    //taking command line argument

    var number=+process.argv[2];

    //validation of entered number

    if(number>=0)
    {
      var no = Math.pow(2,number);
      //console.log(no);
      utility.guessnumber(no);
      process.exit();
    }
   
    else
    console.log("Please enter correct Number");
}
find();

