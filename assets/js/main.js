(function($) {
    "use strict";

    // meanmenu
    // jQuery('#mobile-menu').meanmenu({
    //     meanMenuContainer: '.mobile-menu',
    //     meanScreenWidth: "991"
    // });

    // One Page Nav
    // var top_offset = $('.header-area').height() - 5;
    // $('.main-menu nav ul').onePageNav({
    //     currentClass: 'active',
    //     scrollOffset: top_offset,
    // });


    // $(window).on('scroll', function () {
    //     var scroll = $(window).scrollTop();
    //     if (scroll < 300) {
    //         $(".header-sticky").removeClass("sticky");
    //     } else {
    //         $(".header-sticky").addClass("sticky");
    //     }
    // });


    
        

      /*===============================
    =            Main Slider            =
    ===============================*/
    function mainSlider() {
        var BasicSlider = $(".slider-active");
        BasicSlider.on("init", function(e, slick) {
            var $firstAnimatingElements = $(".single-slider:first-child").find(
                "[data-animation]"
            );
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on("beforeChange", function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $(
                '.single-slider[data-slick-index="' + nextSlide + '"]'
            ).find("[data-animation]");
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: true,
            fade: true,
            arrows: false,
            prevArrow: "<button type='button' class='slick-prev pull-left'>prev</button>",
            nextArrow: "<button type='button' class='slick-next pull-right'>next</button>",
            responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false
                }
            }]
        });

        function doAnimations(elements) {
            var animationEndEvents =
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data("delay");
                var $animationType = "animated " + $this.data("animation");
                $this.css({
                    "animation-delay": $animationDelay,
                    "-webkit-animation-delay": $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

      /*===============================
    =            Slider Active            =
    ===============================*/
    $('.slider-active-3').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="ti-angle-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="ti-angle-right"></span></button>',
        infinite: true,
        fade: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

      /*===============================
    =            Courses Active slider            =
    ===============================*/
    $('.courses-active').slick({
        dots: false,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'>prev</button>",
        nextArrow: "<button type='button' class='slick-next pull-right'>next</button>",
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

      /*===============================
    =            Testinomials Slider            =
    ===============================*/
    $('.testimonilas-active').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.hvs-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.hvs-thumb-slider'
    });
    $('.hvs-thumb-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.hvs-slider',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });



    // testimonilas-active
    $('.testimonilas-active-2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // shop-active
    $('.shop-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //clat-carrer-slider --------------------------

    $('.clat-carrer-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // roles-slider

    $('.roles-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

      /*===============================
    =            Circle Progressbar            =
    ===============================*/

    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();


    // counter js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });

     /*===============================
    =            Scroll To top            =
    ===============================*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<span class="ti-arrow-up"></span>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // WOW active
    new WOW().init();


})(jQuery);

(function($) {
    $(window).on("load", function() {
        $(".vrt-menu-scroll").mCustomScrollbar();
        $(".img-scroll").mCustomScrollbar();
        $(".nf-sidebar-scroll").mCustomScrollbar({
            scrollButtons:{enable:true}
        }); 
        $(".tbody-vscroll").mCustomScrollbar();
    });
})(jQuery);


new WOW().init();

$(document).ready(function() {
    $(".chat_on").click(function() {
        $(".Layout").toggle();
        $(".chat_on").hide(300);
    });

    $(".chat_close_icon").click(function() {
        $(".Layout").hide();
        $(".chat_on").show(300);
    });

});




// Mega Menu --------------------------

// jQuery(document).ready(function(){
//     jQuery("#menuzord").menuzord({
//         align: "right"
//     });
// });

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})