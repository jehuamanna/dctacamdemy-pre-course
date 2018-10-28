var products = [
    {
        name: "AirMax 2017",
        price: 3299,
        quantity: 1
    },
    {
        name: "Mac Book Pro",
        price: 50000,
        quantity: 1
    }
];

console.log("Total products in cart : " + products.length);

for (var i=0; i<products.length; i++){
    console.log(products[i].name + " " + products[i].price)
}