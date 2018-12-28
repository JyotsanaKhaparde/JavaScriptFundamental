/***********************************************************************************
 *  Purpose         : There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be
                      returned by Vending Machine. Write a Program to calculate the minimum number
                      of Notes as well as the Notes to be returned by the Vending Machine as a change.
 *  @file           : vendingMatchine.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility2/Utility')

var rl = utility.userInput();


function VendingMachine ()
{
    rl.question("Enter change to be returned",(amount) =>
    {
        utility.vendingMachine(amount);
        process.exit();
    });
    

}VendingMachine();