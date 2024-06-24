export const settings = {
  lazyLoad: true,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  draggable: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1640,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        swipe: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
