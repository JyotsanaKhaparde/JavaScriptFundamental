/***********************************************************************************
 *  Purpose         : Reads an string from file prints them in sorted order using Bubble Sort.
 *  @file           : bubbleSortOfString.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();

var fileStream = require('fs');
var f = fileStream.readFileSync('bubbleSortOfString','utf8');

    utility.bubbleSortOfString(f);
    process.exit();
