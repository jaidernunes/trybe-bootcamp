// 4- A prime number is an integer greater than 1 that has only two dividers, ie it is divisible by 1 and by himself.Knowing this, write an algorithm that returns the largest prime number between 2 and 50.

const numA = 50;

let num1 = numA;

let sqrt = Math.sqrt(num1)

for(let i = 2; i <= num1; i += 1){
    if(num1 % i === 0){
        num1 -= 1;
    } else {
        console.log(num1) 
        break
    }

}
