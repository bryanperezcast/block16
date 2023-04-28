const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
/*speudocode
first we want to create a fuction that checks if a customer has a subscription, if they do we want it to give the customer a 25% discount and return the new price
we can do this with an if statement that will have the argument as the customer and will multiply the total price times .75 if the customer has a subscription
and will return the new price 
if they do not have a subscription it will still return the updated price variable but without changing the price
*/
let refilPrice
function hasSubscription(customer){
    if(customer.subscription){
        refilPrice *= .75;
    }
    return refilPrice;
}
/*speudocode
first we want to create a function that checks if a customer has a coupon, if they do then we want it to subtract 10 to the customer total price and return the new price
we can do this with an if statement that will have the argument as the customer and will check if coupon is true, if it is then it will subtract $10 to the new price and return the updated
price, if it comes back false then it will still return the updated price but without changing the price
*/
function hasCoupon(customer){
    if(customer.coupon){
        refilPrice -= 10;
    }
    return refilPrice;
}
/*speudocode
first we want it to multiply the price per refil with the amount of refils and set the price to the total
next we want to call the subscription function and run the customer as the argument and it will return an updated price
next we want to call the coupon function and run the customer as the argument and it will return an updated price
then we want it to return Your grand total is $${total}
*/
function totalCost (customer) {
    refilPrice = customer.pricePerRefill * customer.refills;
    hasSubscription(customer); // returns the new refilprice
    hasCoupon(customer); //returns the new refilprice
    return `Your grand total is $${refilPrice}`;
}
/*speudocode
now we want to console log by calling the total cost function and run the customer object as the argument
ex totalcost(timmy)
this should return the string with the total that has the updated price that checks if they have a coupon and a subscription and it will aoutomatically change the price accordingly
*/
console.log(totalCost(timmy));
console.log(totalCost(sarah));
console.log(totalCost(rocky));