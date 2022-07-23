// For the second exercise, add all values contained in the array and print the result;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (index = 0; index < numbers.length; index += 1) {
    sum = sum + numbers[index]
}

console.log(sum)
