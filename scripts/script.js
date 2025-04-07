const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
// const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
  // menu.classList.toggle('active');
})


let scrollButton = document.getElementById("scrollBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollButton.style.display = "flex";
  } else {
    scrollButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("open");
}

// function openNav() {
//   document.getElementById("sideMenu").style.display = "flex";
//   document.getElementById("toggleBtn").style.backgroundImage = "url('../images/close.jpg')";
//   document.getElementById("toggleBtn").onclick = closeNav;
//   document.getElementById("sideMenu").style.transition = "0.4s";
// }

// function closeNav() {
//   document.getElementById("sideMenu").style.display = "none";
//   document.getElementById("toggleBtn").style.backgroundImage = "url('../images/menu.jpg')";
//   document.getElementById("toggleBtn").onclick = openNav;
// }