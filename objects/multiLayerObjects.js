const nayak = {
    name: 'shakib khan',

    age: 46,

    isSingle: true,

    movies: [
        {name: '1no amader skhakib pagla', year: 2015},
        { name:'king khan', year: 2018 },
    ],

    act: function(name){
        
        return('acting like he is the only superstar from bangladesh')
    },

    friends: ['apu', 'bubly', 'salman', 'amir'],

    cars: {
        name: 'tesla',
        price: 5000000,
        manufacturer:{
            owner: 'Elon Mask',
            brand: 'tesla',
            origin: 'usa'
        } 
    }
}



console.log(nayak.cars.name);
console.log(nayak.cars.price);
console.log(nayak.cars.manufacturer.origin);

console.log(nayak.act('hello'));

console.log('\n');

console.log(nayak.friends[2]);