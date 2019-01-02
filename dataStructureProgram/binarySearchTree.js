var utility =  require('../utility/Utility')

var rl = utility.userInput();


rl.question('Enter any value ',(n)=>{
    var x =utility.countBST(n);
    console.log("output is: ",x);
    
    process.exit();
})