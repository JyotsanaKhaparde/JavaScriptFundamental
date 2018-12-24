var utility =  require('../utility2/Utility')

var rl = utility.userInput();

rl.question('Enter 1 to convert from celcius to fahrenhit or Enter 2 to convert from fahrenhit to celcius: ',(choice)=>{
    utility.temperatureConversion(choice);
    process.exit();
})