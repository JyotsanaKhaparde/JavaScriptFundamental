module.exports = {

    /*
    * function to take input from user
    */

      userInput()
      {
      const readline = require('readline');
  
      const rl = readline.createInterface({

      input: process.stdin,
      output: process.stdout
      
      });

      return rl;

      },


//***************************************************************************************


    /* Aim:Take 2 string from user and find that string is anagr4am or not.

     the start and end clicks

    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */


    anagram(string1,string2)
    {

     //Remove all whitespace first
           
      var s1  =  string1.replace("\\s", " ");
	  var s2  =  string2.replace("\\s", " ");
		
      var status;
    
    //if length of both string is not equal then string is not amagram 
		
    if(s1.length != s2.length)
    {
		console.log("string is not anagram");
    }

    //else block if length of both string will be equal

    else 
    {
			
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

            
        for(var i =  0 ; i < s1Array.length  ; i++)
        {
            // if both strings are equal then value of flag will be increase

            if(s1Array[i]==s2Array[i])
            {
                flag++;
            }
            else
            {
                flag=0;
            }
        }

            //if flag is 0 then string is not anagram else string is anagram

            if(flag==0)
            {
                            
                console.log('string is not anagram');
            }
            else
            {
                console.log('string in anagram');
            }
                    
        }
    },


//*****************************************************************************************


    /* Aim:Take a range of 0 to­ 1000 Numbers and find the Prime numbers in that range.
    print which prime number is palindrom.

    the start and end clicks

    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */
    
    
    primeNumber()
    {
        var primeNumbers = " ";

        //loop for find prime number from 1 to 1000 

        for (var i = 1; i < 1000; i++)  	   
	    { 		 		  
             var counter=0; 

             //loop for check each number from num to 1

	         for(var num =i; num>=1; num--)
	         {
                //all prime number devide only by 1 and itself that means 2 times

		        if(i%num==0)
		     {

            //in 1st iteration value of count will be 0+1=1 and in 2nd iteration 1+1=2

			  counter = counter + 1;
		     }
		    
         }
         
         // if value of count will be 2 then only that number is prime

		 if (counter == 2)
		 {
            //Appended the Prime number to the String
            
            primeNumbers = primeNumbers + i + " ";
            this.isPalindrome(i);

		 }	
        }	 

          console.log('');
             
        },


        isPalindrome(number)
        {

        var Check = parseInt(number);
        var temp= 0;
        var reverseNumber = 0;

        while (Check > 0) 
        {
            //store remender of that number into temp

            temp = Check % 10;

            //take round off digit of that number into check

            Check = Math.floor(Check / 10);

            //reverse the number

            reverseNumber = reverseNumber * 10 + temp;
        }

            //check if number is equal to reverse number

            if(number === reverseNumber)
            {
                console.log(number,'is a Palindrome number');
            }
            else
            {
                console.log(number);
            }
    },

//**********************************************************************************

    /* Aim:function that takes a date as input and prints the day of the week that
    date falls on..

    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */

    datOfWeek(m,d,y)
    {

        var y = parseInt(y);
        var m = parseInt(m);
        var d = parseInt(d);

       //formula to find value of d0 it will be from 0 to 6

       var y0 = y-Math.floor((14 - m)/12);   
        
       var x = y0+Math.floor(y0/4)-Math.floor(y0/100)+Math.floor(y0/400);
        
       var m0 = m+12*Math.floor((14 - m)/12)-2;
        
       var d0 = (d+x+Math.floor(31*m0/12))%7;	

      d0 = parseInt(d0);
       
        //using switch case to give day according to the value of d0 that will be from 0 to 6

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


//*********************************************************************************
     
     /* Aim:given the temperature in fahrenheit as input outputs the temperature 
     in Celsius or viceversa using the formula.

    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */

   
    tempInCel(temperature)
    {
        //formula to convert temperature in fahrenheit

        var converted =  (temperature * 9/5) + 32;
        console.log('Temperature in fahrenheit is: '+parseFloat(converted));

    },

    tempInFah(temperature)
    {
        //formula to convert temperature in celcius

        var converted = (temperature-32)*(5/9);
        console.log('Temperature in celcius is: '+parseFloat(converted));

    },

            
//************************************************************************************


     /* Aim:Function to calculate monthlyPayment that reads in three command­line 
     arguments P, Y, and R and calculates the monthly payments
     
    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */

     
     monthlyPayment(y,p,r)
     {
         var n = 12*y;
         var R = r/(12*100);

        //formula to find monthly payment

         var payment =  ((p*R)/1-Math.pow(1+r,-n));
         console.log('monthly payment value is: ',(payment));

     },


//****************************************************************************************

    /* Aim:Write a function sqrt to compute the square root of a nonnegative number c
    given in the input using Newton's method.
     
    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */


    sqrt(c)
    {

        var e = 1e-15;
        var t = c;
        
        //validation for positive integer

        if(c<0)
        {
            //if c is negative number then it will gain take value of c

            console.log('Please enter positive number:');
            var c1 = utility.userInput();

			Utility.getSqrt(c1);

        }
        else 
        {

        // repeatedly apply Newton update step until desired precision is achieved
		
        while (Math.abs(t - c/t) > e*t)
        {
            t = (c/t + t) / 2.0;
        }
       
		}
		return t;
		

     },

//****************************************************************************************

    /* Aim:Program that outputs the binary (base 2) representation of
    the decimal number typed as the input.
     
    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */

    toBinary(number)
    {
        var binary="";
		var n = number;
		var sum = "";
		var reverse= "";
		
		//condition for getting remender
		
        while(n >=1)
        {
            binary=binary+(n%2);
			n = Math.floor(n/2);
        }
		
		//condition-if the element of binary number is greater then 0 or less then 4.
		
		
        if(binary.length > 0 && binary.length < 4)
        {
            for(var i = 0 ; i < 4-binary.length ; i++)
            {
				sum = sum + 0;
			}
			binary = binary + sum;
		}
		
		//reverse the remender for getting binary number.
		
        for(var i = binary.length - 1 ;i >= 0 ; i--)
        {
			reverse = reverse + binary.charAt(i);
		}
		return reverse;
    },


//*************************************************************************************

    /* Aim:16. Program to read an integer as an input, convert to Binary using toBinary
    function and perform the following functions - Swap nibbles and find the new number.
     
    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */

    binary(number)
    {

        var binary="";
		var n = number;
		var sum = "";
        var reverse= "";
        
		//condition for getting remender
		
                while(n >=1)
                {
					binary=binary+(n%2);
					n = Math.floor(n/2);
                }
                
				//condition-if the element of binary number is greater then 0 or less then 4.
				
				
                if(binary.length > 0 && binary.length < 8)
                {
                    for(var i = 0 ; i < 8-binary.length ; i++)
                    {
						sum = sum + 0;
					}
					binary = binary + sum;
				}
				
				//reverse the remender for getting binary number.
				
                for(var i = binary.length - 1 ;i >= 0 ; i--)
                {
					reverse = reverse + binary.charAt(i);
                }

                console.log('decimal to binary: ',(reverse));

                //reverse that binary number

                var nibble1 = reverse;
                
				var b1="";
				var b2="";
                var s = "";

                //loop for getting first nibble

                for(var i = 0 ; i < 4 ;i++)
                {
					b1 = b1 + nibble1.charAt(i);
                }

                console.log('nibbel 1: ',(b1));

				//loop for getting second nibble

                for(var i = 4 ; i <= 7 ; i++)
                {
					b2 = b2 + nibble1.charAt(i);
                }

                console.log('nibbel 2: '+b2);

                //swap that seperate 2 nibble  by adding them
                
                s = s+b2+b1;
                console.log('swapped nibble : ',(s));

                //convert binary to decimal 

                var BtoD = parseInt(s, 2);
                console.log('Binary to decimal: ',(BtoD));
             },


//***************************************************************************************

    /* Aim:16. Read in a list of words from File. Then prompt the user to enter a word to
    search the list.The program reports if the search word is found in the list.
     
    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */         
   
   
   binarySearchOfString(word)
   {
		
        var str="";

        //Read list of words from File

        var fileStream = require('fs');
        var f = fileStream.readFileSync('binarySearchOfString','utf8')

        console.log('strings are: ',(f));
	
        var s = f;
        var length = f.length;
        var check = "";

        var arrOfStr = [];

        //split that words from the file where "," is used

        arrOfStr = s.split(",", length); 
        
        
        
        // search the word with binary search.
        
        var first = 0;
        var last = arrOfStr.length;

        //find mindpoint of array

        var mid  =  (first + last)/2;
        
        //loop for search words upto mid point.
        
        
        for(var i = 0 ; i <= mid ; i++)
        {
            if(word === arrOfStr[i])
            {
        		check = arrOfStr[i];
        	}
        }
        
        //loop for search word after mid point.
        
        for(var i = mid ; i < last ; i++)
        {
            if(word === arrOfStr[i])
            {
        		check = arrOfStr[i];
        	}
        }
            //check that word is in array or not

            if(word === check)
            {
				console.log('yes, word is found');

			}
            else
            {
            console.log('word is not found');
			}		

   },


//**************************************************************************************


   /* Aim:16. Read in a list of numbre from File. Then prompt the user to enter a word to
    search the list.The program reports if the search number is found in the list.
     
    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */         
   


   binarySearchOfInteger(number)
   {
		
       var str="";

      //Read in a list of number from File

       var fileStream = require('fs');

       /*A character in UTF8 can be from 1 to 4 bytes long.
       *UTF-8 can represent any character in the Unicode standard.
       */
    
       var f = fileStream.readFileSync('binarySearchInt','utf8');

       console.log('integer are: ',(f));
   
       var s = f;
       var length = f.length;
       var check = "";
       var arrOfStr = [];

        //split that words from the file where "," is used

        arrOfStr = s.split(",", length); 
       

        // search the number with binary search.
        
        var first = 0;
        var last = arrOfStr.length;

        //find min point of array

        var mid  =  (first + last)/2;
        
        //loop for search number upto mid point.
        
        
        for(var i = 0 ; i <= mid ; i++) 
        {
            if(number === arrOfStr[i]) 
            {
        		check = arrOfStr[i];
        	}
        }
        
        //loop for search number after mid point.
        
        for(var i = mid ; i < last ; i++) 
        {
            if(number === arrOfStr[i]) 
            {
        		check = arrOfStr[i];
        	}
        }
            //check that number is in file or not

            if(number === check)
            {
				console.log('yes, number is found');

			}
            else
            {
            console.log('number is not found');
			}		
         },

//***************************************************************************************

    /* Aim:16. Reads an integers from file prints them in sorted order using Bubble Sort.

    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */
 
 
    bubbleSortOfInteger(size)
    {
    var utility =  require('../utility2/Utility')

    var rl = utility.userInput();
    
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
         }
         else
         {
             rl.close();
            for(var i =  0 ; i < arr.length-1 ; i++)
            {
                for(var j = i+1 ; j < arr.length ; j++)
                {
                    if(arr[i]>arr[j])
                    {
                        temp = arr[j];
                        arr[j]=arr[i];
                        arr[i]= temp;
                    }
                }
            }

         }
		
		
		
		//sorted list of number
		
        for(var i = 0 ; i < arr.length ; i++)
        {
            console.log("array",arr[i]);
		}
    }
 },

 //*****************************************************************************************

 bubbleSort(f)
 {
     //loop for perform bubble sort
     var temp;
     var s = f;
     var n = f.length;

     var array =[];

    //split that words from the file where "," is used

     array = s.split(",", n); 

     //loop for doing bubble sort
		
        for(var i =  0 ; i < n-1 ; i++)
        {
            for(var j = i+1 ; j < n ; j++)
            {
                //if first element of loop is greater then second element then swap

                if(array[i]>array[j])
                {
					temp = array[j];
					array[j]=array[i];
					array[i]= temp;
				}
			}
		}
		
		//sorted list of number
		
        for(var i = 0 ; i < array.length ; i++)
        {
            console.log(array[i]);
        }
    },


 //***************************************************************************************

    /* Aim:16. Reads an string from file prints them in sorted order using Bubble Sort.

    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */

 bubbleSortOfString(f)
 {
     //loop for perform bubble sort
     var temp;
     var s = f;
     var n = f.length;

     var array =[];

    //split that words from the file where "," is used

     array = s.split(",", n); 

     //loop for doing bubble sort
		
        for(var i =  0 ; i < n-1 ; i++)
        {
            for(var j = i+1 ; j < n ; j++)
            {
                //if first element of loop is greater then second element then swap

                if(array[i]>array[j])
                {
					temp = array[j];
					array[j]=array[i];
					array[i]= temp;
				}
			}
		}
		
		//sorted list of number
		
        for(var i = 0 ; i < array.length ; i++)
        {
            console.log(array[i]);
        }
    },


//*************************************************************************************

    /* Aim:16. ­> Reads a strings from standard input and prints them in sorted order.
    Uses insertion sort.

    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */
  
    insertionSort(f)
    {
    var temp;
    var s = f;
    var n = f.length;
    var array =[];

    //split that words from the file where "," is used

    array = s.split(",", n); 

    //loop for doing insertion sort
    			
    for(var i = 1; i < array.length ; i++)
    {
        for(var j = 0 ; j < i ; j++)
        {
            //swap if any number is less then the any of previous number.

            if(array[i] < array[j])
            {
                temp = array[j];
                array[j]= array[i];
                array[i]= temp;
            }  
        }
    }
    
    //sorted list of number
    
    for(var i = 0 ; i < array.length ; i++)
    {
        console.log(array[i]);
    }


  }
         


};


            





       
  