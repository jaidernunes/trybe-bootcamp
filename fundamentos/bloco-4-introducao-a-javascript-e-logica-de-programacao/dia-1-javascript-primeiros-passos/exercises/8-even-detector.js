const num1 = Math.floor(Math.random() * 101);
const num2 = Math.floor(Math.random() * 101);
const num3 = Math.floor(Math.random() * 101);

console.log(num1, num2, num3)

if ((num1 % 2 == 0) || (num2 % 2 == 0) || (num3 % 2 == 0)) {
    console.log("true")
} else {
    console.log ("false")
}