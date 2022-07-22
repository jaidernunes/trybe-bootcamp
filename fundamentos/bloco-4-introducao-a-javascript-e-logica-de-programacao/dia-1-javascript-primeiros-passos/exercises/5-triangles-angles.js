const angle1 = 60;
const angle2 = 60;
const angle3 = 60;

let sum = (angle1 + angle2 + angle3)

let allAnglesPositive = ((angle1 > 0) && (angle2 > 0) && (angle3 > 0))

if (allAnglesPositive){
    if (sum === 180){
        console.log("positive")    
    } else {
        console.log("negative")
    }
} else {
    console.log("invalid angles")
}
