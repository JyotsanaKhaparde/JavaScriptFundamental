var utility =  require('../utility/Utility')

var rl = require('readline-sync');

var cash = rl.question('total cash balanc in bank:  ');
var people =  rl.question('number of people in a queue: ');
var cash = parseInt(cash);
var people = parseInt(people);


const queue = require('../dataStructureProgram/Queue.js');
    var obj = new queue.Queue; 


		
		
		for(var i = 0 ; i <= people ; i++) {
			obj.enqueue(i);
		}
		for(var i = 0 ; i < people ; i++ ) {
		var choice = rl.question("Enter 1 for deposit money or 0 for withdrow money: ");
		var choice = parseInt(choice);
		if(choice==1) {
        
            var deposit = rl.question("Enter deposit amount: ");
            var deposit = parseInt(deposit);
             cash = cash+deposit;
            console.log("Total amount after deposit: ",cash);
            //obj.deQueue();
        }else
        if(choice==0){

        
			
        var withdrow = rl.question("Enter withdrow amount: ");
        var withdrow = parseInt(withdrow);
			 cash = cash - withdrow;
            console.log("Total amount after withdrow: ",cash);
			//obj.deQueue();
			

		}
		}