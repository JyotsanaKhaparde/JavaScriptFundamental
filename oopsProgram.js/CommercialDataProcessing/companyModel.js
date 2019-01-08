/**
 * create stock report class 
 */
class companyStock{
    /**
     * @param {name of company} symbol 
     * @param {price per shares} pricePerShares 
     * @param {total shares} totalShares 
     */

    constructor(symbol,pricePerShares,totalShares){
        this.symbol= symbol;
        this.pricePerShares= pricePerShares;
        this.totalShares= totalShares
       
    }
}
/**
 * export module
 */
module.exports={
    companyStock
}