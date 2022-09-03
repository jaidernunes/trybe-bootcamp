const wakeUp = () => 'Waking Up!!';
const breakfast = () => "Let's have breakfast!!";
const sleep = () => console.log("It's time to sleep!!");

const doingThings = (func) => func();
doingThings(sleep);