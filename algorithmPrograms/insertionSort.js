var utility =  require('../utility2/Utility')

var rl = utility.userInput();

var fileStream = require('fs');
var f = fileStream.readFileSync('insertionSort','utf8');

    utility.insertionSort(f);
    process.exit();