var utility = require('../utility/Utility')
//var read = require('readline-sync');
const linked = require('../dataStructureProgram/LinkedList.js');

var fs = require('fs');
var hash1 = fs.readFileSync('hash.txt','utf8'); //reading the hash.txt file into this programe
hash1 = hash1.toString().split(" ");  //convert string into an array
var hash = []
for (var i = 0; i < hash1.length; i++) {
    if (hash1 != '') {
        hash.push(hash1[i]);
    }
}
//create a array from a string
var arr = Array.from(hash);
arr.sort(); //sort the given array
console.log(arr);

//var number = read.question('enter any number: ');
var array = new Array(11);
var obj1 = new linked.LinkedList;
var obj2 = new linked.LinkedList;
var obj3 = new linked.LinkedList;
var obj4 = new linked.LinkedList;
var obj5 = new linked.LinkedList;
var obj6 = new linked.LinkedList;
var obj7 = new linked.LinkedList;
var obj8 = new linked.LinkedList;
var obj9 = new linked.LinkedList;
var obj10 = new linked.LinkedList;
var obj11 = new linked.LinkedList;

for (var j = 0; j < arr.length; j++) {
    var res = parseInt(arr[j]) % parseInt(arr.length); //to determine the reminder
   // console.log('check:', obj1.add(arr[j]));
    switch (parseInt(res)) {
        //saving reminders in respective arrays
        case 0:
            array[0] = obj1.add(arr[j]);
            break;
        case 1:
            array[1] = obj2.add(arr[j]);
            break;
        case 2:
            array[2] = obj3.add(arr[j]);
            break;
        case 3:
            array[3] = obj4.add(arr[j]);
            break;
        case 4:
            array[4] = obj5.add(arr[j]);
            break;
        case 5:
            array[5] = obj6.add(arr[j]);
            break;
        case 6:
            array[6] = obj7.add(arr[j]);
            break;
        case 7:
            array[7] = obj8.add(arr[j]);
            break;
        case 8:
            array[8] = obj9.add(arr[j]);
            break;
        case 9:
            array[9] = obj10.add(arr[j]);
            break;
        case 10:
            array[10] = obj11.add(arr[j]);
            break;
    }
    for (var k = 0; k < array.length; k++) {
        console.log("Slot " + k + " --> " + array[k]);
    }
   // console.log('stored:',arr[0]);
}