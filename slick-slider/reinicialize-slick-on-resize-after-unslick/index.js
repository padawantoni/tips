//set slider div
let slider = $(".wrapper");

// create slick config as a variable
let config = {
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  // this setting below uses the base config as default for mobile devices
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: true
      }
    },
    {
      // remove slick on below breakpoint
      breakpoint: 768,
      settings: "unslick"
    },
  ]
};

// slick init
slider.slick(config)

// watch screen resizing
$(window).on('resize', function() {
  // checks screen size and if slider is not initialized
  if( $(window).width() <= 768 &&  !slider.hasClass('slick-initialized')) {
    // reinit slick if the above condition is true
    slider.slick(config);
   }
});