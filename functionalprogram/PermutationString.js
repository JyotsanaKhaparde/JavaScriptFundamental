var utility =  require('../utility/Utility')
var rl = utility.userInput();

/*rl.question('Enter string : ',(string)=>
{
    utility.permutations(string);
    
        process.exit();

});*/

rl.question('Enter string: ',(string)=>
{
   var l = string.length;
    utility.permutation(string,0,l-1);
});

