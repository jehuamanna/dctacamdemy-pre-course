var product = {
    name: 'Marker',
    price: 25,
    description: 'White board marker',
    rating: 4.5
}

for(var key in product){
    console.log(key, product[key])
}