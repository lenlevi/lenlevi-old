document.addEventListener("scroll", function() {  
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("pbar").style.width = scrolled + "%";
document.getElementById("progressIndicator").innerHTML = "Reading: " + scrolled.toFixed() + "%";
}); 
