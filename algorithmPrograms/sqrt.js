var utility =  require('../utility2/Utility')

var rl = utility.userInput();
rl.question('Enter value of c: ',(c)=>{
var t =  utility.sqrt(c);
 console.log("t is: "+t);
 process.exit();

})