var utility =  require('../utility2/Utility')

var rl = utility.userInput();

rl.question('Enter year: ',(y)=>
rl.question('Enter principal loan amount: ',(p)=>
rl.question('Enter percent interest: ',(r)=>{
    utility.monthlyPayment(y,p,r);
    process.exit();
})))