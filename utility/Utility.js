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


    /* Aim:Take user Input and Replace String Template “Hello <<UserName>>, How are you?”

    * @author Jyotsana Khaparde

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

    /* Aim:flip coin and print percentage of head and tail

    * @author Jyotsana Khaparde

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

  /* Aim:Take year as a input from user and find that year is leap year or not 

   * @author Jyotsana Khaparde

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


  /* Aim:This program takes user input N and prints a table of the
    powers of 2 that are less than or equal to 2^N. 

    * @author Jyotsana Khaparde

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


  /* Aim:This program take number as input and find factorial of that number.

    * @author Jyotsana Khaparde

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

  /* Aim: program that takes two integer x and y and prints the Euclidean distance

    * @author Jyotsana Khaparde

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


  /* Aim: program to find the roots of the equation a*x*x + b*x + c.

    * @author Jyotsana Khaparde

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


  /* Aim: program that takes two double t and v and prints the wind chill.

    * @author Jyotsana Khaparde

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


  /* Aim: Simulates a gambler who start with $stake and place fair bets until
    he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of
    times he/she wins and the number of bets he/she makes. Run the experiment N
    times, averages the results, and prints them out.

    * @author Jyotsana Khaparde

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

    /* Aim: Given N distinct Coupon Numbers, how many random numbers do you
    need to generate distinct coupon number? This program simulates this random
    process.

    * @author Jyotsana Khaparde

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


    /* Aim: A program with cubic running time. Read in N integers and counts the
    number of triples that sum to exactly 0.

    * @author Jyotsana Khaparde

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

    /* Aim:take number as a input from user and prints the Nth harmonic number:

    * @author Jyotsana Khaparde

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


    /* Aim:Computes the prime factorization of N using brute force.

    * @author Jyotsana Khaparde

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


            
    /* Aim:Write a Stopwatch Program for measuring the time that elapses between

     the start and end clicks

    * @author Jyotsana Khaparde

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

     
    /* Aim:Take string as a input from user and find all permutation of a String
    
    * @author Jyotsana Khaparde

    * @version v10.11.0

    * @since 24/12/2018

    */
   permutation(String, l, r)
    {
        swap(str,l,i);

    if(l==r) 
    {
        console.log(String);
    }
    else 
    {
        for(var i = l ; i <= r; i++) 
        {
        str = swap(str , l ,i);
        permutation(str , l+1, r);
        str = swap(str, l, i);

        }
    }
    //return str;
    
},

    swap( a, i, j) {
    var temp;
    var charArray = [];
    charArray = a.CharArray();
    temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    
    return String.valueOf(charArray);
},

  /*  permutations(string)
    {
        var results = [];

        if (string.length === 1)
        {
        results.push(string);
        return results;
        }

        for (var i = 0; i < string.length; i++)
        {

        var firstChar = string[i];
        var otherChar = string.substring(0, i) + string.substring(i + 1);
        var otherPermutations = permutations(otherChar);
        for (var j = 0; j < otherPermutations.length; j++)
        {
        results.push(firstChar + otherPermutations[j]);
        }
        }
        console.log("Total permutation: "+permutation1.length);
        console.log(permutation1);
    },*/
       


//****************************************************************************

    /* Aim:in 2D arrays of integers, doubles, or booleans from standard input and 
    printing them out to standard output.
    
    * @author Jyotsana Khaparde

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
    }

    };

         
       

