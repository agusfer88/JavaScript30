const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){

let now = new Date();


// // Set seconds

let seconds = now.getSeconds();
let secondsDegree = seconds * 6;
secondHand.style.transform = `rotate(${(secondsDegree)+90}deg)`;



// Set minutes

let mins = now.getMinutes();
let minsDegrees = mins * 6
minsHand.style.transform = `rotate(${(minsDegrees)+90}deg)`;


// Set hours

let hour = now.getHours();   

if (hour > 12) {
    hour = hour - 12;
}
let hourDegress = hour * 30;
hourHand.style.transform = `rotate(${(hourDegress)+90}deg)`;
};

setInterval(setDate, 1000);
  