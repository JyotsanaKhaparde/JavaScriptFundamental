/***********************************************************************************
 *  Purpose         :  A program with cubic running time. Read in N integers and counts the
                       number of triples that sum to exactly 0.

 *  @file           : triples.js
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

rl.question("Enter value of N: ",(N)=>{
    addNumber(N);
});

function addNumber(N){
    var array = [];
    var len = parseInt(N);
    sum(len);

    function sum(len){
        if(len>0){
            rl.question("Enter element: ",(j)=>{
                array.push(parseInt(j));
                len--;
                sum(len);
            });
        }else{
            utility.triples(array,N);
            process.exit();
        }
    }

              
   // utility.triples(array,N);


}