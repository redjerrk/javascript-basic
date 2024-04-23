/**
 * if ticket is less than 100 then price is 100
 * if 101 - 200 price is 90
 * if 200+ price is 70
 * 
 */

function priceCalculation (amount){
    let totalPrice = 0;

    if(amount <= 100){
        totalPrice = amount * 100;
    }
    else if (amount >100 && amount <= 200){
        totalPrice = 100*100;
        totalPrice += (amount - 100)*90;
    }
    else if(amount >200){
        totalPrice = 100*100;
        totalPrice += 100 * 90;
        totalPrice += (amount - 200)*70;
    }
    return totalPrice;
}

console.log(priceCalculation(120));