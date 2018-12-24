var utility =  require('../utility2/Utility')

var rl = utility.userInput();

rl.question('Enter month: ',(m)=>
rl.question('Enter day: ',(d)=>
rl.question('Enter year: ',(y)=>
{
    utility.datOfWeek(m,d,y);
    process.exit();
})));