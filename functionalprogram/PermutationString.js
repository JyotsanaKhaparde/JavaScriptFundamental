

/***********************************************************************************
 *  Purpose         : Take string as a input from user and find all permutation of a String.
 *  @file           : PermutationString.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');

rl.question('Enter a string :',(string)=>
{ 
   var str = string.toString();
   //console.log('string is :',str);
   var arr = [];
   for(let i = 0;i<str.length;i++)
   {
       arr.push(str.charAt(i.toString()));
   }
   
       utility.strIterativePermutation(arr,0);
       process.exit();
});