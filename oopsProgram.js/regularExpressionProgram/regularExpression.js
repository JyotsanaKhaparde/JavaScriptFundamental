/***********************************************************************************
 *  Purpose         : ­ Read in the following message: Hello <<name>>, We have your full
                       name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
                       Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
                       Use Regex to replace name, full name, Mobile#, and Date with proper value.
 *  @file           : regularExpression.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 05-01-2019
 **********************************************************************************/

function validate()
{
    var utility =  require('../../utility/Utility');
    var read = require('readline-sync');

    const fs = require('fs');
    var file = fs.readFileSync('regularExpression.txt','utf8');
    console.log(file);

    var fullName = read.question('Enter your fullname :');
    var name = fullName.split(" ");
    var fName = name[0];

    var status = utility.validateName(fName);
    if(status == true)
    {     
        console.log('First name :',fName);
        
    }
    else
    {
        console.log("invalid fullName");
        process.exit();
        
    }


    var contact = read.question('Enter your contact number :');
    var contactCheck = utility.validateContact(contact);

    if(contactCheck == true)
    {
        console.log("Contact is :",contact);
    }
    else
    {
        console.log("Invalid Contact");
    }
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var today = date+"/"+(month+1)+"/"+year;

    utility.displayRegex(file,fName,fullName,contact,today);
}
    validate();