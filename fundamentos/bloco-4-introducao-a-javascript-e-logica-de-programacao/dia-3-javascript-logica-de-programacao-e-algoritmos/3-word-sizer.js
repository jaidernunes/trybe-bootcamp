// Write two algorithms: one that returns the biggest word of this array and another that returns to the smallest.Consider the number of characters of each word.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let arrayBigWordsLenght = [];
for (let index = 0; index < array.length; index += 1){
    arrayBigWordsLenght.push(array[index].length)
}

let arraySmallWordsLenght = [];
for (let index = 0; index < array.length; index += 1){
    arraySmallWordsLenght.push(array[index].length)
}

let bigIndex = Math.max(...arrayBigWordsLenght)
let smallIndex = Math.max(...arraySmallWordsLenght)

let biggestWordIndex = (arrayBigWordsLenght.indexOf(Math.max(...arrayBigWordsLenght)))
let smallestWordIndex = (arraySmallWordsLenght.indexOf(Math.min(...arraySmallWordsLenght)))

console.log("Biggest word: " + array[biggestWordIndex])
console.log("Smallest word: " + array[smallestWordIndex])


