var utility =  require('../utility/Utility')
var rl = utility.userInput();

rl.question('Enter string : ',(string)=>
{
    var permutation1 = utility.permutations(string);
    console.log("Total permutation: "+permutation1.length);
     console.log(permutation1);
        process.exit();

});