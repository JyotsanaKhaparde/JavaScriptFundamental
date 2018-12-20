const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

var utility = require('../utility/Utility');
rl.question("enter year: ",(year)=>{
    utility.leapYear(year);

}
)