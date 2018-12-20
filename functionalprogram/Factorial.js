const readline = require('readline');
const rl = readline.createInterface({
    input  : process.stdin,
    output : process.stdout

});
var utility =  require('../utility/Utility')

rl.question('Enter any number: ',(number)=>{
    utility.factorial(number);
})

