$(function() {

  $(".slider__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider__nav"
  });

  $(".slider__nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dotsClass: "slider__nav",
    asNavFor: ".slider__inner",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });


  $(".burger__menu").on("click", function() {
    $(".header__menu").slideToggle();
  });
});
