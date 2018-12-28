/***********************************************************************************
 *  Purpose         : Function to calculate monthlyPayment that reads in three command­line 
                      arguments P, Y, and R and calculates the monthly payments
 *  @file           : monthlyPayment.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();

rl.question('Enter year: ',(y)=>
rl.question('Enter principal loan amount: ',(p)=>
rl.question('Enter percent interest: ',(r)=>{
    utility.monthlyPayment(y,p,r);
    process.exit();
})))