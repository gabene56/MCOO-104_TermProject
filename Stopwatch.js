let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null

function updateHtml() {
    
    h = hours
    if (hours < 10) {
        h = "0" + hours
    }
   
    m = minutes
    if (minutes < 10) {
        m = "0" + minutes
    }
    
    s = seconds
    if (seconds < 10) {
        s = "0" + seconds
    }
    displayTime.innerHTML = h + ":" + m + ":" + s; 
}


function stopwatch() {
    seconds++; 
    if (seconds === 60) {
        seconds = 0; 
        minutes++; 
        if (minutes === 60) {
            minutes = 0; 
            hours++;
        }
    }
    updateHtml();
}


function watchStart() {
    
    if (timer != null) {
        clearInterval(timer)
    }
    
    timer = setInterval(stopwatch, 1000); 

function watchStop() { 
    clearInterval(timer);
}

function watchReset() { 
    clearInterval(timer); 
    [seconds, minutes, hours] = [0, 0, 0]; 
    updateHtml() 
}
