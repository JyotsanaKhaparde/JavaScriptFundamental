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

function validate()
{
    var utility = require('../utility/Utility');
    var read = require('readline-sync');
    
    var file = require('fs');
    nameRestriction = /[a-z]/ig;
    contactRestriction = /[0-9]/g;


    var data = file.readFileSync('regularExpression.txt','utf8');
     
    // var name = read.question('Please enter your name: ');
    //  if(nameRestriction.test(name)){
    //     var p = data.replace("<<name>>",name);

    //  }
    //  var fullName = read.question('Please enter your full name: ');
    //  if(nameRestriction.test(fullName)){
    //     var p = data.replace("<<name>>",fullName);

    //  }
    //  var contact = read.question('Please enter your contact: ');
    //  if(contactRestriction.test(contact)){
    //     var p = data.replace("<<name>>",contact);

    //  }

     //console.log("p:"+p);
    
    //console.log(data);
    
  //  var result1,result2,result3,fullName;
   var result;
    // nameRestriction = /[a-z]/ig;
    // contactRestriction = /[0-9]/g;

    var name = read.question("Please enter your name: ");
    fullName = read.question("Please enter your full name: ");
    var contactNum = read.question("Please enter your contact number: ");


    if(nameRestriction.test(name)==true && nameRestriction.test(fullName) && nameRestriction.test(contactNum)) 
    {
        result = data.replace("<<name>>",name).replace("<<full name>>",fullName).replace("<<91­xxxxxxxxxx>>",contactNum);
    }
       
    // else
    // {
    //     console.log("Invalid name!");
    //     return false;
    // }
    // fullName = read.question("Please enter your full name: ");
    //     if(nameRestriction.test(fullName)==true && fullName.length>3)
    //     {
    //         result1 = data.replace("<<full name>>",fullName);
    //     }
    //     else
    //     {
    //         console.log("Invalid full name!");
    //         return false;
    //     }
    // var contactNum = read.question("Please enter your contact number: ");

    // //The test() method returns true if it finds a match, otherwise it returns false.
    // if(contactRestriction.test(contactNum) == true && contactNum.length == 10)
    // {
    //     result2 = data.replace("<<91­xxxxxxxxxx>>",contactNum);
    // }
    // else
    // {
    //     console.log("Invalid number!");
    //     return false;
    // }
   // console.log(result1+" "+result2);
   console.log(result);
   
    var d = new Date();

    var date = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
   var  result3 = data.replace("<<dd-mm-yyyy>>", date);
    console.log(result3);   
}
validate();



 