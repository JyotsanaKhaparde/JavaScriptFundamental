module.exports = {

    userInput: function(){
    const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    })
    },


    //*********************************************************************


    replceName(name){
        var n = name.length;
        if(n >= 3){
            console.log('Hello '+name+' how are you?');
            process.exit();
        }else{
            console.log('Please enter min 3 character');
            process.exit();
        
        }
    },


    //********************************************************************

    flipCoin(flip){
        var head = 0;
        var tail = 0;
        var n = flip;
        var i;
        for( i=0;i<n;i++) {
            if(Math.random()<0.5){
                tail++;
                console.log('tail');
            }else{
                head++;
                console.log('head');
            }
        }

           var PercentageHead  = (head/n)*100;
           console.log('Percentage of head= ',PercentageHead);
			
            var PercentageTail  = (tail/n)*100;
            console.log('Percentage of head= ',PercentageHead);

        
        

    },

  //***************************************************************************

  leapYear(year){
      var n = year.length;
      if( year < n){
          console.log('please enter 4 digits number: ')
      }else{
        if(year%4 == 0 && year%100 != 0 || year%400 == 0) {
            console.log(year,' is leap year ');
            //return true;
        }else {
            console.log(year,' is not a leap year');
            //return false;
        }
      }

  },


  //***************************************************************************** 

  powerOf2(number){
      var i;
      if(number < 0){
          console.log('please enter positive number: ');
      }else{
          for(i = 1 ; i <= number ; i++){
           var n =  2*Math.pow(2,i);
           console.log('2 * ',i,'=',n);
          }
      }

  },


  //*****************************************************************************

  factorial(number){
      var i;
      var fact=1;
    for(i = 1 ; i <= number ;i++ ){
        fact = fact * i;

    }
    console.log('factorial is: ',fact);
  },


  //**************************************************************************** 

  distance(x,y){
      var distance;
      distance = Math.sqrt(x*x + y*y);
      console.log('Euclidean distance: ',distance);

  }
    

}
