let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null

function updateHtml() {
    // make sure to have a leading zero in hours
    h = hours
    if (hours < 10) {
        h = "0" + hours
    }
    // make sure to have a leading zero in minutes
    m = minutes
    if (minutes < 10) {
        m = "0" + minutes
    }
    // make sure to have a leading zero in seconds
    s = seconds
    if (seconds < 10) {
        s = "0" + seconds
    }
    displayTime.innerHTML = h + ":" + m + ":" + s; // displays the hours minutes and seconds every time
}

//increase by 1 every seconds
function stopwatch() {
    seconds++; // adding seconds by 1
    if (seconds === 60) {
        seconds = 0; // when the value is equal to 60 it will become 0 it
        minutes++; // increase minute value by 1
        if (minutes === 60) {
            minutes = 0; // when the minutes equal 0 the hours go up by 1
            hours++;
        }
    }
    updateHtml();
}

// to add the seconds by 1 use Time interval
function watchStart() {
    // clears the timer so it won't overlap with the new timer
    if (timer != null) {
        clearInterval(timer)
    }
    // start a new timer
    timer = setInterval(stopwatch, 1000); // make the stopwatch go up by 1 second
}

function watchStop() { //to stop the watch
    clearInterval(timer);
}

function watchReset() { //to reset the watch
    clearInterval(timer); // to stop the watch and reset it
    [seconds, minutes, hours] = [0, 0, 0]; // set the minutes hours and seconds to 0 once restarted
    updateHtml() // display 00:00:00 again
}
