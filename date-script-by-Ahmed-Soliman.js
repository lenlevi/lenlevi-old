var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month = ["01", "02", "03","04", "05", "06", "07","08", "09", "10",
            "11", "12"];

d.setDate(d.getDate() - 1);
document.getElementById("date").innerHTML = (d.getDate()<10?"0"+d.getDate():d.getDate())+"."+month[d.getMonth()]+"."+d.getFullYear();

