"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Term Project

   Clock
   Author: Gladys Benedid
   Date:   12/28/2023

*/

/* run the clock function */
clock();
setInterval("clock()", 1000);

/* create the clock function*/
function clock() {
    //current time
    var time = new Date();
    var hour = time.getHours();
    if (hour < 10)
        hour= "0" + hour;
    var minute = time.getMinutes();
    if (minute < 10)
        minute= "0" +minute;
    var second = time.getSeconds();
    if (second < 10)
        second = "0" + second;
    // display time
        document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;
}