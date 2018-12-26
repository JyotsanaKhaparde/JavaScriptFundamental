module.exports = {

  /*  userInput : function()
    {
        var rl = require('readline');
        var prompt = rl.createInterface(process.stdin,process.stdout);
        return prompt;
    }*/

    userInput(){
    const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
    });
    return rl;
    },


    //*********************************************************************


    replceName(name){
        var n = name.length;
        var str = "Hello <<username>> how are you?";
        //var re = username;
        if(n >= 3){
            var replace = str.replace("<<username>>",name);
            console.log(replace);

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
            console.log('Percentage of tail= ',PercentageTail);

        
        

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
      var distance=0;
      distance = Math.sqrt(x*x + y*y);
      console.log('Euclidean distance: ',distance);

  },

  //*****************************************************************************

  quadratic(a,b,c){
    var root1 , root2, delta;
    delta = ((b*b) - (4*a*c));

    if(delta > 0){
        root1 = ( - b + Math.sqrt(delta))/(2*a);
        console.log('first root is: ',root1);

        root2 = (- b - Math.sqrt(delta))/(2*a);
        console.log('second root is: ',root2);

    }else{
        console.log('roots are imagionary');
    }

  },


  //*****************************************************************

  windChill(t,v){
    var w;
    w =  35.74 + 0.6215*t + ((0.4275*t) - 35.75) * Math.pow(v, 0.16);
    console.log('windchill is: ',(w));
  },


  //**********************************************************************


  gambler : function(stake,goal,trials)
{
    var bets = 0; // total number of bets made
    var wins = 0; // total number of games won
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

    

      //**********************************************************************
     

     couponNumber(n){
         var min=1;
         var max = n;
        var count=0
        var j=0
            var size = 0;
            
            var arr = new Array(n);
                while(size < n){
                    var x = (Math.round(Math.random()*(max - min ))+min);
                    count=0
                for(var i  = 0 ; i< arr.length ; i++){

                    if(arr[i] == x || x < 0){
                        count++
                       break
                    }  
                }
                if(count==0){
                    arr[j++] =x;
                    size++;
                }
            }

            for(var i=0;i<arr.length;i++){
                console.log(arr[i])
            }
             
        },


        //****************************************************************** 

        triples(array,N){
            var Count=0;
            for(var i  = 0 ; i < N-2 ; i++){
                for(var j = i+1 ; j < N-1 ; j++){
                    for(var k = j+1 ; j < N ; j++){
                        if(array[i]+array[j]+array[k] === 0){
                            Count++;
                            console.log("triplet are: "+array[i]+","+array[j]+","+array[k])
                        }
                    }
                }
            }
               // console.log("triplet not found")
          },


          //*********************************************************************** 

          harmonic(number){
            var sum =0.0;
            for(var i = 1 ; i <= number ;i++) {
                sum = sum+ (1.0/i);
            }
            console.log('harmonic value is: ',(sum));
         },



    //********************************************************************** 


            primeFactorization(number){
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


            //*************************************************************************** 


            

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



     //****************************************************************************        

            //using Iteration method
         //   permutations(otherChar);
        permutations(string)
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
        return results;
        },
       // var permutation1 = permutations(string);
       // console.log("Total permutation: "+permutation1.length);
      //  console.log(permutation1);


        //************************************************************************* */

        
    };

         
       

