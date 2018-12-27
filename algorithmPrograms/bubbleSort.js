var utility =  require('../utility2/Utility')

var rl = utility.userInput();

var fileStream = require('fs');
var f = fileStream.readFileSync('bubbleSort','utf8');

    utility.bubbleSort(f);
    process.exit();
