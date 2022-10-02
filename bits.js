let feedButton = document.getElementById("feed-button");
let timeBlock = document.getElementById("time-block");
//an empty string variable for storing the last date the cat was fed?
let catFed = "";
//setting up a cookie to store the current date/time
//HOW

feedButton.onclick = function() {
    console.log(Date());
    timeBlock.textContent = "this will be a date/time someday"
}

console.log("JS is connected and online!");