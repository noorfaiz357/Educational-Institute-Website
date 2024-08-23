let countdown = new Date("Aug 29, 2024 10:00:00").getTime();
var x = setInterval(() => {
  var now = new Date().getTime();
  var distance = countdown - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
  }
}, 1000);
//Navbar 
let menu = document.getElementById("menu-btn");
let close = document.getElementById("close-btn");
let nav = document.querySelector(".navigation ul");
menu.addEventListener("click", () => {
  nav.style.right = 0;
  menu.style.display = "none";
});
close.addEventListener("click", () => {
  nav.style.right = "-100%";
  menu.style.display = "initial";
});
