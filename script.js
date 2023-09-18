const menu = document.getElementsByClassName("fa-bars")
const exitdd = document.getElementsByClassName("fa-times")
const menuItems = document.getElementsByClassName("headerNav")

show = function (){
  document.getElementById("Menu").style.display = "flex";
  exit.style.display = "block"
  // document.getElementsByClassName("fa-bars").style.display = "none"
  // document.getElementsByClassName("fa-times").style.display = "block"
}
exit = function(){
  document.getElementById("Menu").style.display = "none";
}

