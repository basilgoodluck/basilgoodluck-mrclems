const menu = document.getElementsByClassName("fa-bars")
const exitdd = document.getElementsByClassName("fa-times")
const menuItems = document.getElementsByClassName("headerNav")

show = function (){
  document.getElementById("Menu").style.display = "flex";
  exit.style.display = "block"}
exit = function(){
  document.getElementById("Menu").style.display = "none";
}

const toggles = document.querySelectorAll("#faq")

toggles.forEach((toggle)=>{
  toggle.addEventListener("click", ()=>{
    toggle.parentNode.classList.toggle("active")
  })
})

const submit = document.getElementById("Submit")
const Email = document.querySelector(".email")
const message = document.getElementById("message")

submit.addEventListener("click",()=>{
  while (Email.value = ""){
    Email.style.border.color = "red"
  }
})


