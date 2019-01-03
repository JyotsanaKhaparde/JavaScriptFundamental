module.exports = {

    /*
    * Function for taking input from user
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


    //*********************************************************************************


    /** Aim:Take user Input and Replace String Template “Hello <<UserName>>, How are you?”

    * @author Jyotsana Khaparde

    * @file : StringReplace.js

    * @param name String

    * @version v10.11.0

    * @since 24/12/2018

    */


    replceName(name)
    {
        //take length of name 

        var n = name.length;
        var str = "Hello <<username>> how are you?";

        //if length of that string is greater then or equal to 3 then only it will replace

        if(n >= 3)
        {
            var replace = str.replace("<<username>>",name);
            console.log(replace);

            process.exit();
        }
        
        //else block if length is less then 3

        else
        {
            console.log('Please enter min 3 character');
            process.exit();
        
        }
    },


//******************************************************************************************

    /**  Aim:flip coin and print percentage of head and tail

    * @author Jyotsana Khaparde

    * @file : FlipCoin.js

    * @param flip number of flip in integer

    * @version v10.11.0

    * @since 24/12/2018

    */


    flipCoin(flip)
    {
        var head = 0; //initialize head 0
        var tail = 0; //initialize head 0
        var n = flip;
        var i;

        for( i=0;i<n;i++) 
        {
            //using random function for count head and tail randomly

            if(Math.random()<0.5)
            {
                //if random will be less then 0.5 then tail will be increase

                tail++;
                console.log('tail');
            }
            else
            {
                //if random will be greater then 0.5 then tail will be increase

                head++;
                console.log('head');
            }
        }

         //find percentage of head

        var PercentageHead  = (head/n)*100;
        console.log('Percentage of head= ',PercentageHead);

        //find percentage of tail
        	
        var PercentageTail  = (tail/n)*100;
        console.log('Percentage of tail= ',PercentageTail);

        
     },


//********************************************************************************

  /**  Aim:Take year as a input from user and find that year is leap year or not 

   * @author Jyotsana Khaparde

   * @file : LeapYear.js

   * @param year integer taken by user

   * @version v10.11.0

   * @since 24/12/2018

    */


  leapYear(year)
  {

      var n = 4;

    //condition for number of digits in year if it will be less then 4 then it will show 
    //if statement

      if( year < n)
      {
          console.log('please enter 4 digits number: ')
      }

    // else part for calculate leap year

     else
      {
        //if year is leap year then this if block will be execute

        if(year%4 == 0 && year%100 != 0 || year%400 == 0)
         {
            console.log(year,' is leap year ');
            //return true;
        }

        //else part - if year is not leap year

        else 
        {
            console.log(year,' is not a leap year');
            //return false;
        }
      }

  },


//*************************************************************************************


  /**  Aim:This program takes user input N and prints a table of the
    powers of 2 that are less than or equal to 2^N. 

    * @author Jyotsana Khaparde

    * @file : PowerOf2.js

    * @param number integer

    * @version v10.11.0

    * @since 24/12/2018

    */


  powerOf2(number)
  {
      var i;

      //validation for negative number

      if(number < 0)
      {
          console.log('please enter positive number: ');
      }

      //else part if number is positive

      else
      {
          // loop for find power of 2 upto that number

          for(i = 1 ; i <= number ; i++)
          {
           var n =  2*Math.pow(2,i);

           console.log('2 * ',i,'=',n);
          }
      }

  },


//*********************************************************************************


  /**  Aim:This program take number as input and find factorial of that number.

    * @author Jyotsana Khaparde

    * @file : Factorial.js

    * @param number integer

    * @version v10.11.0

    * @since 24/12/2018

    */


  factorial(number)
  {
      var i;
      var fact=1;

    //loop for find factorial of number

    for(i = 1 ; i <= number ;i++ )
    {
        fact = fact * i;

    }
    console.log('factorial is: ',fact);
  },


//*********************************************************************************

  /**  Aim: program that takes two integer x and y and prints the Euclidean distance

    * @author Jyotsana Khaparde

    * @file : Distance.js

    * @param x integer

    * @param y integer

    * @version v10.11.0

    * @since 24/12/2018

    */


  distance(x,y)
  {
      var distance=0;

      //formula to find euclidean distance

      distance = Math.sqrt(x*x + y*y);
      console.log('Euclidean distance: ',distance);

  },


//*********************************************************************************


  /** Aim: program to find the roots of the equation a*x*x + b*x + c.

    * @author Jyotsana Khaparde

    * @file : Quadratic.js

    * @param a integer
    * @param b integer
    * @param c integer


    * @version v10.11.0

    * @since 24/12/2018

    */


  quadratic(a,b,c)
  {
    var root1 , root2, delta;
    delta = ((b*b) - (4*a*c));

    //idf value of delta will be greater then 0 then  if statement will be execute

    if(delta > 0)
    {
        root1 = ( - b + Math.sqrt(delta))/(2*a);
        console.log('first root is: ',root1);

        root2 = (- b - Math.sqrt(delta))/(2*a);
        console.log('second root is: ',root2);

    }

    //else block if the roots are imagionary

    else
    {
        console.log('roots are imagionary');
    }

  },


//*******************************************************************************


  /**  Aim: program that takes two double t and v and prints the wind chill.

    * @author Jyotsana Khaparde

    * @file : WindChill.js

    * @param t integer
    * @param v integer


    * @version v10.11.0

    * @since 24/12/2018

    */


  windChill(t,v)
  {
    var w;

    //formula for find wind chill

    w =  35.74 + 0.6215*t + ((0.4275*t) - 35.75) * Math.pow(v, 0.16);
    console.log('windchill is: ',(w));
  },


//*******************************************************************************


  /** Aim: Simulates a gambler who start with $stake and place fair bets until
    he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of
    times he/she wins and the number of bets he/she makes. Run the experiment N
    times, averages the results, and prints them out.

    * @author Jyotsana Khaparde

    * @file : Gambler.js

    * @param stack integer
    * @param goal integer
    * @param trials integer


    * @version v10.11.0

    * @since 24/12/2018

    */


  gambler : function(stake,goal,trials)
{
    var bets = 0; // initialize bets
    var wins = 0; // initialize won

    // repeat trials times
    for (var t = 0; t < trials; t++) 
    {
        // do one gambler's ruin simulation

        var cash = stake;

        while (cash > 0 && cash < goal) 
        {
            bets++;
            if (Math.random() < 0.5) 
            {
                cash++; // win $1
            }
            else 
            {   
                cash--; // lose $1
            }
        }
        if (cash == goal) 
        {   
            wins++; // did gambler go achieve desired goal?
        }
    }
     
    // print results

    console.log(wins + " wins of " + trials);

    var a = 100.0 * wins;
    var b = a / trials;

    console.log("Percent of games won = " + b);

    var c = 1.0 * bets;
    var d = c / trials;

    console.log("Avg of bets = " + d);
},

    
//***********************************************************************************

    /** Aim: Given N distinct Coupon Numbers, how many random numbers do you
    need to generate distinct coupon number? This program simulates this random
    process.

    * @author Jyotsana Khaparde

    * @file : Coupon.js

    * @param n integer

    * @version v10.11.0

    * @since 24/12/2018

    */
     

    couponNumber(n)
    {
        var min=1; //take minimum length of n
        var max = n; // take maximum length of n
        var count=0
        var j=0
        var size = 0; // initialize size 0

        var arr = new Array(n);

               //while loop will execute until size is less then the user input n 

                while(size < n)
                {
                    // store random value from 1 to n in x

                    var x = (Math.round(Math.random()*(max - min ))+min);
                    count=0

                //for loop for checking random number upto length of array 

                for(var i  = 0 ; i< arr.length ; i++)
                {
                    // if repeated number found then value of count wil be increase

                    if(arr[i] == x || x < 0)
                    {
                       count++
                       break
                    }  
                }
                    //if count will be zero then only that rabdom number enter in to array

                     if(count==0)
                    {
                     arr[j++] =x;
                        size++;
                    }
            }

            //loop for printing distinct random number

            for(var i=0;i<arr.length;i++)
            {
                console.log(arr[i])
            }
             
        },


//***********************************************************************************


    /**  Aim: A program with cubic running time. Read in N integers and counts the
    number of triples that sum to exactly 0.

    * @author Jyotsana Khaparde

    * @file : triples.js

    * @param array array taken by user
    * @param N integer



    * @version v10.11.0

    * @since 24/12/2018

    */
     

    triples(array,N)
    {
            
        var Count=0;

            //for loop for finding triplets in array

            for(var i  = 0 ; i < N-2 ; i++)
            {
                for(var j = i+1 ; j < N-1 ; j++)
                {
                    for(var k = j+1 ; j < N ; j++)
                    {
                        if(array[i]+array[j]+array[k] === 0)
                        {
                            Count++;
                            console.log("triplet are: "+array[i]+","+array[j]+","+array[k])
                        }
                    }
                }
            }
               // console.log("triplet not found")
          },


//*************************************************************************************

    /**  Aim:take number as a input from user and prints the Nth harmonic number.

    * @author Jyotsana Khaparde

    * @file : harmonicNumber.js

    * @param number integer taken by user

    * @version v10.11.0

    * @since 24/12/2018

    */

    harmonic(number)
    {
            
        var sum =0.0;

            for(var i = 1 ; i <= number ;i++)
            {
                sum = sum+ (1.0/i);
            }
            console.log('harmonic value is: ',(sum));
         },


//*************************************************************************************


    /**  Aim:Computes the prime factorization of N using brute force.

    * @author Jyotsana Khaparde

    * @file : primeFactor.js

    * @param number integer

    * @version v10.11.0

    * @since 24/12/2018

    */



    primeFactorization(number)
    {
                
        for(var i = 2; i< number; i++) 
	    {
	        while(number%i == 0) 
	        {
	            console.log('Factor: ',i);
	            number = number/i;
	        }
	    }
	    if(number>2) //for 35 and so on this condition will apply 
	    {
	        console.log('Factor: ',number);
	    } 
	           
    },


//*********************************************************************************


            
    /**  Aim:Write a Stopwatch Program for measuring the time that elapses between

     the start and end clicks.

    * @author Jyotsana Khaparde

    * @file : stopWatch.js

    * @param start integer
    * @param stop integer


    * @version v10.11.0

    * @since 24/12/2018

    */

    time() 
    {

        var d = new Date();

        t = d.getTime()

        return t;

    },

    elapsedTime(start, stop) 
    {

        var elapsed = stop - start;

        return elapsed;

    },



//**********************************************************************************

     
    /**  Aim:Take string as a input from user and find all permutation of a String
    
    * @author Jyotsana Khaparde

    * @file : PermutationString.js

    * @param char_arr character array taken by user
    * @param i integer


    * @version v10.11.0

    * @since 24/12/2018

    */
  
   strIterativePermutation(char_arr, i)
       {   
           var utility = require('../utility/Utility');
         
           
               if(i == char_arr.length-1)
               {
                   // print the shuffled string 
                       var str = "";
                       for(var j=0; j<char_arr.length; j++)
                       {
                           str=str+char_arr[j];
                       }
                       console.log(str);
               }
               else
               {
                   for(var j=i; j<char_arr.length; j++)
                   {
                       var tmp = char_arr[i];
                       char_arr[i] = char_arr[j];
                       char_arr[j] = tmp;
                       utility.strIterativePermutation(char_arr,i+1);
                       var tmp1 = char_arr[i];
                       char_arr[i] = char_arr[j];
                       char_arr[j] = tmp1;
                     
                   }
               }
       },
    


    swap( a, i, j) {
        var temp;
        var charArray = [];
        charArray.push(a.toString());
		temp = charArray[i];
		charArray[i] = charArray[j];
        charArray[j] = temp;
        //console.log(charArray);
   return String.valueOf(charArray);
},

 
       


//****************************************************************************

    /**  Aim:Print 2D arrays of integers, doubles, or booleans from standard input and 
    printing them out to standard output.
    
    * @author Jyotsana Khaparde

    * @file : twoDArray.js

    * @param arr array taken by user
    * @param start integer
    * @param size integer


     * @version v10.11.0

    * @since 24/12/2018

    */

    //function to print integer array

    printIntegerArray(arr,start,size)
    {
            var util = require('util');
            var i=start,j=size;

            // To print Integer 2D array

             for(i=0;i<arr.length;i++) 
             {
                    for(j=0;j<arr.length;j++) 
                    {
                        util.print(arr[i][j]+'  ');
                    }
                    console.log();
             }
    },
    
    //function to print double array

    printDoubleArray(arr,start,size)
    {
        var util = require('util');
        var i=start,j=size;

        // To print Integer 2D array

        for(i=0;i<arr.length;i++) 
        {
            for(j=0;j<arr.length;j++) 
            {
                util.print(arr[i][j]+'  ');
            }
                console.log();
            }
    },

   
    
 //***************************************************************************************
    
    
        /**  Aim:Take 2 string from user and find that string is anagr4am or not.
    
         the start and end clicks.
    
        * @author Jyotsana Khaparde

        * @file : anagram.js

        * @param string1 integer
        * @param string2 integer


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
    
    
        /** Aim:Take a range of 0 to­ 1000 Numbers and find the Prime numbers in that range.
        print which prime number is palindrom.
    
        the start and end clicks
    
        * @author Jyotsana Khaparde

        * @file : primeNumber.js
    
        * @version v10.11.0
    
        * @since 24/12/2018
    
        */
        
        
        primeNumber()
        {
            var array1 = [];
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
                array1 = parseInt(i);
              //  console.log("array: ",(array1));
                this.isAnagram(array1);
    
                //primeNumbers = primeNumbers + i + " ";
                this.isPalindrome(i);
              
    
             }	
            }	 
    
              console.log('');
                 
            },

            /**
             * 
             * @param number  integre taken by user
             */
    
    
            isPalindrome(number)
            {
                //this.isAnagram(number);
               // this.arraySet(number);
              // console.log(number);
               
                
    
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
                
              //  console.log("in array: ",(array));
        },
         arraySet(number){
           
             
          //  this.isAnagram(array);
    
         },
    
        isAnagram(array){
         // console.log('in array: ',(array));
          var str1="",str2="";
         // var arr = [];
         
           // arr.push(array);
    
         
         // console.log("array",arr);
          
         for(var i = 0 ; i < array.length; i++)
         {
             console.log('check');
    
           for(var j = 1 ; j < array.length-1 ; j++)
           {
                console.log('check1');
                str1 = array[i.toString()];
                str2 = array[j.toString()];
                console.log("str1",str1);
                console.log("str2",str2);
                
                //this.anagram(str1 ,str2);
    
              }
          }
        },
    
    //**********************************************************************************
    
        /**  Aim:function that takes a date as input and prints the day of the week that
        date falls on.
    
        * @author Jyotsana Khaparde

        * @file : dayOfWeek.js

        * @param m taken month by user
        * @param d taken day by user
        * @param y taken year by user

        * @version v10.11.0
    
        * @since 24/12/2018
    
        */
    
        dayOfWeek(m,d,y)
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
         
         /**  Aim:given the temperature in fahrenheit as input outputs the temperature 
         in Celsius or viceversa using the formula.
    
        * @author Jyotsana Khaparde

        * @file : temperatureConversion.js

        * @param temperature integer taken by user

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
    
    
         /**  Aim:Function to calculate monthlyPayment that reads in three command­line 
         arguments P, Y, and R and calculates the monthly payments
         
        * @author Jyotsana Khaparde

        * @file : monthlyPayment.js

        * @param y integer
        * @param p integer
        * @param r integer


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
    
        /**  Aim:Write a function sqrt to compute the square root of a nonnegative number c
        given in the input using Newton's method.
         
        * @author Jyotsana Khaparde

        * @param c integer

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
    
        /**  Aim:Program that outputs the binary (base 2) representation of
        the decimal number typed as the input.
         
        * @author Jyotsana Khaparde

        * @file : toBinary.js

        * @param number take decimal number from user

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
    
        /**  Aim: Program to read an integer as an input, convert to Binary using toBinary
        function and perform the following functions - Swap nibbles and find the new number.
         
        * @author Jyotsana Khaparde

        * @file : binary.js

        * @param number integer

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
    
        /**  Aim: Read in a list of words from File. Then prompt the user to enter a word to
        search the list.The program reports if the search word is found in the list.
         
        * @author Jyotsana Khaparde

        * @file : binarySearchOfString.js

        * @param word integer

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
    
    
       /**  Aim: Read in a list of numbre from File. Then prompt the user to enter a word to
        search the list.The program reports if the search number is found in the list.
         
        * @author Jyotsana Khaparde

        * @file : binarySearchOfInt.js

        * @param number integer

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
    
        /**  Aim: Reads an integers from file prints them in sorted order using Bubble Sort.
    
        * @author Jyotsana Khaparde

        * @file : bubbleSortOfInteger.js

        * @param size integer

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
    
        /**  Aim: Reads an integers from file prints them in sorted order using Bubble Sort.
    
        * @author Jyotsana Khaparde

        * @file : bubbleSort.js

        * @param f integer

        * @version v10.11.0
    
        * @since 24/12/2018
    
        */
    
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
                console.log('sorted list: ',array[i]);
            }
        },
    
    
     //***************************************************************************************
    
        /** Aim: Reads an string from file prints them in sorted order using Bubble Sort.
    
        * @author Jyotsana Khaparde

        * @file : bubbleSortOfString.js

        * @param f integer
   
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
    
        /**  Aim: Reads a strings from standard input and prints them in sorted order.
        Uses insertion sort.
    
        * @author Jyotsana Khaparde

        * @file : insertionSort.js

        * @param f integer

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
    
    
      },
    
    //******************************************************************************************
    
        /**  Ain: There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be
        returned by Vending Machine. Write a Program to calculate the minimum number
        of Notes as well as the Notes to be returned by the Vending Machine as a change.
    
        * @author Jyotsana Khaparde

        * @file : vendingMatchine.js

        * @param amount integer
    
        * @version v10.11.0
    
        * @since 24/12/2018
    
        */
    
    
        vendingMachine(amount)
        {
            choice = 1;
            var arr = [1000, 500, 100, 50, 10, 5, 2, 1];
    
            //loop for calculating number of notes
    
            for (i = 0; i < arr.length; i++) 
            {
                //checking which notes of the array we can take 
    
                if (amount / arr[i] >= 1) 
                {
                    //round off the reasult
    
                    var result = Math.floor(amount / arr[i]);
    
                    //print number of notes
    
                    console.log("Number of " + arr[i] + " rs notes are" + result);
    
                    amount = amount - result * arr[i];
                }
            }
            if (amount > 0)
            {
                this.VendingMachine(amount);
             
            }
            
        },
    
    //*******************************************************************************************
    
        /**  Aim:­ takes a command­line argument N, asks you to think of a number
        between 0 and N­1, where N = 2^n, and always guesses the answer with n
        questions.

    
        * @author Jyotsana Khaparde
        
        * @file : guessNumber.js

        * @param number integer

        * @version v10.11.0
    
        * @since 24/12/2018
    
        */
    
    
    guessnumber(number)
    {
      //  console.log("nuimber is: ",number);
        console.log("Think a number between 0 to ",(number-1));
    
        var read=require('readline-sync');
        var low = 0;
        var high = number - 1;
        var flag = true;
    
        //var n = 0;
       // n = Math.sqrt(number, 2);
    
       
        for (let i = 0; i <= number && flag; i++)
         {
            mid = Math.floor((low + high) / 2);
            if (low >= high)
             {
                flag = false;
            } 
            else 
            {
                var ans = read.question("Is your number is less than or equals to " + mid + " enter 1 or enter 0  ");
                if (ans == 1)
                {
                    high = mid;
                }
                 else if (ans == 0)
                {
                    low = mid + 1;
    
    
                }
                else
                {
                    console.log("Please enter 1 or 0 only");
                    i--;
                }
    
            }
        }
        console.log("Your number is " + mid);
    },
    
    
    //***********************************************************************************************

        /**  Aim:­ To Merge Sort an array, we divide it into two halves, sort the two halves
        independently, and then merge the results to sort the full array.

    
        * @author Jyotsana Khaparde

        * @file : mergeSort.js

        * @param arr integer

        * @version v10.11.0
    
        * @since 24/12/2018
    
        */
    
    
    mergeSort (arr) 
    {
        var utility =  require('../utility2/Utility');
        if (arr.length === 1)
         {
          // return once we hit an array with a single item
          return arr
        }
        // get the middle item of the array rounded down
        const middle = Math.floor(arr.length / 2) 
    
        // items on the left side
        //The slice() method returns the selected elements in an array
        const left = arr.slice(0, middle) 
    
        // items on the right side
        const right = arr.slice(middle) 
      
        return utility.merge(utility.mergeSort(left),utility.mergeSort(right))
      },
    
      // compare the arrays item by item and return the concatenated result
        merge(left, right)
         {
        let result = []
        let indexLeft = 0
        let indexRight = 0
      
        while (indexLeft < left.length && indexRight < right.length) 
        {
          if (left[indexLeft] < right[indexRight])
           {
            result.push(left[indexLeft])
            indexLeft++
          }
            else
            {
            result.push(right[indexRight])
            indexRight++
          }
        }
      
        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
      },


