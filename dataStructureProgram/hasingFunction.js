// var utility = require('../utility/Utility')
// //var read = require('readline-sync');
// const linked = require('../dataStructureProgram/LinkedList.js');

// var fs = require('fs');
// var hash1 = fs.readFileSync('hash.txt','utf8'); //reading the hash.txt file into this programe
// hash1 = hash1.toString().split(" ");  //convert string into an array
// var hash = []
// for (var i = 0; i < hash1.length; i++) {
//     if (hash1 != '') {
//         hash.push(hash1[i]);
//     }
// }
// //create a array from a string
// var arr = Array.from(hash);
// arr.sort(); //sort the given array
// console.log(arr);

// //var number = read.question('enter any number: ');
// var array = new Array(11);
// var obj1 = new linked.LinkedList;
// var obj2 = new linked.LinkedList;
// var obj3 = new linked.LinkedList;
// var obj4 = new linked.LinkedList;
// var obj5 = new linked.LinkedList;
// var obj6 = new linked.LinkedList;
// var obj7 = new linked.LinkedList;
// var obj8 = new linked.LinkedList;
// var obj9 = new linked.LinkedList;
// var obj10 = new linked.LinkedList;
// var obj11 = new linked.LinkedList;

// for (var j = 0; j < arr.length; j++) {
//     var res = parseInt(arr[j]) % parseInt(arr.length); //to determine the reminder
//    // console.log('check:', obj1.add(arr[j]));
//     switch (parseInt(res)) {
//         //saving reminders in respective arrays
//         case 0:
//             array[0] = obj1.add(arr[j]);
//             break;
//         case 1:
//             array[1] = obj2.add(arr[j]);
//             break;
//         case 2:
//             array[2] = obj3.add(arr[j]);
//             break;
//         case 3:
//             array[3] = obj4.add(arr[j]);
//             break;
//         case 4:
//             array[4] = obj5.add(arr[j]);
//             break;
//         case 5:
//             array[5] = obj6.add(arr[j]);
//             break;
//         case 6:
//             array[6] = obj7.add(arr[j]);
//             break;
//         case 7:
//             array[7] = obj8.add(arr[j]);
//             break;
//         case 8:
//             array[8] = obj9.add(arr[j]);
//             break;
//         case 9:
//             array[9] = obj10.add(arr[j]);
//             break;
//         case 10:
//             array[10] = obj11.add(arr[j]);
//             break;
//     }
//     //for (var k = 0; k < array.length; k++) {
//         console.log("Slot " + k + " --> " + array[k]);
//    // }
//    // console.log('stored:',arr[0]);
// }



var linked = require('../dataStructureProgram/LinkedList.js');
var utility = require('../utility/Utility');
//var filestream = require('fs');
var dis = require('util');
var read = require('readline-sync');
//var f = filestream.readFileSync('numbers.txt', 'utf8');//read the file data in string
// var brr = f.split(' ');//split in the array form
var brr = utility.readAllFromFile('hash.txt');
var arr = new Array(10);
var n, remainder;
for (let index = 0; index < brr.length; index++) 
{
    n = brr[index];
    remainder = n % 10;//calculate the remainder
    if (arr[remainder] === undefined)   //if array does not contain any item in it means it has undefined
    {
        arr[remainder] = new linked.LinkedList;//create a new linked list to that index add item.
        (arr[remainder]).add(n);
    } 
    else 
    {
        arr[remainder].add(n);      //add item to older linked list
    }
} 
var str = "";
for (let index = 0; index < 10; index++) //for printing the item of hash function
{
    dis.print(index + " ====> ");
    try 
    {
        arr[index].printList();
    } 
    catch (err) 
    {
        console.log("empty index");
    }
}
var number = read.question(' Enter the number you want to search \n');
if(!isNaN(number))  //for check it is number or not
{ 
    remainder = Number(number % 10);
    if (arr[remainder] === undefined) 
    {   
        //if array does not contain any item in it means it has undefined
        arr[remainder] = new linked.LinkedList;     //create a new linked list to that index add item.
    } 
    if (arr[remainder].search(number)) 
    {
        console.log("The number is found in file");
        var indexOfSearch =  arr[remainder].indexOf(number);
        arr[remainder].removeFrom(indexOfSearch);
        arr[remainder].printList();
    }
    else
    {
        console.log("Number is not found in file");
        arr[remainder].add(number);
    } 
    var flag;
    for (let index = 0; index < 10; index++) 
    {
        flag = true;
        dis.print(index +" ====> ");
        try
        {
            arr[index].printList();
            // str = str + arr[index].get(index);
            // if (arr[index] !== 'undefined' && index < arr.length - 2) 
            // {
            //     str = str + " ";
            // }
        } 
        catch (err) 
        {
            console.log(" Empty index");
        } 
    } 
    // console.log("String is :"+str);
    // utility.writeAllToFile('hashingNumber.txt', str);    //for saving the file.
}
else
{
    console.log("Wrong input ");
}