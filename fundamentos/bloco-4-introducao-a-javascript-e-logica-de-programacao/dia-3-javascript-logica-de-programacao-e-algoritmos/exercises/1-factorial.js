// 1-Create an algorithm that returns the factorial of 10.

const num = 5;
let factors = []

for(i = num; i > 0; i -= 1){
    factors.push(i)
}

let product = 1
let xFactors = factors.join(' x ')
//Syntax = array.join(separator)
//Definition and Usage
// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).

for(i2 = 0; i2 < factors.length; i2 += 1){
    product *= factors[i2]
}
console.log("" + num + "! = " + xFactors +" = "+ product)
