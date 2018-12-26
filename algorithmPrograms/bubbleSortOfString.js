var utility =  require('../utility2/Utility')

var rl = utility.userInput();

var fileStream = require('fs');
var f = fileStream.readFileSync('bubbleSortOfString','utf8');

    utility.bubbleSortOfString(f);
    process.exit();