//*************************************************************************

unorderdeList(word)
{
    const linked = require('../dataStructureProgram/LinkedList.js');

    //Read in a list of words from File

		  		 
    var str="";
    
    //Read list of words from File

    var fileStream = require('fs');
    var f = fileStream.readFileSync('unorderedList','utf8')

    console.log('strings are: ',(f));

    var s = f;
    var length = f.length;
    var check = "";

    var arrOfStr = [];

    //split that words from the file where "," is used

    arrOfStr = s.split(",", length); 
                  
    var list = new linked.LinkedList; 
    for(var i = 0 ; i < arrOfStr.length ; i++) {
        list.add(arrOfStr[i]);
    }
        //list.printList();
        if(list.search(word)){
            var s1 = word ;
            console.log("this word is alredy in list so remove it");
            var Deletedata = list.indexOf(s1);
            list.removeFrom(Deletedata);
            list.printList();
                  
            }
            else 
            {
                console.log("this word is not in the list so add it");
                list.add(word);
               list.printList();
                          
            }
            var writeMe = list.printList();
           fileStream.writeFileSync('writeUnorderedList',writeMe);

    },


    //*********************************************************************

    orderedList(number)
    {
        const linked = require('../dataStructureProgram/LinkedList.js');

        //Read in a list of words from File
    
                       
        var str="";
        
        //Read list of words from File
    
        var fileStream = require('fs');
        var f = fileStream.readFileSync('orderedList','utf8')
    
        console.log('numbers are: ',(f));
    
        var s = f;
        var length = f.length;
        var check = "";
    
        var arrOfStr = [];
    
        //split that words from the file where "," is used
    
        arrOfStr = s.split(",", length); 

        //var new_node1;          
        var list = new linked.LinkedList; 
        for(var i = 0 ; i < arrOfStr.length ; i++) {
           list.add(arrOfStr[i]);
        }
        list.printList();

            if(list.search(number)){
                var s1 = number ;
                console.log("this word is alredy in list so remove it");
                var Deletedata = list.indexOf(s1);
                list.removeFrom(Deletedata);
                list.printList();
                      
                }
                else 
                {
                    console.log("this word is not in the list so add it");
                   list.add(number);
                   list.sortList();
                   list.printList();
                              
                }
    
    

    },


