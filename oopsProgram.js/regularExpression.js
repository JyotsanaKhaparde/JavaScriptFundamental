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

 var read = require('readline-sync');
 var fs = require('fs');

 function regularExpression(){

    // var str1 = "Hello <<name>>";
    // var str2 = "We have your full name as <<full name>> in our system";
    // var str3 = "your contact number is 91­xxxxxxxxxx";
    // var str4 = "Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.";

    //read file from inventory.json 
    var element = fs.readFileSync('regularExpression.json');

    //JSON.parse-Converts a JavaScript Object Notation (JSON) string into an object.
    var jsonRegularExpression = JSON.parse(element);

    var name = read.question("please enter your name: ");



 }
 regularExpression();