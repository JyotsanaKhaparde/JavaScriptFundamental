/***********************************************************************************
 *  Purpose         : Create a Program which creates Banking Cash Counter where people
                      come in to deposit Cash and withdraw Cash. Have an input panel to add people
                      to Queue to either deposit or withdraw money and dequeue the people. Maintain
                      the Cash Balance.
 *  @file           : bankingCashCounter.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 29-12-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = require('readline-sync');

var cash = rl.question('total cash balanc in bank:  ');
var people =  rl.question('number of people in a queue: ');

if (isNaN(cash) || isNaN(people))
         throw "No input or string found , Please Enter a valid input";

 if (cash === "" || people === "")
          throw "do not enter space, Please Enter a valid input";
         

var cash = parseInt(cash);
var people = parseInt(people);


const queue = require('../dataStructureProgram/Queue.js');
var obj = new queue.Queue; 

        for(var i = 0 ; i <= people ; i++)
        {
			obj.enqueue(i);
		}
        for(var i = 0 ; i < people ; i++ )
        {
		var choice = rl.question("Enter 1 for deposit money or 0 for withdrow money: ");
		var choice = parseInt(choice);
        if(choice==1)
        {
            var deposit = rl.question("Enter deposit amount: ");
            var deposit = parseInt(deposit);
            cash = cash+deposit;
            console.log("Total amount after deposit: ",cash);
        }
        else
        if(choice==0)
        {
        var withdrow = rl.question("Enter withdrow amount: ");
        var withdrow = parseInt(withdrow);
		cash = cash - withdrow;
        console.log("Total amount after withdrow: ",cash);
		}
		}