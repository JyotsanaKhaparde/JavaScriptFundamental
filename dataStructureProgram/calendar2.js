/***********************************************************************************
 *  Purpose         : Take 2 string from user and find that string is anagr4am or not.
                      the start and end clicks.
 *  @file           : calendar2.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 03-01-2019
 **********************************************************************************/

var Utility = require('../utility/Utility');
var linkedQueue = require('../dataStructureProgram/Queue.js');


function calender()
{

    var linkedqueue = new linkedQueue.Queue;
    var linkedqueue2 = new linkedQueue.Queue;
    var months = [" ","January","February","March","April","May","Jun",
				"July","August","September","October","November","December"];

    var days= [0,31,28,31,30,31,30,31,31,30,31,30,31];

    var day = ["S", "M", "Tu", "W", "Th", "F", "S"];

    try
    {
        var month = + process.argv[2];
        var year = + process.argv[3];

        var newMonth = parseInt(month);
        var newYear = parseInt(year);

	    if (newMonth < 1 || newMonth > 12) 
		    throw "Month value is Invalid , Please Enter value in range 1-12"
	    if (newMonth == undefined || newYear == undefined)
		    throw "No input found"
	    if (isNaN(newMonth) || isNaN(newYear))
		    throw "No input or String found , Please Enter a valid input";
	    if (newMonth % 1 != 0 || newYear % 1 != 0)
	 	    throw "Number required , Floating value found"

	    var d = Utility.dayOfWeek(newMonth,1,newYear);

	    //check for leap year
        if(newMonth == 2 && Utility.leapYear(newYear))
        {
		days[m] = 29;		
		}

        console.log("     " + months[newMonth] + " " + year);

        for (let i = 0; i < 7; i++)
        {
            linkedqueue.enqueue(day[i]);
        }
        linkedqueue.display2();

        for(let i = 0; i < d; i++)
        {
            linkedqueue2.enqueue(" ");
        }

        for(let i = 1; i <= days[newMonth]; i++)
        {
            linkedqueue2.enqueue(i);
        }
        linkedqueue2.displayCalender(d);
    }
    catch (err) 
    {
        console.log("Error: " + err);
    }
}
calender();


