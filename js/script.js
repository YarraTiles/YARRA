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

