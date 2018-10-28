/*
    Define a function calculateTotal to find the cart total. You are given the cart line items.
*/

var cart = [
    {
        name: 'AirMax 2017',
        price: 3299,
        quantity: 2
    },
    {
        name: 'Mac Book Pro',
        price: 50000,
        quantity: 1
    }
]
function calculateTotal(cart){   
    var total = 0;

cart.forEach(function(item){
    total += item.price * item.quantity
})
    return total;
}

console.log(calculateTotal(cart));