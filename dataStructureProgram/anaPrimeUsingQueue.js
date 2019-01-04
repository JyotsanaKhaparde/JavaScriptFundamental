/***********************************************************************************
 *  Purpose         : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Queue using
                      the Linked List and Print the Anagrams from the Queue.

 *  @file           : anaPrimeUsingQueue.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 04-01-2019
 **********************************************************************************/

var Utility = require('../utility/Utility');
var linkedQueue = require('../dataStructureProgram/Queue.js');

function printAnaprimes() {
    var queueLink = new linkedQueue.Queue;

    // var Utility = require('../utility/utility');
    var show = require('util');

    var anaPrimes = [[]];
    anaPrimes = Utility.findAnaPrime(0, 1000);

    for (let i = 0; i < anaPrimes.length; i++) {
        queueLink.enqueue(anaPrimes[i]);
        //queueLink.push(anaPrimes[i]);
    }

    console.log();
   

    var top = queueLink.getHead();

    console.log();
    console.log("Reversed LinkList->");
    console.log();
    queueLink.print();
    //queueLink.displayReverse(top);
}
printAnaprimes();