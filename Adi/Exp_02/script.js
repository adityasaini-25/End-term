const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {

  navLinks.classList.toggle('open');


  if (navLinks.classList.contains('open')) {
    menuBtn.innerHTML = '&#10005;';
  } else {
    menuBtn.innerHTML = '&#9776;';
  }
});