//**************************************************************************

balancedParantheses(value){
    const stack = require('../dataStructureProgram/Stack.js');
    var obj = new stack.Stack; 

        var arr = [];
        arr = value.split("");
	
		
		for(var i = 0 ; i < arr.length ; i++) {
			
			if(arr[i] == '(') {
				obj.push('(');
			}
			if(arr[i] == ')'){
				obj.pop();

			}
			
		}
		if(obj.isEmpty() ){
            console.log('Parentheses are balanced');
            
		}else {
            console.log('Parentheses are not balanced');
            
		}

},

//*************************************************************************

bankingCashCounter(cash,people){


    const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
    });

    const queue = require('../dataStructureProgram/Queue.js');
    var obj = new queue.Queue; 


		
		
		for(var i = 0 ; i <= people ; i++) {
			obj.enqueue(i);
		}
		for(var i = 0 ; i < people ; i++ ) {
		var choice = rl.question("Enter 1 for deposit money or 0 for withdrow money: ",(choice));
		
		switch (choice) {
        case 1:
        
			var deposit = rl.question("Enter deposit amount: ",(deposit));
             cash = cash+deposit;
            console.log("Total amount after deposit: "+cash);
            //obj.deQueue();
			break;
			
		case 0:
        var deposit = rl.question("Enter deposit amount: ",(withdrow));
			 cash = cash - withdrow;
            console.log("Total amount after deposit: "+cash);
			//obj.deQueue();
			break;

		default:
			break;
		}
		}

},

