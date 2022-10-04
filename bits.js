let feedButton = document.getElementById("feed-button");
let timeBlock = document.getElementById("time-block");
let catSpan = document.getElementById("cat-span")
//an empty string variable for storing the last date the cat was fed?


//Local Storage set up?
localStorage.setItem('myCat','RePete');
let catFed = localStorage.getItem('timeFed');

feedButton.onclick = function() {
    let timeTime = new Date();
    let timeString = timeTime.toLocaleTimeString();
    timeBlock.textContent = timeString;
    localStorage.setItem('timeFed',timeString)
}

function checkTime() {
    //this checks if there is already a time stamp made
    if (catFed != "") {
        console.log()
    }
}



console.log("JS is connected and online!");