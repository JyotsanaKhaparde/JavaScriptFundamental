/***********************************************************************************
 *  Purpose         : To Merge Sort an array, we divide it into two halves, sort the two halves
                      independently, and then merge the results to sort the full array.

 *  @file           : mergeSort.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var read = require('readline-sync');
var array = [];
var num = read.question('Enter size of array: ');
console.log("size is: ",(num));
var string = "";
for(var i = 0 ; i < num ; i++){
    string = read.question('Enter element: ');
    array.push(string.toString());

}

var result = [];
result = utility.mergeSort(array);
for(var i = 0 ; i < num ;i++){
    console.log(result[i]);

}





//const list = ["jyo","xyz","pqr","sum"]
/*var arr = [];
rl.question("enter number of element you want to enter: ",(n)=>{
    for(var i = 0 ; i< n ; i++){
        rl.question('Enter elememt: ',(element)=>{
            arr.push(element);
        })
    }
})

for(var i = 0 ; i < n ; i++)*/

//console.log(mergeSort(arr)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]