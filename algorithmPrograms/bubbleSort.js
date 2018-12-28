/***********************************************************************************
 *  Purpose         : Reads an integers from file prints them in sorted order using Bubble Sort.
 *  @file           : bubbleSort.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();

var fileStream = require('fs');
var f = fileStream.readFileSync('bubbleSort','utf8');

    utility.bubbleSort(f);
    process.exit();
