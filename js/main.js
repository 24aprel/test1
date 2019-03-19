window.addEventListener('DOMContentLoaded', function() {  

	// slider
	let slideIndex = 1,
			slides = document.getElementsByClassName('slider-item'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			dotsWrap = document.querySelector('.slider-dots'),
			icon = document.querySelector('.icon'),
			headerMenu = document.querySelector('.header-menu'),
			headerList = document.querySelector('.header-list'),
			lvlBtn = document.querySelector('.lvl__btn'),
			modal = document.querySelector('.modal'),
			modalClose = document.querySelector('.modal-close'),
			schedule = document.querySelector('#schedule'),
			modalOverlay = document.querySelector('.modal-overlay'),
			dots = document.querySelectorAll('.dot');

	showSlides(slideIndex);


	var timerId = setInterval(function() {
 	 	slideIndex = slideIndex + 1;
		showSlides(slideIndex);
		}, 4000);

	timerId;

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		};
		if (n < 1) {
			slideIndex = slides.length;
		};

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};

		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		};

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function(){
		plusSlides(-1);
		clearInterval(timerId);
	});

	next.addEventListener('click', function(){
		plusSlides(1);
		clearInterval(timerId);
	});

	dotsWrap.addEventListener('click', function(event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});

	// burger-menu
	icon.addEventListener('click', function(){
		icon.classList.toggle('active1');
		headerMenu.classList.toggle('menu-active');
	});

	headerList.addEventListener('mouseover', function(event){
		let target = event.target;
		target.classList.add('header-list__item--hover');
	});

	headerList.addEventListener('mouseout', function(event){
		let target = event.target;
		target.classList.remove('header-list__item--hover');
	});

// closing the menu when clicking on a menu item
	headerList.addEventListener('click', function(){
		headerMenu.classList.toggle('menu-active');
		icon.classList.toggle('active1');
	});


// modal
	schedule.addEventListener('click', function(event){
		let target = event.target;
		event.preventDefault();
		if (target.tagName == 'A') {
			modal.classList.add('menu-active');
			modalOverlay.classList.add('menu-active');
		}
	});

	modalClose.addEventListener('click', function () {
		modal.classList.remove('menu-active');
		modalOverlay.classList.remove('menu-active');
	});

	// close modal when press "esc"
	window.addEventListener("keydown", function (event) {
		if (event.keyCode === 27) {
			event.preventDefault();

			if (modal.classList.contains("menu-active")) {
				modal.classList.remove("menu-active");
				modalOverlay.classList.remove('menu-active');
			}
		}
	});
});