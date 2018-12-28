/***********************************************************************************
 *  Purpose         : take number as a input from user and prints the Nth harmonic number:
 *  @file           : harmonicNumber.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')
var rl = utility.userInput();

rl.question('enter any number: ',(number)=>{
    if(number <0){
        console.log('please enter positive number')
    }
    else{
        utility.harmonic(number);
        process.exit();
    }
});