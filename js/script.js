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

	//SECTION TO SECTION
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});

	
});



//Preloader
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
