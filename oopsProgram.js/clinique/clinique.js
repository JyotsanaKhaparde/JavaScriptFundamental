/***************************************************************************
 *purpose   : To print doctor patient report within the clinique managment system.    
 * @file    : Clinique.js
 * @author  : Jyhotsana Khaparde
 * @version : 1.0
 * @since   : 10/01/2019 
 *******************************************************************************/ 

    //used to take input from user
    var read=require('readline-sync');

    //used for performing file operations
    var fs =  require('fs');

    //read json files
    var patientData = fs.readFileSync('patients.json','utf8');
    var doctorData = fs.readFileSync('doctor.json','utf8');

    //JSON.parse() is for "parsing" something that was received as JSON.
    var jsonpatientData = JSON.parse(patientData);
    var jsondoctorData = JSON.parse(doctorData);

    function Clinique()
    {
    do
    { 
        //show menu
        console.log("1.Add Appointment");
        console.log("2.Print list");
        console.log("3.search");
        console.log("4.save");
        console.log("5.Exit!");

        //take input from user
        var option = read.question('Enter the option:');

        //switch case for take choice as input
        switch(parseInt(option)) 
        {
            //case 1 is for add appointment
            case 1:
                console.log("****Doctors Available are****");

                //show details of doctor
                console.log(jsondoctorData.Doctors); 
                
                //take input from user
                var inputName = read.question(' Enter Patient Name: ');
                var inputID =  parseInt(Math.random()*1000);
                var inputmobNo = read.question(' Enter your Mobile Number: ');
                var inputAge = read.question(' please Enter your Age: ');
                var inputAppointed_To = read.question('whose appointment u want: ');

                //push data into patient.json
                jsonpatientData.Patients.push(
                {
                    "Name":inputName,
                    "ID":inputID,
                    "mobNo":inputmobNo,
                    "Age":inputAge,
                    "Appointed_To":inputAppointed_To
                })

                console.log("Appointment Added Successfully..."); 

                //show patients data
                console.log(jsonpatientData.Patients);
                Clinique();
                break;

            //case 2 is for print list    
            case 2:
                console.log(jsonpatientData); 
                console.log(jsondoctorData);
                Clinique();         
                break;

            //case 3 is for search list    
            case 3:
                console.log("****SEARCH LIST******");
                console.log("1.Doctor \n 2.Patient");
                var option2 = read.question('Enter Option: ');

                //perform operation for doctor
                if(option2==1)
                { 
                    console.log("1.Search by Name\n2.Search by ID\n3.Search by Specialization\n4.Search by Availability"); 
                    var option3=read.question('Enter option: ');

                    //perform operation for search by name
                    if(option3==1)
                    {
                        var i = read.question('Enter Name: ');
                        for(var key in jsondoctorData.Doctors)
                        {
                            if(jsondoctorData.Doctors[key].Name==i)
                            {
                                console.log(" Doctor Details");
                                console.log(jsondoctorData.Doctors[key]);
                            }
                        }
                    }
                    else 
                    //perform operation for search by id
                    if(option3==2)
                    {
                        var i = read.question('Enter ID: ');
                        for(var key in jsondoctorData.Doctors)
                        {
                            if(jsondoctorData.Doctors[key].ID==i)
                            {
                                console.log(" Doctor Details");
                                console.log(jsondoctorData.Doctors[key]);
                            }
                        }
                    }
                    else 
                    //perform operation for Search by Specialization
                    if(option3==3)
                    {
                        var i = read.question('Enter Specialization: ');
                        for(var key in jsondoctorData.Doctors)
                        {
                            //checking specialization and alredy filled specialization in doctor.json
                            if(jsondoctorData.Doctors[key].Specialization==i)
                            {
                                console.log(" Doctor Details");
                                console.log(jsondoctorData.Doctors[key]);
                            }
                        }
                    }
                    else 
                    //perform operation for Search by Availability
                    if(option3==4)
                    {
                        var i = read.question('Enter Availability: ');
                        for(var key in jsondoctorData.Doctors)
                        {
                            //checking availability and alredy availability in doctor.json
                            if(jsondoctorData.Doctors[key].Availability==i)
                            {
                                console.log("Doctors Details");
                                console.log(jsondoctorData.Doctors[key]);
                            }
                        }
                    }
                    Clinique();
                }
                //perform operation for patient
                if(option2==2)
                { 
                    //menu for seaching patient
                    console.log("1.Search by Name\n2.Search by ID\n3.Search by mobNo\n4.Search by Age"); 
                    var option4=read.question('Enter option: ');

                    //Search by Name
                    if(option4==1)
                    {
                        var i = read.question('Enter Name: ');
                        for(var key in jsonpatientData.Patients)
                        {
                            //checking input name and alredy present name in patients.json
                            if(jsonpatientData.Patients[key].Name==i)
                            {
                                console.log(" Patients Details");
                                //show patient details
                                console.log(jsonpatientData.Patients[key]);
                            }
                        }
                    }
                    else 
                    //Search by ID
                    if(option4==2)
                    {
                        var i = read.question('Enter ID: ');
                        for(var key in jsonpatientData.Patients)
                        {
                            //checking input id and alredy present id in patients.json
                            if(jsonpatientData.Patients[key].ID==i)
                            {
                                console.log("Patient Details");
                                //show patient details
                                console.log(jsonpatientData.Patients[key]);
                            }
                        }
                    }
                    else 
                    // Search by mobNo
                    if(option4==3)
                    {
                        var i = read.question('Enter mobNo: ');
                        for(var key in jsonpatientData.Patients)
                        {
                            //checking input mobile number and alredy present mobile number in patients.json
                            if(jsonpatientData.Patients[key].mobNo==i)
                            {
                                console.log("Patient Details");
                                //show patient details
                                console.log(jsonpatientData.Patients[key]);
                            }
                        }
                    }
                    else 
                    //Search by Age
                    if(option4==4)
                    {
                        var i = read.question('Age: ');
                        for(var key in jsonpatientData.Patients)
                        {
                            //checking input age and alredy present age in patients.json
                            if(jsonpatientData.Patients[key].Age==i)
                            {
                                console.log("Patient Details");
                                //show patient details
                                console.log(jsonpatientData.Patients[key]);
                            }
                        }
                    }
                    Clinique();
                }
                break;

                //case 4 for save data into patients.json
                case 4:
                fs.writeFileSync('patients.json', JSON.stringify(jsonpatientData),'utf-8', function(err){
                    if (err) throw err
                    console.log('Done!');
                    })
                    Clinique();
                break;

                case 5:
                process.exit();
                break;

                default:
                console.log("please enter valid input");
            
        }
    }
    while(option!=4);
}
Clinique();
