/**
 * create stock report class 
 */
class Stock{
    /**
     * 
     * @param {name of stock} stock 
     * @param {number of shares} noOFShares 
     * @param {price of shares} price 
     * @param {total } total 
     */
    constructor(stock,noOFShares,price,total){
        this.stock=stock;
        this.noOFShares=noOFShares;
        this.price=price;
        this.total=total;
    }
}
//var obj = new Stock();
/**
 * export module
 */
module.exports={
    Stock
}