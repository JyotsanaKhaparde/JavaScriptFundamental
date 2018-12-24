const readline = require('readline');
const rl = readline.createInterface({
    input  : process.stdin,
    output : process.stdout

});

var utility =  require('../utility/Utility');


rl.question('enter any number: ',(n)=>{
    utility.couponNumber(n);
    process.exit();

});


