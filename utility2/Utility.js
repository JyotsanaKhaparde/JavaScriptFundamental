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

   
            tempInCel(temperature){

                var converted =  (temperature * 9/5) + 32;
                   console.log('Temperature in fahrenheit is: '+parseFloat(converted));
               },

             tempInFah(temperature){
                var converted = (temperature-32)*(5/9);
                console.log('Temperature in celcius is: '+parseFloat(converted));
             },
            
     //****************************************************************************** 
     
     monthlyPayment(y,p,r){
         var n = 12*y;
         var R = r/(12*100);

         var payment =  ((p*R)/1-Math.pow(1+r,-n));
         console.log('monthly payment value is: ',(payment));

     },


     //*******************************************************************************


     sqrt(c){

        var e = 1e-15;
		var t = c;
		if(c<0) {
            console.log('Please enter positive number:');
            var c1 = utility.userInput();

			//var c1 = Utility.getInt();
			Utility.getSqrt(c1);

		}else {
        // repeatedly apply Newton update step until desired precision is achieved
		
        while (Math.abs(t - c/t) > e*t) {
            t = (c/t + t) / 2.0;
        }
       
		}
		return t;
		

     },

     //*****************************************************************************

     toBinary(number){
        var binary="";
		
		var n = number;
		var sum = "";
		var reverse= "";
		
		//condition for getting remender
		
		while(n >=1) {
            binary=binary+(n%2);
			n = Math.floor(n/2);
        }
		
		//condition-if the element of binary number is greater then 0 or less then 4.
		
		
		if(binary.length > 0 && binary.length < 4) {
			for(var i = 0 ; i < 4-binary.length ; i++) {
				sum = sum + 0;
			}
			binary = binary + sum;
		}
		
		//reverse the remender for getting binary number.
		
		for(var i = binary.length - 1 ;i >= 0 ; i--) {
			reverse = reverse + binary.charAt(i);
		}
		return reverse;
    },

    //**************************************************************************

    binary(number){

        var binary="";
		var n = number;
		var sum = "";
		var reverse= "";
		//condition for getting remender
		
				while(n >=1) {
					binary=binary+(n%2);
					n = Math.floor(n/2);
				}
				//condition-if the element of binary number is greater then 0 or less then 4.
				
				
				if(binary.length > 0 && binary.length < 8) {
					for(var i = 0 ; i < 8-binary.length ; i++) {
						sum = sum + 0;
					}
					binary = binary + sum;
				}
				
				//reverse the remender for getting binary number.
				
				for(var i = binary.length - 1 ;i >= 0 ; i--) {
					reverse = reverse + binary.charAt(i);
                }
                console.log('decimal to binary: ',(reverse));
				var nibble1 = reverse;
				var b1="";
				var b2="";
				var s = "";
				for(var i = 0 ; i < 4 ;i++) {
					b1 = b1 + nibble1.charAt(i);
                }
                console.log('nibbel 1: ',(b1));
				
				for(var i = 4 ; i <= 7 ; i++) {
					b2 = b2 + nibble1.charAt(i);
                }
                console.log('nibbel 2: '+b2);
				
                s = s+b2+b1;
                console.log('swapped nibble : ',(s));
                var BtoD = parseInt(s, 2);
                console.log('Binary to decimal: ',(BtoD));
             },


   //***********************************************************************************
   
   
   binarySearchOfString(word){
       //Read in a list of words from File
		
        var str="";
        var fileStream = require('fs');
        var f = fileStream.readFileSync('binarySearchOfString','utf8')
        console.log('strings are: ',(f));
	
        var s = f;
        var length = f.length;
        var check = "";
        var arrOfStr = [];
        arrOfStr = s.split(",", length); 
        
        
        
        // search the word with binary search.
        
        var first = 0;
        var last = arrOfStr.length;
        var mid  =  (first + last)/2;
        
        //loop for search words upto mid point.
        
        
        for(var i = 0 ; i <= mid ; i++) {
        	if(word === arrOfStr[i]) {
        		check = arrOfStr[i];
        	}
        }
        
        //loop for search word after mid point.
        
        for(var i = mid ; i < last ; i++) {
        	if(word === arrOfStr[i]) {
        		check = arrOfStr[i];
        	}
        }
		
			if(word === check) {
				console.log('yes, word is found');

			}
		else {
            console.log('word is not found');
			}		

   },

   //******************************************************************************** 


   binarySearchOfInteger(number){
       //Read in a list of words from File
		
       var str="";
       var fileStream = require('fs');
       var f = fileStream.readFileSync('binarySearchInt','utf8');
       console.log('integer are: ',(f));
   
       var s = f;
       var length = f.length;
       var check = "";
       var arrOfStr = [];
       arrOfStr = s.split(",", length); 
       

        // search the word with binary search.
        
        var first = 0;
        var last = arrOfStr.length;
        var mid  =  (first + last)/2;
        
        //loop for search words upto mid point.
        
        
        for(var i = 0 ; i <= mid ; i++) {
        	if(number === arrOfStr[i]) {
        		check = arrOfStr[i];
        	}
        }
        
        //loop for search word after mid point.
        
        for(var i = mid ; i < last ; i++) {
        	if(number === arrOfStr[i]) {
        		check = arrOfStr[i];
        	}
        }
		
			if(number === check) {
				console.log('yes, number is found');

			}
		else {
            console.log('number is not found');
			}		
         },

 //************************************************************************************
 
 
 bubbleSortOfInteger(size){
    var utility =  require('../utility2/Utility')

    var rl = utility.userInput();
     //loop for perform bubble sort
    /* var temp;
     var s = f;
     var n = f.length;
     var array =[];
     array = s.split(",", n); */
     var arr=[];
     var temp;
     var len=parseInt(size);
     console.log('size is: ',len);
     console.log("Enter array elements:");//taking array elements from user
     recurrsion(len);
     function recurrsion(len)
     {
         if(len>0)
         {   console.log("length",len);
         
             rl.question('',function(i)
             {
     
                 arr.push(parseInt(i));
                 len--;
                 recurrsion(len);
                 
             });
         }else{
             rl.close();
            for(var i =  0 ; i < arr.length-1 ; i++) {
                for(var j = i+1 ; j < arr.length ; j++) {
                    if(arr[i]>arr[j]) {
                        temp = arr[j];
                        arr[j]=arr[i];
                        arr[i]= temp;
                    }
                }
            }

         }
		
		
		
		//sorted list of number
		
		for(var i = 0 ; i < arr.length ; i++) {
            console.log("array",arr[i]);
		}
    }
 },


 //************************************************************************************ 

 bubbleSortOfString(f){
     //loop for perform bubble sort
     var temp;
     var s = f;
     var n = f.length;
     var array =[];
     array = s.split(",", n); 
		
		for(var i =  0 ; i < n-1 ; i++) {
			for(var j = i+1 ; j < n ; j++) {
				if(array[i]>array[j]) {
					temp = array[j];
					array[j]=array[i];
					array[i]= temp;
				}
			}
		}
		
		//sorted list of number
		
		for(var i = 0 ; i < array.length ; i++) {
            console.log(array[i]);
        }
    },

  //********************************************************************************** 
  
  insertionSort(f){
    var temp;
    var s = f;
    var n = f.length;
    var array =[];
    array = s.split(",", n); 

    //swap if any number is less then the any of previous number.
				
    for(var i = 1; i < array.length ; i++) {
        for(var j = 0 ; j < i ; j++) {
            if(array[i] < array[j]) {
                temp = array[j];
                array[j]= array[i];
                array[i]= temp;
            }  
        }
    }
    
    //sorted list of number
    
    for(var i = 0 ; i < array.length ; i++) {
        console.log(array[i]);
    }


  }
         


};


            





       
  