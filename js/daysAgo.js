/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Term Project

   index
   Author: Michaela Fuzaylov
   Date:   12/28/2023

*/

let date1 = new Date("01/02/2024");
let date2 = new Date();

// To calculate the time difference of two dates
let DaysAgo = date2.getDate() - date1.getDate();

document.getElementById("daysAgo").innerHTML = DaysAgo;