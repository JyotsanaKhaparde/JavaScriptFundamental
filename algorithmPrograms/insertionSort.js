/***********************************************************************************
 *  Purpose         : Reads a strings from standard input and prints them in sorted order.
                      Uses insertion sort.
 *  @file           : insertionSort.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();

var fileStream = require('fs');
var f = fileStream.readFileSync('insertionSort','utf8');

    utility.insertionSort(f);
    process.exit();