let feedButton = document.getElementById("feed-button");
let deleteButton = document.getElementById("delete-data");
let timeBlock = document.getElementById("time-block");
let catSpan = document.getElementById("cat-span")



//Local Storage variable to load on the main page
let catFed = localStorage.getItem('timeFed');

window.onload = function() {
    timeBlock.textContent = catFed
}

feedButton.onclick = function() {
    updateTimeStamp();
    /*local storage variable so that the time can be updated
    *each time the button is clicked on the page AND in the
    *storage
    */
    let timeStamp = localStorage.getItem('timeFed');
    timeBlock.textContent = timeStamp;
}

//delete button for development purposes only
// deleteButton.onclick = function() {
//     localStorage.clear();
//     timeBlock.textContent = "";
// }

//function to update and store the Time Stamp in local storage
function updateTimeStamp() {
    let timeTime = new Date();
    let timeString = timeTime.toLocaleTimeString();
    localStorage.setItem('timeFed',timeString);
}

console.log("JS is connected and online!");