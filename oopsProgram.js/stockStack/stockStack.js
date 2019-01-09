var read = require('readline-sync');
//var com = require('../CommercialDataProcessing/stockAccount.js')
var fs = require('fs');
//var companyData = fs.readFileSync('company.json','utf8');
//var customerData = fs.readFileSync('customer.json','utf8');
var transactionData = fs.readFileSync('transaction.json','utf8');

//var jsoncompanyData = JSON.parse(companyData);
//var jsoncustomerData = JSON.parse(customerData);
var jsontransactionData = JSON.parse(transactionData);
const stack = require('../stockStack/Stack');
var list = new stack.Stack;

// for(var key in jsontransactionData.transaction)
// {
//     list.add(jsontransactionData.transaction[key])  
// }
 
function MaintainStockSymbol()
{
    console.log('1).buy \n  2).sell');
    var choice = read.question('Enter choice: ');

    if(choice == 1)
    {
    // var nameOfCompanyForShares = read.question('Enter company name from which you want to buy shares :')
    // for(let j = 0 ; j < jsoncompanyData.company.length ; j++)
    // {
    // if(jsoncompanyData.company[j].symbol === nameOfCompanyForShares)
    // {
             
    //     var buyShares = read.question('Enter shares you want to buy:');
    //     if(parseInt(buyShares) < parseInt(jsoncompanyData.company[j].totalShares))
    //     {
            //console.log('entered shares: ',buyShares);
            //console.log('company,s total shares: ',jsoncompanyData.company[j].totalShares);
                 
          //  jsoncompanyData.company[j].totalShares =parseInt(jsoncompanyData.company[j].totalShares - buyShares); 
          //  jsoncustomerData.customer[i].shares =parseInt(jsoncustomerData.customer[i].shares + parseInt(buyShares));
            jsontransactionData.transaction.type = "buy";
            // var d = new Date();
            // var date = d.getDate();
            // var month = d.getMonth();
            // var year = d.getFullYear();
            // var today = date+"/"+(month+1)+"/"+year;
            // jsontransactionData.transaction[i].date = today;

            var enterValue = {
                type: jsontransactionData.transaction.type,
                //date: PerShare,
               /// totalShare: today
            }
            list.push(enterValue)
            list.print();
           // list.add(enterValue);   
                 
            // jsontransactionData.transaction.push({
            // symbol: jsoncompanyData.company[j].symbol,
            // customerId: jsoncustomerData.customer[i].customerId,
            // type: "buy",
            // date: date+"/"+(month+1)+"/"+year
                     
            // });        
        }
            
    

  //  }
   // commercial();
//} 



if(choice == 2)
{
    var nameOfCompanyForSell = read.question('Enter company name to which you want to sell shares :')
    for(let z = 0 ; z < jsoncompanyData.company.length ; z++)
    {
        if(jsoncompanyData.company[z].symbol === nameOfCompanyForSell)
        {
            var sellShares = read.question('Enter shares you want to sell:');
            sellShares = parseInt(sellShares);
            jsoncompanyData.company[z].totalShares =parseInt(jsoncompanyData.company[z].totalShares +parseInt(sellShares)); 
            jsoncustomerData.customer[i].shares =parseInt(jsoncustomerData.customer[i].shares - sellShares);
            jsontransactionData.transaction[i].type = "sell";
            var d = new Date();
            var date = d.getDate();
            var month = d.getMonth();
            var year = d.getFullYear();
            var today = date+"/"+(month+1)+"/"+year;
            jsontransactionData.transaction[i].date = today;
            jsontransactionData.transaction.push({
            symbol: jsoncompanyData.company[z].symbol,
            customerId: jsoncustomerData.customer[i].customerId,
            type: "sell",
            date: date+"/"+(month+1)+"/"+year        
            });         

        }
    }
} 
}
MaintainStockSymbol();
