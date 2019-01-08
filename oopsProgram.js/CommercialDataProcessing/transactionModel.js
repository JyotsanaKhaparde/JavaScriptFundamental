/**
 * create stock report class 
 */
class transactionStock{
   /**
    * 
    * @param {name of company} symbol 
    * @param {customer id} customerId 
    * @param {buy and sell} type 
    * @param {current date} date 
    */
    
    constructor(symbol,customerId,type,date){
        
        this.symbol= symbol;
        this.customerId = customerId;
        this.type = type;
        this.date = date;
       
    }
}
/**
 * export module
 */
module.exports={
    transactionStock
}