module.exports = {

      userInput(){
      const readline = require('readline');
  
      const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
      
      });
      return rl;
      },


      //******************************************************************************** 



      anagram(string1,string2){

           //Remove all whitespace first
           

      var s1  =  string1.replace("\\s", " ");
	  var s2  =  string2.replace("\\s", " ");
		
		var status;
		
		if(s1.length != s2.length) {
			console.log("string is not anagram");
		}else {
			
            //Convert into character array

            var s1Array = [];
            var s2Array = [];

			s1Array = s1.toLowerCase().split("");
            s2Array = s2.toLowerCase().split("");
            
            
			
            //Sorting both character array

          s1Array.sort();
          s2Array.sort();

        

          var flag=0;
			
            //Check if both arrays are equal

            
                        for(var i =  0 ; i < s1Array.length  ; i++){
                            if(s1Array[i]==s2Array[i]){
                                flag++;
                            }else{
                                flag=0;
                            }
                        }

                        if(flag==0){
                            console.log('string is not anagram');
                        }else{
                            console.log('string in anagram');
                        }
                    
                }
             },

    //**************************************************************************
    
    
    primeNumber(){
        var primeNumbers = " ";
		 for (var i = 1; i < 1000; i++)  	   
	      { 		 		  
	         var counter=0; 		  
	         for(var num =i; num>=1; num--)
	         {
		    if(i%num==0)
		    {
			counter = counter + 1;
		    }
		    
		 }
		 if (counter ==2)
		 {
		    //Appended the Prime number to the String
            primeNumbers = primeNumbers + i + " ";
            

		 }	
          }	
          console.log('')
	      console.log("Prime numbers from 1 to 1000 are :");
	       
          console.log(primeNumbers);
          var prime=primeNumbers.split('');
          console.log(prime);
          
           /* var array = [];
            for(var i = 0 ; i < 1000 ; i++){
                console.log('arrays is: ',array.push(primeNumbers));

            }*/

          },


     //********************************************************************************

     datOfWeek(m,d,y){
        var y = parseInt(y);
        var m = parseInt(m);
        var d = parseInt(d);

         
       var y0 = y-Math.floor((14 - m)/12);   
        
        var x = y0+Math.floor(y0/4)-Math.floor(y0/100)+Math.floor(y0/400);
        
        var m0 = m+12*Math.floor((14 - m)/12)-2;
        
        var d0 = (d+x+Math.floor(31*m0/12))%7;	
        d0 = parseInt(d0);

      console.log(d0);
       
        
        switch (d0) {
		
		case 0:
            console.log('Sunday');
        	break;
		case 1:
        console.log('Monday');
        	break;
		case 2:
        console.log('Tuesday');
        	break;
		case 3:
        console.log('Wednesday');
        	break;
		case 4:
        console.log('Thursday');
        	break;
		case 5:
        console.log('Friday');
        	break;
		case 6:
        console.log('Saturday');
        	break;
		default:
			break;
        }
		return d0;

     },


     //****************************************************************************** 

     temperatureConversion(choice){

      /*  const readline = require('readline');
  
      const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
      
      })*/
		var temperature;
		 // condition for choice 1 and 2
        

		if(choice == 1) {

			temperature =  rl.question('Enter the temperature in celcius: ');
                temperature = parseInt(temperature);
               // var converted = 0.0;
              var converted =  (temperature * 9/5) + 32;
                console.log('Temperature in fahrenheit is: '+parseFloat(converted));
            
			
			
		}
		else {
			if(choice == 2) {

                temperature =  rl.question('Enter the temperature in fahrenheit');
                 temperature = parseInt(temperature);
                    //var converted = 0.0;

                    var converted = (temperature-32)*(5/9);
                    console.log('Temperature in celcius is: '+parseFloat(converted));
                }
				
				
			}
			},

     };


            





       
  