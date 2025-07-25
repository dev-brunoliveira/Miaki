const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 10) {
		header.style.backgroundColor = '#333232';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
const cards = document.querySelectorAll('.carousel .card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('show-link');
  });
});
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');
const carousel = document.querySelector('.carousel');

leftBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: -220, // ajuste para tamanho do card + gap
    behavior: 'smooth'
  });
});

rightBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: 220,
    behavior: 'smooth'
  });
});
