console.log('kkk');

var fs = require('fs')
console.log('2');

var data = fs.readFile('inventory.json');
console.log('3');

var obj = JSON.parse(data);
console.log('4');

console.log(obj);


