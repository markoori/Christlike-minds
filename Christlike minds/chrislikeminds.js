var aboutli  =  document.querySelector(".about");
var aboutus =  document.querySelector("#aboutus")

aboutus.onmouseover = ()=>{
  aboutli.style.display = "block";
}
document.onclick = ()=>{
  aboutli.style.display = "none";
  //aboutli.style.animation = "animate2";
}

//hamburger javascript
function myFunction(x) {
  x.classList.toggle("change");
}
