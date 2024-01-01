"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Term Project

   Clock
   Author: Gladys Benedid
   Date:   12/28/2023

*/

/* run the clocck function */
clock();
setInterval("clock()", 1000);

/* create the clock function*/
function clock() {
    //current time
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    // display time
    document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;

}