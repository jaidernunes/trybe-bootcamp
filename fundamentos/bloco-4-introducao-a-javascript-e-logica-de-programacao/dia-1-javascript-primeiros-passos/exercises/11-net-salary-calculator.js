//A person who works in a formal contract in Brazil has discounted his gross salary the INSS and IR.Make a program that, given a gross salary, calculate the liquid to be received.

const grossSalary = 3000.00;
let INSS;
let IR;

if (grossSalary <= 1556.94) {
    INSS = ((8 / 100) * grossSalary);
} else if (grossSalary <= 2594.92) {
    INSS = ((9 / 100) * grossSalary);
} else if (grossSalary <= 5189.82) {
    INSS = ((11 / 100) * grossSalary);
} else {
    INSS = grossSalary - 570.88;
}
console.log("INSS: " + INSS)

if (grossSalary <= 1556.94) {
    INSS = ((8 / 100) * grossSalary);
} else if (grossSalary <= 2594.92) {
    INSS = ((9 / 100) * grossSalary);
} else if (grossSalary <= 5189.82) {
    INSS = ((11 / 100) * grossSalary);
} else {
    INSS = grossSalary - 570.88;
}

let grossSalaryINSS = grossSalary - INSS

if (grossSalaryINSS <= 1903.88) {
    IR = 0
} else if (grossSalaryINSS <= 2826.65) {
    IR = ((7.5 / 100) * grossSalaryINSS) - 142.80;
} else if (grossSalaryINSS <= 3751.05) {
    IR = ((15 / 100) * grossSalaryINSS) - 354.80;
} else if (grossSalaryINSS <= 4664.68) {
    IR = ((22.5 / 100) * grossSalaryINSS) - 636.13;
} else {
    IR = ((27.5 / 100) * grossSalaryINSS) - 869.36;
}
console.log("IR: " + IR)

let netSalary = grossSalaryINSS - IR;
console.log("Net Salary: " + netSalary)