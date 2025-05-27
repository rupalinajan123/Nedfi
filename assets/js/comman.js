  // ------------step-wizard-------------
  $(document).ready(function () {
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var target = $(e.target);
    
        if (target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        active.next().removeClass('disabled');
        nextTab(active);

    });
    $(".prev-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        prevTab(active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


$('.nav-tabs').on('click', 'li', function() {
  // console.log("Hii");
    $('.nav-tabs li.active').removeClass('active');
    $(this).addClass('active');
});

  /*===============================
    =            menuzord            =
    ===============================*/

  jQuery(document).ready(function() {
      jQuery("#menuzord").menuzord({
          align: "center",
          effect: "fade",
          animation: "none",
          trigger: 'click'
      });
  });

  $(document).ready(function(){
    $(".nf-mb-menu").click(function(){
      $('.nf-mb-menu').removeClass('nf-active');
      $(this).addClass("nf-active");
    });
  
  });

  $(document).ready(function(){
    $(".fourthlevel-menu li").click(function(){
      $('.fourthlevel-menu li').removeClass('nf-submenu-active');
      $(this).addClass("nf-submenu-active");
    });
  
  });

AOS.init({
    duration: 1200,
})

//   $('.menuzord-menu li').click( function(){
//     if ( $(this).hasClass('nf-active') ) {
//         $(this).removeClass('nf-active');
//     } else {
//         $('.menuzord-menu li').removeClass('nf-active');
//         $(this).addClass('nf-active');   
//     }
// });

  $(function() {
      $('[data-toggle="tooltip"]').tooltip()
  })

  $(function() {
    $('[data-toggle="popover"]').popover()
  })


  // Change Topic hide show 

  $( "#changeTopic_close" ).click(function() { 
    $(".changeTopic").attr("aria-expanded","false");
    $( ".collapse" ).removeClass( "show")
  });
        
         


  /*===============================
  =            Hide and Show Know your approvals list page            =
  ===============================*/

  function myFunction() {
      var x = document.getElementById("nf-hide-list");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }

  /*script for active and remove class for popup link*/
  $('.nf-items-list a').click(function() {
      $(this).addClass("active");
  });

  $('.close').click(function() {
      $('.nf-items-list a').removeClass('active');
  });

  /*===============================
  =            Mega Menu Responsive JS            =
  ===============================*/

  $(document).ready(function() {

    // $('.nf-mb-menu a').on('click', function(e) { 
    //   if (Modernizr.mq('screen and (max-width:991px)')) {
    //     //e.preventDefault();
    //     $('.mega-submenu').addClass('megadisplay');
    //     // $('.nf-mb-menu').addClass('activemenu');
    //     if ($('.close-megamenu').length === 0) {
    //         $("<span class='close-megamenu'><i class='fa fa-angle-left'></i> Menu</span>").insertAfter($(".nf-mb-menu>a"));
    //     }
    //   }
    // })

    $(".nf-mb-menu a").click(function () {
      if (Modernizr.mq('screen and (max-width:991px)')) {
        $('.megamenu').addClass('active-sub-nav');
        $(this).closest("li.nf-mb-menu").find(".mega-submenu").addClass("megadisplay");
        if ($('.close-megamenu').length === 0) {
          $("<span class='close-megamenu'><i class='fa fa-angle-left'></i> Menu</span>").insertAfter($(".nf-mb-menu>a"));
        }
      }
    });


    $(document).on('click', '.close-megamenu', function(e) {
      $(".close-megamenu>div.megadisplay").removeClass("megadisplay");
      if (Modernizr.mq('screen and (max-width:991px)')) {
          $('.mega-submenu').removeClass('megadisplay');
          $(".close-megamenu").remove()
      }
    })

  });



$('.nf-exam-slider').slick({
  arrow: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1
      }
    },
    {
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


$('.blog-slider').slick({
  arrow: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.nf-testimonial-slider').slick({
  arrow: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.success-story-slider').slick({
  arrow: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1
      }
    }
  ]
});




  /*===============================
  =           Home Page slider          =
  ===============================*/

    $('.nf-text-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:false
    });

    $('.nf-banner-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      responsive: [{
                breakpoint: 480,
                settings: {
                    dots: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.nf-art-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:false,
      responsive: [{
                breakpoint: 480,
                settings: {
                    dots: false,
                }
            }
        ]
    });

    



  $(document).ready(function(){
    $("#nf-filter-dropdown").click(function(){
      $(".nf-radio-wrap").toggleClass('show');
    });
  });
  /*===============================
  =           Responsive Menu        =
  ===============================*/
  $(document).ready(function () {

      $(".filter-button").click(function () {
          var value = $(this).attr('data-filter');

          if (value == "all") {

              $('.filter').show('1000');
          }
          else {

              $(".filter").not('.' + value).hide('3000');
              $('.filter').filter('.' + value).show('3000');

          }
      });

      if ($(".filter-button").removeClass(".storyGalleryactive")) {
          $(this).removeClass("storyGalleryactive");
      }
      $(this).addClass("storyGalleryactive");

  });

  jQuery(document).ready(function($){
  //open/close mega-navigation
  $('.cd-dropdown-trigger').on('click', function(event){
    event.preventDefault();
    toggleNav();
  });

  //close meganavigation
  $('.cd-dropdown .cd-close').on('click', function(event){
    event.preventDefault();
    toggleNav();
  });

  //on mobile - open submenu
  $('.has-children').children('a').on('click', function(event){
    //prevent default clicking on direct children of .has-children 
    event.preventDefault();
    var selected = $(this);
    selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
  });

  //on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
  var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
  $('.cd-dropdown-content').menuAim({
        activate: function(row) {
          $(row).children().addClass('is-active').removeClass('fade-out');
          if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
          $(row).children().removeClass('is-active');
          if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
            $('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
            $(row).children('ul').addClass('fade-out')
          }
        },
        exitMenu: function() {
          $('.cd-dropdown-content').find('.is-active').removeClass('is-active');
          return true;
        },
        submenuDirection: submenuDirection,
    });

  //submenu items - go back link
  $('.go-back').on('click', function(){
    var selected = $(this),
      visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
    selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
  }); 

  function toggleNav(){
    var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
    $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
    $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
    if( !navIsVisible ) {
      $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('.has-children ul').addClass('is-hidden');
        $('.move-out').removeClass('move-out');
        $('.is-active').removeClass('is-active');
      }); 
    }
  }

  //IE9 placeholder fallback
  //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
  /*if(!Modernizr.input.placeholder){
    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
        }
    }).blur(function() {
      var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
        })
    });
  }*/
});
