function cheapPrice (phoneObject){
    let cheapest = phoneObject[0];
    for(let i = 0; i<phoneObject.length; i++){
        if(cheapest.price > phoneObject[i].price){
            cheapest = phoneObject[i];
        }

    }
    console.log(cheapest.price);
}


const phone = [
    {name: 'samsung', price: 45000, ram: '32gb', color: 'silver', camera: '30mp'},
    {name: 'samsung', price: 44000, ram: '32gb', color: 'silver', camera: '30mp'},
    {name: 'samsung', price: 32000, ram: '32gb', color: 'silver', camera: '30mp'},
    {name: 'samsung', price: 5000, ram: '32gb', color: 'silver', camera: '30mp'},
    {name: 'samsung', price: 55400, ram: '32gb', color: 'silver', camera: '30mp'},
    {name: 'samsung', price: 12000, ram: '32gb', color: 'silver', camera: '30mp'}
]

cheapPrice(phone)