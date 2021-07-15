//aponta o elemento do slider
let slider = $(".wrapper");

// cria a configuração do slick
let config = {
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  // usa a config base do slick invertido
  // sendo considerado mobile em primeiro lugar
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 690,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: true
      }
    },
    {
      // remove slick no breakpoint abaixo
      breakpoint: 815,
      settings: "unslick"
    },
  ]
};

// inicia o slick
slider.slick(config)

//monitora redimencionamento da tela
$(window).on('resize', function() {
  //checa o tamanho da tela e se o slider não está inicializado
  if( $(window).width() <= 768 &&  !slider.hasClass('slick-initialized')) {
    //reinicia o slider se a condição acima for true
    slider.slick(config);
   }
});