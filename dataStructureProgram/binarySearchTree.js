/***********************************************************************************
 *  Purpose         : Number of Binary Search Tree
 *  @file           : binarySearchTree.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();


rl.question('Enter any value ',(n)=>{
    var x =utility.countBST(n);
    console.log("output is: ",x);
    
    process.exit();
})