$(document).ready(function () {
    'use strict';
    
// sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).children('i').toggleClass('fa-bars fa-times');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    
    
//    Main Slider
    $(".main-slider .banner-slides").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        dots: false,
        nav: false,
		rtl: true,
        animateOut: "slideOutDown",
        animateIn: "fadeIn",
        active: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
    });
    $(".main-slider .banner-carousel-btn .left-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("next.owl.carousel");
    });
    $(".main-slider .banner-carousel-btn .right-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("prev.owl.carousel");
    });
	
	//    clients slider
    $(".clients-section .clients-slider").owlCarousel({
        loop: true,
        items: 6,
        dots: false,
        nav: false,
        active: true,
        margin: 30,
        smartSpeed: 1500,
		rtl: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive : {
            0 : {
                items: 3,
            },
            768 : {
                items: 4,
            },
            992 : {
                items: 6,
            }
        }
    });
	
//    courses slider
    $(".courses-slider").owlCarousel({
        loop: true,
        items: 3,
        dots: false,
        nav: false,
        active: true,
        margin: 20,
        smartSpeed: 1000,
		rtl: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive : {
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 3,
            }
        }
    });
    $(".courses-section .banner-carousel-btn .right-btn").on("click", function() {
        $(".courses-slider").trigger("next.owl.carousel");
    });
    $(".courses-section .banner-carousel-btn .left-btn").on("click", function() {
        $(".courses-slider").trigger("prev.owl.carousel");
    });
	
	
//	Question steps
	try {
		$("#wizard").steps({
			headerTag: "h6",
			bodyTag: "section",
			transitionEffect: "fade"
		});
	} catch {}


});

