const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN","JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const d = new Date();
document.getElementById("apr").innerHTML = monthNames[d.getMonth()];
