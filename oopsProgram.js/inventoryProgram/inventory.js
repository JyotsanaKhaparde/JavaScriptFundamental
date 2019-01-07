/***********************************************************************************
 *  Purpose         : Create a JSON file having Inventory Details for Rice, Pulses and Wheats
                      with properties name, weight, price per kg.
 *  @file           : inventory.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 07-01-2019
 **********************************************************************************/


    //uses for handling all the file operations
    var fs = require('fs');

    //using prompy-sync asking user to enter the input
    var read = require('readline-sync');

    //reading data from a json file
    var data = fs.readFileSync('./inventory.json', 'utf-8');

    //printing data from json file
    console.log("Data in a json file is\n" + data);

    //for holding the object 
    var arrayOfObjects = [];
    arrayOfObjects = JSON.parse(data);

    console.log(" ");
    var totalPrice = 1;

    function menue() 
    {
        console.log(" ");
        //menue
        console.log("Inventory Management-->");
        console.log("1: Add to inventory");
        console.log("2: Delete from inventory");
        console.log("3: Save");
        console.log("4: Exit");
        var choice = read.question("Please enter your choice: ");

        //Insert
        if (choice == '1') 
        {
            nameRestriction = /[a-z]/ig;
            var num = read.question("Enter the value for the stock->");
            for (var i = 0; i < num; i++) 
            {
                var Name = read.question("Please enter the item you want to add: ");
                var weight = read.question("Please enter the number of  Kgs: ");
                var price = read.question("Please enter the price per Kg.: ");
                if (nameRestriction.test(Name) && isNaN(weight) != -1 && isNaN(price) != -1) 
                {
                    console.log('Enter into perticular object:');
                    console.log("1: Rice");
                    console.log("2: Wheat");
                    console.log("3: Pulses");      
                    var choice2 = read.question('Enter choice: ');
                    if(choice2 == 1)
                    {
                        arrayOfObjects.Rice.push({
                            name : Name,
                            weight: weight,
                            price : price
                        })
                    }
                    if(choice2 == 2)
                    {
                        arrayOfObjects.Wheats.push({
                            name : Name,
                            weight: weight,
                            price : price
                        })

                    }
                    if(choice2 == 3)
                    {
                        arrayOfObjects.pulses.push({
                            name : Name,
                            weight: weight,
                            price : price
                        })

                    }
                    
                
                }
                else 
                {
                    console.log("Invalid input for name,weight and price!");
                    return false;
                }
                console.log(arrayOfObjects);
                console.log("");
                for(var i=0;i<arrayOfObjects.Rice.length;i++)
                {
                console.log("Per Kg. of "+arrayOfObjects.Rice[i].name+" costs "+arrayOfObjects.Rice[i].price+" and for "+weight+" Kgs. costs "+weight*arrayOfObjects.Rice[i].price);
                }

                for(var i=0;i<arrayOfObjects.Wheats.length;i++)
                {
                console.log("Per Kg. of "+arrayOfObjects.Wheats[i].name+" costs "+arrayOfObjects.Wheats[i].price+" and for "+weight+" Kgs. costs "+weight*arrayOfObjects.Wheats[i].price);
                }

                for(var i=0;i<arrayOfObjects.pulses.length;i++)
                {
                console.log("Per Kg. of "+arrayOfObjects.pulses[i].name+" costs "+arrayOfObjects.pulses[i].price+" and for "+weight+" Kgs. costs "+weight*arrayOfObjects.pulses[i].price);
                }
                    console.log("");
                    menue();
                }

            }

        //Delete item from the JSON file
        else if (choice == '2') 
        {
            console.log("1: Rice");
            console.log("2: Wheat");
            console.log("3: Pulses");  
            var del = read.question('please enter the choice of product you want to delete:');
                    
            if(del == 1)
            {
                var attribute = read.question('name of item you want to delete in rice:');
                for(var i=0;i<arrayOfObjects.Rice.length;i++)
                {
                    if(attribute === arrayOfObjects.Rice[i].name)
                    {
                        console.log('deleted element',attribute);
                        console.log('search elemetn in array: ',arrayOfObjects.Rice[i].name);
                        arrayOfObjects.Rice.splice(i, 1);
                    }
                }
                 console.log("after deletion data is",arrayOfObjects);
                
            }

            if(del == 2)
            {
                var attribute = read.question('name of item you want to delete in Wheat:');
                for(var i=0;i<arrayOfObjects.Wheats.length;i++)
                {
                    if(attribute === arrayOfObjects.Wheats[i].name)
                    {

                        console.log('deleted element',attribute);
                        console.log('search elemetn in array: ',arrayOfObjects.Wheats[i].name);
                        arrayOfObjects.Wheats.splice(i, 1);
                    }
                }
                console.log("after deletion data is",arrayOfObjects);
            }

            if(del == 3)
            {
                var attribute = read.question('name of item you want to delete in pules:');
                for(var i=0;i<arrayOfObjects.pulses.length;i++)
                {
                    if(attribute === arrayOfObjects.pulses[i].name)
                    {
                        console.log('deleted element',attribute);
                        console.log('search elemetn in array: ',arrayOfObjects.pulses[i].name);
                        arrayOfObjects.pulses.splice(i, 1);
                    }
                }
               
            }
        
            
            menue();
        }

        //save
        else if(choice == '3')
        {
            fs.writeFileSync('./inventory.json', JSON.stringify(arrayOfObjects),'utf-8', function(err){
                if (err) throw err
                console.log('Done!');
            })
            menue();
        }
        
        //exit();

        else if(choice == '4')
        {
            process.exit();
        }
    }
    //calling function
    menue();
