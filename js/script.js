$(document).ready(function () {

	//Owl Carousel
	$('.banner-carousel').owlCarousel({
		items: 1,
		center: false,
		loop: true,
		margin: 0,
		nav: false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,

	});
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 1) {
		$('.header-area').addClass("sticky");
	} else {
		$('.header-area').removeClass("sticky");
	}

	if ($(this).scrollTop() > 100) {
		$('.header-area').addClass("hide-header");
	} else {
		$('.header-area').removeClass("hide-header");
	}
});

$(window).on('load', function () {
	// Get the preloader element using jQuery
	const $preloader = $('#preloader');
	// Get all other sections using jQuery
	const $sections = $('section,footer'); // Add more sections if needed

	// Hide the preloader after the entire website is loaded
	$preloader.fadeOut(500, function () {
		// Animation complete, show all other sections
		$sections.fadeIn(500);
	});
});
