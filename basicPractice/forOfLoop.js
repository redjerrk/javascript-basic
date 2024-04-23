const numbers = [40, 20, 50, 60, 80, 70, 30]

for (const number of numbers){
    console.log(number);
}

const products = [
    {id: 1, name: "xiaomi phone", price: 112000},
    {id: 2, name: "iphone", price: 198000},
    {id: 3, name: "walton ", price: 118000},
    {id: 4, name: "samsung ", price: 138000},
    {id: 5, name: "nokia phone", price: 186000},
    {id: 6, name: "oppo phone", price: 158000},
    {id: 7, name: "oneplus phone", price: 148000},
    {id: 8, name: "vivo ", price: 138000},
    {id: 9, name: "itel phone", price: 182000},
    {id: 10, name: "sony ", price: 128000},
]

// for(product of products){
//     console.log(product.name);
// }


function matchCheck (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const matched = matchCheck(products, 'phone');
console.log(matched);