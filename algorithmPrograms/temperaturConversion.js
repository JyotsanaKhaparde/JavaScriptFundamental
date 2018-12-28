/***********************************************************************************
 *  Purpose         : given the temperature in fahrenheit as input outputs the temperature 
                      in Celsius or viceversa using the formula.
 *  @file           : temperatureConversion.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = utility.userInput();

rl.question('Enter the temperature in celcius: ',(temperature)=>{
    utility.tempInCel(temperature);
    rl.question('Enter the temperature in fahrenheit: ',(temperature)=>{
        utility.tempInFah(temperature);
        process.exit();
    })

})



