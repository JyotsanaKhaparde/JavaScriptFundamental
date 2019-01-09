/***********************************************************************************
 *  Purpose         : Maintain the List of CompanyShares in a Linked List So new CompanyShares can
                      be added or removed easily.
 *  @file           : stockLinkedList.js
 *  @author         : Jyotsana Khaparde
 *  @version        : v10.11.0
 *  @since          : 09-01-2019
 **********************************************************************************/

var read =  require('readline-sync');
var fs = require('fs');
var element = fs.readFileSync('company.json');
var jsonCompanyData = JSON.parse(element);
const linked = require('../stockLinkedList/LinkedList');
var list = new linked.LinkedList;

for(var key in jsonCompanyData.company)
{
    list.add(jsonCompanyData.company[key])  
}

function Stocklinkedlist()
{
    console.log('\n1.Add  \n2.Remove  \n3.Save \n4.Display \n5.Exit');
    var choice = read.question('Enter your choice :');
    if(choice == 1)
    {
        var name = read.question('Enter company name :');
        var PerShare = read.question('Enter per share price :');
        var total = read.question('Enter total number of shares :');
        var enterValue = {
            symbol: name,
            pricePerShare: PerShare,
            totalShare: total
        }

        list.add(enterValue);      
        console.log('----- Company added -----');
        Stocklinkedlist();
    }
    else 
    if(choice == 2)
    {
        var array = [];
        array = list.printListStock();  
        console.log(array);
        var curr = list.head;   
        var deleteCompany = read.question('Enter the company you want to delete :');
        let n = 0;
        var flag=true;
        while(curr && flag)
        {
            n++;           
            if(curr.data.symbol === deleteCompany)
            {  
                console.log('curr :',curr.data.symbol);                
                list.popIndex(n);
                flag=false;              
            }
            curr = curr.next;
        }
        if(flag)
        {
            console.log('Index not found');
        }

        console.log('Updated List');
        var array = [];
        array = list.printListStock();  
        console.log(array);
        Stocklinkedlist();
    }
    else 
    if(choice == 3)
    {
        var arrayForOutput = [];
        arrayForOutput = list.printListStock();
        console.log('Output Array is :');     
        console.log(arrayForOutput);
        var b={"company":arrayForOutput}
        fs.writeFileSync('./company.json', JSON.stringify(b), 'utf-8', function () 
        {
            console.log('done')
        });
        console.log('Data saved to file'); 
        Stocklinkedlist();       
    }
    else 
    if(choice == 4)
    {
        var array = [];
        array = list.printListStock();  
        console.log(array);
        Stocklinkedlist();
    }
    else
    if(choice == 5)
    {
        console.log("exit");
        process.exit();
        
    }
    else 
    {
        console.log('-----Invalid choice-----'); 
        Stocklinkedlist();        
    } 
}
Stocklinkedlist();