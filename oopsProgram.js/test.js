System.out.println("Enter name :");
		String name = Utility.inputString();
		String splitname[] = name.split(" ");
		String fname = splitname[0];
		System.out.println(fname);
		System.out.println("Enter your mobile :");
		String contact = Utility.inputString();
		
		DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		Date date = new Date();
		String today = dateFormat.format(date);
		System.out.println(today);
		
		String template ="Hello <<name>>, We have your full name as <<full name>> in our system. "
				+ "Your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification."
				+ " Thank you BridgeLabz 01/01/2016";
		String regexName="<<name>>";
		String regexFullName="<<full name>>";
		String regexPhoneNumber="xxxxxxxxxx";
		String regexDate="01/01/2016";
		
		//Method is used for replace the operation
				template=Utility.replaceOperation(template,regexName,fname);
				template=Utility.replaceOperation(template,regexFullName,name);
				template=Utility.replaceOperation(template,regexPhoneNumber,contact);
				template=Utility.replaceOperation(template,regexDate,today);
				System.out.println(template);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	public static String replaceOperation(String template,String regexName,String firstName)
	    {
	    	Pattern pattern = Pattern.compile(regexName);
	    	Matcher match = pattern.matcher(template);
	         return match.replaceAll(firstName);
	    }
		

public static boolean nameValidate(String name)
		{
			boolean flag = false;
			Pattern pattern = Pattern.compile(name);
			if (Pattern.matches("[a-zA-Z]*+",name)) 
			{
				flag = true;
			}
			else
			{
				flag = false;
			}
			return flag;			
		}

	//*****************************************************************************************

		/**
		* @param contact is the contact of user
		* @return This method check the input validations of contact 
		*/
		public static boolean contactValidate(String contact)
		{	
			boolean flag = false;
			Pattern p = Pattern.compile("^(0/91)?[7-9][0-9]{9}$"); 
		        Matcher m = p.matcher(contact); 
		       if( (m.find() && m.group().equals(contact)))
		       {
		    	   flag = true;
		       }
		       else
		       {
		    	   flag = false;
		       }
		        return flag;
		}


	//*****************************************************************************************

		/**
		* @param email is the email id of user
		* @return This method check the input validations of email 
		*/
		public static boolean emailValidate(String email)
		{	
			boolean flag = false;
			Pattern p = Pattern.compile("^[a-zA-Z0-9_+&*-]+(?:\\."+ 
                     "[a-zA-Z0-9_+&*-]+)*@" + 
                     "(?:[a-zA-Z0-9-]+\\.)+[a-z" + 
                     "A-Z]{2,7}$");
					
		        Matcher m = p.matcher(email); 
		        if ((m.find() && m.group().equals(email)))
			       {
			    	   flag = true;
			       }
			       else
			       {
			    	   flag = false;
			       }
			        return flag;
		}

	//*****************************************************************************************

		/**
		* @param userId is the userId of user
		* @return This method check the input validations of userId 
		*/
		public static boolean userIdValidate(String userId)
		{	
			boolean flag = false;
			Pattern p = Pattern.compile("[A-Za-z0-9_]+"); 
		        Matcher m = p.matcher(userId); 
		        if( (m.find() && m.group().equals(userId)))
		        {
			    	   flag = true;
			       }
			       else
			       {
			    	   flag = false;
			       }
			        return flag;
		}

	//*****************************************************************************************

		/**
		* @param password is the password of user
		* @return This method check the input validations of password 
		*/
		public static boolean passwordValidate(String password)
		{	
			boolean flag = false;
			Pattern p = Pattern.compile("((?=.*\\d)(?=.*[A-Z])(?=.*[!^&*@#$%]).{8,20})+"); 
		        Matcher m = p.matcher(password); 
		        if( (m.find() && m.group().equals(password)))
		        {
			    	   flag = true;
			       }
			       else
			       {
			    	   flag = false;
			       }
			        return flag;
		}


		//******************************************************************** */

	function validate()
	{
    var prompt =require('prompt-sync')();
    var regex =require("regex");
    var result1,result2,result3,fullName;
    var str = "Hello <<name>>, We have your fullname as <<full name>> in our system. ";
    var str1 = "Your contact number is <<91­xxxxxxxxxx>> .";
    var str2 = "Thank you!! BridgeLabz <<dd-mm-yyyy>> ";
    // var regex = new Regex();
    nameRestriction = /[a-z]/ig;
    contactRestriction = /[0-9]/g;
    var name = prompt("Please enter your name: ");
    if(nameRestriction.test(name) && name.length>3) 
    {
        result = str.replace(/<<name>>/,name);
    }
       
    else
    {
        console.log("Invalid name!");
        return false;
    }
    fullName = prompt("Please enter your full name: ");
        if(nameRestriction.test(fullName) && fullName.length>3)
        {
            result1 = result.replace(/<<full name>>/,fullName);
        }
        else
        {
            console.log("Invalid full name!");
            return false;
        }
    var contactNum = prompt("Please enter your contact number: ");
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

