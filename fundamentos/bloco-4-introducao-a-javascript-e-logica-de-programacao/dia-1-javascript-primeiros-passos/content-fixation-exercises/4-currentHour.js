const currentHour = 12;
let message = "";
if (currentHour >= 22){
    message = "We sholdn't eat anyting, its bedtime."
  } else if (currentHour >= 18 && currentHour < 22) {
    message = "Dinner time, let's eat :D";
  } else if (currentHour >= 14 && currentHour < 18) {
    message = "Shall we make a cake for tea time?";
  } else if (currentHour >= 11 && currentHour < 14) {
    message = "Lunch time!!!";
  } else if (currentHour < 11 && currentHour > 4) {
    message = "Hmmm, I smell fresh cofee";
  } else {
    message = "ZZZZZZZZZ"
  }
  console.log(message)