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
		autoplayTimeout: 4000,
		smartSpeed: 1000,
	});
});

//LOADER
$(window).on("load", function () {
	$(".logo").animate({
		top: "-100px",
		opacity: 0
	}, 1000, function () {
		$(".preloader").slideUp(500);
	});
});


// HEADER
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
