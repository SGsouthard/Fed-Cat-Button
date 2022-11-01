let feedButton = document.getElementById("feed-button");
let deleteButton = document.getElementById("delete-data");
let timeBlock = document.getElementById("time-block");
let catSpan = document.getElementById("cat-span");
let catImage = document.getElementById("cat-static");
let bowlImage = document.getElementById("bowl-static");
let bowlButton = document.getElementById("bowl-static");


//Local Storage variable to load on the main page
let catFed = localStorage.getItem('timeFed');

window.onload = function() {
    timeBlock.textContent = catFed
}

bowlButton.onclick = function() {
    updateTimeStamp();
    /*local storage variable so that the time can be updated
    *each time the button is clicked on the page AND in the
    *storage
    */
    let timeStamp = localStorage.getItem('timeFed');
    timeBlock.textContent = timeStamp;
    // changing the animation of the cat and bowl when the button is hit
    feedAnimation();
}

//delete button for development purposes only
// deleteButton.onclick = function() {
//     localStorage.clear();
//     timeBlock.textContent = "";
//     console.log(localStorage);
// }

//function to update and store the Time Stamp in local storage
function updateTimeStamp() {
    let timeTime = new Date();
    let timeString = timeTime.toLocaleTimeString();
    localStorage.setItem('timeFed',timeString);
}

function feedAnimation() {
    catImage.src = "assets/cat-eat.gif"
    bowlImage.src = "assets/bowl-eat-red.gif"
    setTimeout(staticAnimation, 5000)
}

function staticAnimation() {
    catImage.src = "assets/cat-static.gif"
    bowlImage.src = "assets/bowl-static-red.gif"
}

console.log("JS is connected and online!");