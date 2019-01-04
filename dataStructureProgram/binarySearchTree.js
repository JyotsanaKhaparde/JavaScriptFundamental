/***********************************************************************************
 *  Purpose         : Number of Binary Search Tree
 *  @file           : binarySearchTree.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 29-12-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();


rl.question('Enter any value ',(n)=>{
    if (isNaN(n))
         throw "No input or string found , Please Enter a valid input";

    if (n === "")
         throw "No input or string found , Please Enter a valid input";     

    var x =utility.countBST(n);
    console.log("output is: ",x);
    
    process.exit();
})