var utility =  require('../utility2/Utility')

var rl = utility.userInput();

rl.question('Enter first string : ',(string1)=>
rl.question('Enter second string : ',(string2)=>{
   utility.anagram(string1,string2);
  

    process.exit();
}));
