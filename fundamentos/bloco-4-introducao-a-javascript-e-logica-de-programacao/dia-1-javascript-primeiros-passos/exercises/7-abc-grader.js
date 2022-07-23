const numGrade = 99;

if (numGrade > 100){
    console.log("Error: invalid input")
} else if (numGrade >= 90){
    console.log("A")
} else if (numGrade >= 80){
    console.log("B")
} else if (numGrade >= 70){
    console.log("C")
} else if (numGrade >= 60){
    console.log("D")
} else if (numGrade >= 50){
    console.log("E")
}else if (numGrade < 50 && numGrade >= 0){
    console.log("F")
} else {
    console.log("Error: invalid input")
}


