const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
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
