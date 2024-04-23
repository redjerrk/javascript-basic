function priceCalculation (shoppingItems){
    let costing = 0;
    for (let i =0; i<shoppingItems.length; i++){
        const itemPrice = shoppingItems[i];
        costing += itemPrice.quantity*itemPrice.price
    }

    return costing;
}

const shopping = [
    {name: 'shirt', quantity: 2, price: 2500},
    {name: 'pant', quantity: 7, price: 1500},
    {name: 'panjabi', quantity: 6, price: 500},
    {name: 't-shirt', quantity: 5, price: 5700},
]


const totalCost = priceCalculation(shopping);
console.log(totalCost);