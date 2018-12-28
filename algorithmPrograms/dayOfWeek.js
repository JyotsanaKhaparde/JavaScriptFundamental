/***********************************************************************************
 *  Purpose         : function that takes a date as input and prints the day of the week that
                      date falls on..
 *  @file           : dayOfWeek.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();

rl.question('Enter month: ',(m)=>
rl.question('Enter day: ',(d)=>
rl.question('Enter year: ',(y)=>
{
    utility.dayOfWeek(m,d,y);
    process.exit();
})));