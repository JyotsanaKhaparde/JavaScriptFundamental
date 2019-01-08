/***********************************************************************************
 *  Purpose         : Write a program to read in Stock Names, Number of Share, Share Price.
                      Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @file           : stockAccount.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 08-01-2019
 **********************************************************************************/


    var StockPortfolio = require('./stockPortfolio');
    var fs =  require('fs');
    var data = fs.readFileSync('stock.json','utf8');
    var jsonData = JSON.parse(data);

    function stock()
    {
        var read = require('readline-sync');

        console.log("1).Enter Stock ");
        console.log("2).Display stock ");
        console.log("3).Save ");
        console.log("4).Delete ");
        console.log("5).Update");
        console.log("6).Exit ");

        var choice = read.question('Please enter your choice: ');
        if(choice == 1)
        {

            var name = read.question('Enter stock name : ');
            var noOFShares = read.question('Enter number of shares :');
            var price =  read.question('Enter price of shares; ');

            var total = parseInt(noOFShares)*parseInt(price);

            var passToClass = new StockPortfolio.Stock(name,noOFShares,price,total);

            jsonData.shares.push(passToClass);
            stock();
        
            
        }
        else 
        if(choice == 2)
        {
            /**
         * display stock report to user
         */
        
            console.log(jsonData);
            stock();
        }
        else  
        if(choice == 3)
        {
            fs.writeFileSync('stock.json', JSON.stringify(jsonData),'utf-8', function(err){
                if (err) throw err
                console.log('Done!');
            })
            stock();
        }
        else 
        if(choice == 4)
        {
            var attribute = read.question('name of item you want to delete in shares:');
            for(var i=0;i<jsonData.shares.length;i++)
            {
                if(attribute === jsonData.shares[i].stock)
                {
                    console.log('deleted element',attribute);
                    console.log('search elemetn in array: ',jsonData.shares[i].stock);
                    jsonData.shares.splice(i, 1);
                }
            }
            console.log("after deletion data is",jsonData);
            stock();
        }
        else
        if(choice == 5)
        {
            var attribute = read.question('name of item you want to update in shares:');
            for(var i = 0; i < jsonData.shares.length ; i++)
            {
                if(attribute === jsonData.shares[i].stock)
                {
                    console.log('1)Update stock');
                    console.log('2)Update number of shares');
                    console.log('3)Update price ');
                    var choice2 = read.question('Enter choice for update :');
                    if(choice2 == 1)
                    {
                        var Newname = read.question('Enter new stock name : ');
                        jsonData.shares[i].stock=Newname;
                        stock();
                    }
                    else 
                    if(choice2 == 2)
                    {
                        var NewNumberOfShares = read.question('Enter new number os shares : ');
                        jsonData.shares[i].noOFShares = NewNumberOfShares;
                        var newTotal = parseInt(NewNumberOfShares)*parseInt(jsonData.shares[i].price);
                        jsonData.shares[i].total = newTotal;
                        stock();
                    }
                    else 
                    if(choice2 == 3)
                    {
                        var newPrice = read.question('Enter new price : ');
                        jsonData.shares[i].price = newPrice;
                        var newTotal = parseInt(jsonData.shares[i].noOFShares)*parseInt(newPrice);
                        jsonData.shares[i].total = newTotal;
                        stock();
                    }
                }

            }

        }
        else 
        if(choice == 6)
        {
            process.exit();

        }

    }stock();