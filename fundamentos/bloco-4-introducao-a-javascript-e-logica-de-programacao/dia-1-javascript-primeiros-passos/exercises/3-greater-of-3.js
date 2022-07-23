//Make a program that returns the largest of three numbers.Define at the beginning of the program three constants with the values that will be compared.
const a = 1
const b = 2
const c = 3
if (a > b && a > c){
    console.log("" + a + " is greater than " + b + " and " + c)
} else if (b>a && b>c){
    console.log("" + b + " is greater than " + a + " and " + c)
} else {
    console.log("" + c + " is greater than " + a + " and " + b)
}