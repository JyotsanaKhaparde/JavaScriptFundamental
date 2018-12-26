var utility =  require('../utility2/Utility')

var rl = utility.userInput();

rl.question('Enter the temperature in celcius: ',(temperature)=>{
    utility.tempInCel(temperature);
    rl.question('Enter the temperature in fahrenheit: ',(temperature)=>{
        utility.tempInFah(temperature);
        process.exit();
    })

})



