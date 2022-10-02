let feedButton = document.getElementById("feed-button");
let timeBlock = document.getElementById("time-block");
let catSpan = document.getElementById("cat-span")
//an empty string variable for storing the last date the cat was fed?
let catFed = "";

//setting up a cookie to store the current date/time
//Time Cookie should be: timestamp = timeString


feedButton.onclick = function() {
    let timeTime = new Date();
    let timeString = timeTime.toLocaleTimeString();
    timeBlock.textContent = timeString;
    
}

console.log("JS is connected and online!");