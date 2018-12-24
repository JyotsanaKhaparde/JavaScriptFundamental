var utility =  require('../utility/Utility')

var rl = utility.userInput();

rl.question('Enter any number : ',(number)=>{
    if(number>0){
        utility.primeFactorization(number);
        process.exit();
    }else{
        console.log("please enter positive number")
    }
});
