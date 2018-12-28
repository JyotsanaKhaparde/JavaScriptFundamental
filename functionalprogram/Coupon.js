/***********************************************************************************
 *  Purpose         : Print all Permutations of input string using iterative method.Given N distinct Coupon Numbers, how many random numbers do you
                      need to generate distinct coupon number? This program simulates this random
                      process.
 *  @file           : Coupon.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

 
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


