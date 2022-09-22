$(document).ready(function () {
  $(".articles_list").slick({
    arrows: true,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1176,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
