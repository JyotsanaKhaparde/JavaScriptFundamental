/***********************************************************************************
 *  Purpose         : StockAccount.java implements a data type that
                      might be used by a financial institution to keep track of customer information.
 *  @file           : stockAccount.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 08-01-2019
 **********************************************************************************/

    var companyModel = require('./companyModel');
    var customerModel = require('./customerModel');
    var transactionModel = require('./transactionModel');

    var fs =  require('fs');

    var companyData = fs.readFileSync('company.json','utf8');
    var customerData = fs.readFileSync('customer.json','utf8');
    var transactionData = fs.readFileSync('transaction.json','utf8');

    var jsoncompanyData = JSON.parse(companyData);
    var jsoncustomerData = JSON.parse(customerData);
    var jsontransactionData = JSON.parse(transactionData);

    function commercial()
    {
        var read = require('readline-sync');

        console.log("1).Create account ");
        console.log("2).Open account ");
        console.log("3).edit ");
        console.log("4).Save");
        console.log("5).Exit ");
        
        var choice = read.question('Please enter your choice: ');
        if(choice == 1)
        {
            var NewId = read.question('Id of  new customer :');
            var NewCustomer = read.question('name of new customer :');
                
                jsoncustomerData.customer.push({
                        customerId: NewId,
                        customerName: NewCustomer,
                    })
                commercial();
                
            
        }
        if(choice == 2)
        {
            var existingId = read.question('Enter your id: ');
            for(var i = 0 ; i < jsoncustomerData.customer.length ; i++)
            {
                if(jsoncustomerData.customer[i].customerId == existingId)
                {
                    console.log('This is your account details: ');
                    console.log();
                    console.log('symbol: ',jsoncustomerData.customer[i].symbol);
                    console.log('customer id: ',jsoncustomerData.customer[i].customerId);
                    console.log('customer name: ',jsoncustomerData.customer[i].customerName);
                    console.log('amount: ',jsoncustomerData.customer[i].amount);
                    console.log('shares: ',jsoncustomerData.customer[i].shares);
                    console.log('\n1).Add Money \n2).Buy \n3).Sell \n4).Display \n5).Save \n6).exit');
                    var choice4 = read.question('Enter your choice :');
                     if(choice4 == 1)
                     {
                        var Newamount = read.question('Enter amount you want to add : ');
                       jsoncustomerData.customer[i].amount =  parseInt(jsoncustomerData.customer[i].amount+Newamount);
                       console.log(jsoncustomerData);
                       
                     } 
                     if(choice4 == 2)
                     {

                     } 
                     if(choice4 == 3)
                     {

                     } 
                     if(choice4 == 4)
                     {
                        console.log(jsoncustomerData.customer[i]);
                        
                     } 
                     if(choice4 == 5)
                     {
                        fs.writeFileSync('./customer.json', JSON.stringify(jsoncustomerData),'utf-8', function(err){
                            if (err) throw err
                            console.log('Done!');
                        })

                     } 
                     if(choice4 == 6)
                     {
                        process.exit();
                     } 


                }
            }
            commercial();

        }
        if(choice == 3)
        {
            console.log('1). add company');
            console.log('2). remove company');
            var choice3 = read.question('Enter your choice: ');
            if(choice3 == 1)
            {
                var CompanyName = read.question('Enter new company nname: ');
                var PeicePerShares = read.question('Enter price per shares: ');
                var TotalShares = read.question('Enter total shares: ');

                jsoncompanyData.company.push({
                    symbol : CompanyName,
                    pricePerShares : PeicePerShares,
                    totalShares : TotalShares
                })
                console.log(jsoncompanyData);
                
            }
            if(choice3 == 2)
            {
                var attribute = read.question('name company name you want to delete:');
                for(var i=0;i<jsoncompanyData.company.length;i++)
                {
                    if(attribute === jsoncompanyData.company[i].symbol)
                    {
                        console.log('deleted element',attribute);
                        console.log('search elemetn in array: ',jsoncompanyData.company[i].symbol);
                        jsoncompanyData.company.splice(i, 1);
                    }
                }
                console.log(jsoncompanyData);


            }
            
            commercial();

        }
        if(choice == 4)
        {
            fs.writeFileSync('./customer.json', JSON.stringify(jsoncustomerData),'utf-8', function(err){
                if (err) throw err
                console.log('Done!');
            })
            fs.writeFileSync('./company.json', JSON.stringify(jsoncompanyData),'utf-8', function(err){
                if (err) throw err
                console.log('Done!');
            })
            fs.writeFileSync('./transaction.json', JSON.stringify(jsontransactionData),'utf-8', function(err){
                if (err) throw err
                console.log('Done!');
            })
            commercial();

        }
        if(choice == 5)
        {
            process.exit();

        }

    }commercial();