let feedButton = document.getElementById("feed-button");
let timeBlock = document.getElementById("time-block");
//Time Section
let currentDate = new Date();
let timeNow = + currentDate.getHours() + ":"
    + currentDate.getMinutes() + ":"
    + currentDate.getSeconds()
// function getTime() {

// }

feedButton.onclick = function() {
    console.log(timeNow);
    timeBlock.textContent = Date();
}

console.log("JS is connected and online!")