/**
 * create stock report class 
 */
class customerStock
{
    /**
     * 
     * @param {name of company} symbol 
     * @param {customer id} customerId 
     * @param {name of customer} customerName 
     * @param {amount} amount 
     * @param {shares} shares 
     */
    
    constructor(symbol,customerId,customerName,amount,shares)
    {
            
        this.symbol= symbol;
        this.customerId = customerId;
        this.customerName = customerName;
        this.amount = amount;
        this.shares = shares;
       
    }
}
/**
 * export module
 */
module.exports=
{
    customerStock
}