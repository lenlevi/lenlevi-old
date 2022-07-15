window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var scrolled = Math.ceil(scrolled);
  if(scrolled > 50){
    document.getElementById("myBar").className = "progress-circle over50 p"+ scrolled;
    document.getElementById("progressIndicator").innerHTML = scrolled + "%";
  }else{
  document.getElementById("myBar").className = "progress-circle p"+ scrolled;
  document.getElementById("progressIndicator").innerHTML = scrolled + "%";
  }
}
