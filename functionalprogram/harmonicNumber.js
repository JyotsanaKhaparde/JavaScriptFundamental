var utility =  require('../utility/Utility')
var rl = utility.userInput();

rl.question('enter any number: ',(number)=>{
    if(number <0){
        console.log('please enter positive number')
    }
    else{
        utility.harmonic(number);
        process.exit();
    }
});