/***********************************************************************************
 *  Purpose         : Take 2 string from user and find that string is anagr4am or not.
                      the start and end clicks.
 *  @file           : twoDPrime.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/



var Utility = require('../utility/Utility');
var show = require('util');

var twoDPrimes = [[], [], [], [], [], [], [], [], [], []];

var initial = 0;
var final = 100;

for (let i = 0; i < 10; i++)
{
   twoDPrimes[i] = Utility.findPrime(initial, final);

    //anaPrimes[i] = Utility.findAnaPrime(initial, final);
    initial = initial + 100;
    final = final + 100;
}

var start = 0;
var end = 100;

console.log("---Range of Prime numbers ---");
console.log("");

for (let i = 0; i < 10; i++)
{
    show.print(twoDPrimes[i]);
    start = start + 100;
    end = end + 100;
    console.log();
}