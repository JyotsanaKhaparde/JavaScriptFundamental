/***********************************************************************************
 *  Purpose         : Read in the following message: Hello <<name>>, We have your full
                      name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
                      Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
                      Use Regex to replace name, full name, Mobile#, and Date with proper value.
 *  @file           : regularExpression.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 04-01-2019
 **********************************************************************************/

//  var read = require('readline-sync');
//  var fs = require('fs');

//  function regularExpression()
//  {

//     // var str1 = "Hello <<name>>";
//     // var str2 = "We have your full name as <<full name>> in our system";
//     // var str3 = "your contact number is 91­xxxxxxxxxx";
//     // var str4 = "Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.";

//      //read file from inventory.json 
//      var element = fs.readFileSync('regularExpression.json');

//      //JSON.parse-Converts a JavaScript Object Notation (JSON) string into an object.
//      var jsonRegularExpression = JSON.parse(element);
//     //i 	Perform case-insensitive matching
//     //g 	Perform a global match 
//     nameRestriction = [a-z]/ig;
//     contactRestriction = [0-9]/g;

//     var name = read.question("please enter your name: ");
//     if(nameRestriction.test(name) && name.length>3) 
//     {
//         result = jsonRegularExpression.str1.replace(/<<name>>/,name);
//     }else{
//        console.log('invalid input');
//        false;
//       }

//       console.log(result);
      
function validate()
	{
      var read = require('readline-sync');
   // var prompt =require('prompt-sync')();
    //var regex =require("regex");
    var result1,result2,result3,fullName;
    var str = "Hello <<name>>, We have your fullname as <<full name>> in our system. ";
    var str1 = "Your contact number is <<91­xxxxxxxxxx>> .";
    var str2 = "Thank you!! BridgeLabz <<dd-mm-yyyy>> ";
    // var regex = new Regex();
    nameRestriction = /[a-z]/ig;
    contactRestriction = /[0-9]/g;
    var name = read.question("Please enter your name: ");
    if(nameRestriction.test(name) && name.length>3) 
    {
        result = str.replace(/<<name>>/,name);
    }
       
    else
    {
        console.log("Invalid name!");
        return false;
    }
    fullName = read.question("Please enter your full name: ");
        if(nameRestriction.test(fullName) && fullName.length>3)
        {
            result1 = result.replace(/<<full name>>/,fullName);
        }
        else
        {
            console.log("Invalid full name!");
            return false;
        }
    var contactNum = read.question("Please enter your contact number: ");
    if(contactRestriction.test(contactNum) == true && contactNum.length == 10)
    {
        result2 = str1.replace(/<<91­xxxxxxxxxx>>/,contactNum);
    }
    else
    {
        console.log("Invalid number!");
        return false;
    }
    console.log(result1+" "+result2);
    var d = new Date();
    var date = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
    result3 = str2.replace(/<<dd-mm-yyyy>>/, date);
    console.log(result3);   
}
validate();



 //}
// regularExpression();