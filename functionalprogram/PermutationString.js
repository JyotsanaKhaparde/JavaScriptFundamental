var utility =  require('../utility/Utility')
var rl = utility.userInput();

rl.question('Enter string : ',(string)=>
{
   // utility.permutationString(string);
 utility.permutationsIteration(string);

   var permutation =  utility.permutationsIteration(string);
   console.log("Total permutation: "+permutation.length);
   console.log(permutation);
   

   // utility.permutationRecursion(string);
   // process.exit();
 
   // Process.exit();

});