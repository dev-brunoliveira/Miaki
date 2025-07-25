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
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const carousel = document.querySelector('.carousel');
const cardWidth = 220; // Largura + margem (ajustar se necessário)

leftArrow.addEventListener('click', () => {
  if (carousel.scrollLeft > 0) {
    carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }
});

rightArrow.addEventListener('click', () => {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  if (carousel.scrollLeft < maxScrollLeft) {
    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
});
