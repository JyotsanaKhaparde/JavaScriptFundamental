var utility =  require('../utility2/Utility')

var rl = utility.userInput();

/*var fileStream = require('fs');
var f = fileStream.readFileSync('bubbleSortOfInteger','utf8');

    utility.bubbleSortOfInteger(f);
    process.exit();*/

    rl.question('Enter the size of your array: ',function(size)
    {
        try
        {
            if(isNaN(size))throw 'not a number'//throws this exception if input is string
            if(size<0)throw 'is not a positive number'//throws this exception if input is negative
            utility.bubbleSortOfInteger(size);
        }
        catch(err)
        {
            console.log(size+" is " +err);
        }
    });
