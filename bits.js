let feedButton = document.getElementById("feed-button");
let timeBlock = document.getElementById("time-block");
let catSpan = document.getElementById("cat-span")



//Local Storage set up?
let catFed = localStorage.getItem('timeFed');

window.onload = function() {
    timeBlock.textContent = catFed
}

feedButton.onclick = function() {
    let timeTime = new Date();
    let timeString = timeTime.toLocaleTimeString();
    localStorage.setItem('timeFed',timeString);
    timeBlock.textContent = catFed;
}



console.log("JS is connected and online!");