/***********************************************************************************
 *  Purpose         : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
                      the Linked List and Print the Anagrams in the Reverse Order.

 *  @file           : anaReverse.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 04-01-2019
 **********************************************************************************/


var Utility = require('../utility/Utility');
var linkedStack = require('../dataStructureProgram/Stack.js');

function printAnaprimes() {
    var stackLink = new linkedStack.Stack;

    // var Utility = require('../utility/utility');
    var show = require('util');

    var anaPrimes = [[]];
    anaPrimes = Utility.findAnaPrime(0, 1000);

    for (let i = 0; i < anaPrimes.length; i++) {
        stackLink.push(anaPrimes[i]);
    }

    console.log();
   

    var top = stackLink.getHead();

    console.log();
    console.log("Reversed LinkList->");
    console.log();
    stackLink.displayReverse(top);
}
printAnaprimes();