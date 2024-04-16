
let fibonacciSeries =[]
let a = 0, b = 1, n=20, sum = 0
fibonacciSeries[0] = a
fibonacciSeries[1] = b
for (let i = 2; i<=n; i++){
    sum = fibonacciSeries[i-2] + fibonacciSeries[i-1]
    fibonacciSeries[i] = sum
}
console.log(fibonacciSeries);

// another say simplier 
let fibonacciSeries2 =[]
let number=20
fibonacciSeries2[0] = 0
fibonacciSeries2[1] = 1
for (let i = 2; i<=number; i++){
    fibonacciSeries2[i] = fibonacciSeries2[i-2] + fibonacciSeries2[i-1]
}

console.log(fibonacciSeries2);