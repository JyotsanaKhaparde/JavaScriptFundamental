/***********************************************************************************
 *  Purpose         : Write a program Calendar.java that takes the month and year as command­line
					  arguments and prints the Calendar of the month.
 *  @file           : Calendar.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 03-01-2019
 **********************************************************************************/

var utility =  require('../utility/Utility')

var rl = require('readline-sync');
const util = require('util');

var y = rl.question("Enter Year: ");
var m = rl.question("Enter Month: ");

var y = parseInt(y);
var m = parseInt(m);

		if (isNaN(y) || isNaN(m))
         	throw "No input or string found , Please Enter a valid input";

		if(y<0 )
		{
            console.log("Please enter positive year: ");
            var y = read.question("Enter Year: ");
            var y = parseInt(y);
		}
		if(m<0)
		{
            console.log("Please enter positive month: ");
            var m = read.question("Enter Month: ");
            var m = parseInt(m);
        }
        
		
		var months = [" ","January","February","March","April","May","Jun",
				"July","August","September","October","November","December"];//from 1=january upto 12=Dec
		
		var days= [0,31,28,31,30,31,30,31,31,30,31,30,31];
		
		var j = 0;
		if(months[m] == "January")
		{
			j = 1;
		}
		if(months[m] == "February")
		{
			j = 2;
		}
		if(months[m] == "March")
		{
			j = 3;
		}
		if(months[m] == "April")
		{
			j = 4;
		}
		if(months[m] == "May")
		{
			j = 5;
		}
		if(months[m] == "Jun")
		{
			j = 6;
		}
		if(months[m] == "July")
		{
			j = 7;
		}
		if(months[m] == "August")
		{
			j = 8;
		}
		if(months[m] == "September")
		{
			j = 9;
		}
		if(months[m] == "October")
		{
			j = 10;
		}
		if(months[m] == "November")
		{
			j = 11;
		}
		if(months[m] == "December")
		{
			j = 12;
		}
		
		var year = 0;

		//check for leap year
		if(m == 2 && utility.leapYear(y))
		{
			days[m] = 29;		
		}
		
        var dy = utility.dayOfWeek(m,1,y);

        console.log(" ");
        console.log("% Calendar "+j+" "+y);
        console.log("  "+months[m]+ "  "+y);
        console.log("SUN MON TUE WED THU FRI SAT");
        var array1 = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

        for(let i  =1 ; i < (dy*4+2); i++)
            util.print(" ");

        for(let i = 1; i <= days[m]; i++) 
        {
            if(i<10)
                util.print(i,"   ");
            else
                util.print(i,"  ")
            if (((i + dy) % 7 == 0) || (i == days[m])) 
                console.log();
                util.print("");           
        }
    
        
        
        
		

		
		