//********************************************************************* 

palindromChecker(inputStr){
    const obj = require('../dataStructureProgram/Deque.js');
    var deque = new obj.Deque;

    for(let r=0;r<inputStr.length;r++)
    {
        deque.enqueue(inputStr.charAt(r));
    } 
   
    var flag = true;
    var x ,y ,str1="",str2="";
     for(let i=0;i<deque.Size();i++)  
     {
         x = deque.removeFirstNode();
         str1+=x;     
     }
   
     for(let r=0;r<inputStr.length;r++)
    {
        deque.enqueue(inputStr.charAt(r));
    } 
      for(let i=0;i<deque.Size();i++)
     { 
         y = deque.removeLastNode();
         if(y==0)
         {
             break;
         }
         else
         {
           str2+=y;
         }  
         
     }
   
     if(str1 === str2)
     {
         console.log(' string is Palindrome..');
     }
     else
     {
         console.log(' string is not Palindrome..');
     }
   
    }  , 

 //*******************************************************************    

 twoDPrime(){
    var i,j,n=1000,k=0;
            var flag = 0;
            var intArray = new Array(n);
            
            for(i=0;i<=n;i++)
            {
                for(var z=2;z<i;z++)
                {
                    if(i%z==0)
                    {
                        flag = 0;
                        break;
                    }
                    else                    
                        flag = 1;                       
                }
                if(flag == 1)
                {
                    console.log(i+" ");
                    
                   // System.out.print(i+" ");
                    intArray[k] = i;
                    k++;
                }
            }
            
            var a=new Array(10,30);
            var b=new Array(10,30);
    
            var count=0;
              for(i=0;i<10;i++)
                {
                   for(j=0;j<25;j++)
                    {
                        if(count==intArray.length) 
                            break;

                    a[i][j]=intArray[count];
                    count++;
                    }
                }
                console.log("Count is "+count);
                
            //System.out.println("Count is "+count);  
                    
            
            var pause = 100;//taking for partition purpose
              
            console.log("2d Array :");
            
            //System.out.println("2d Array :"); 
            
            for(i=0;i<10;i++)
            {
               for(j=0;j<25;j++)
                {   
                  
                   if(a[i][j]>pause)
                     {
                         pause=pause+100;
                         console.log();
                         
                        // System.out.println();
                     } 
                     console.log(a[i][j]+" ");
                      
                  // System.out.print(a[i][j]+" ");
                }
            }
                              
  
                    

    },

   


  //******************************************************************* 
  
    
binomialCoeff( n, k) 
{ 
    var n = parseInt(n);
    var k = parseInt(k);
var res = 1; 

// Since C(n, k) = C(n, n-k) 
if (k > n - k) 
k = n - k; 

// Calculate value of  
// [n*(n-1)*---*(n-k+1)] /  
// [k*(k-1)*---*1] 
for (var i = 0; i < k; ++i) 
{ 
res *= (n - i); 
res /= (i + 1); 
} 

return res; 
}, 


// A Binomial coefficient  
// based function to find  
// nth catalan number in  
// O(n) time 
catalan( n) 
{ 
var n = parseInt(n);
// Calculate value of 2nCn 
var c = this.binomialCoeff(2 * n, n); 

// return 2nCn/(n+1) 
return c / (n + 1); 
}, 

// A function to count number of 
// BST with n nodes using catalan 
countBST( n) 
{ 
// find nth catalan number 
var n = parseInt(n);
var count = this.catalan(n); 

// return nth catalan number 
return count; 
},

//************************************************************************* 

 };
    
    
    
                
    
    
    
    
    
           
      

    

         
       

