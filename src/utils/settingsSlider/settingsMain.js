import Arrow from "../../component/ui/bodyPages/arrow";
import ArrowNext from "../../images/arrow/prev.png";
import ArrowPrev from "../../images/arrow/next.png";
const settingsMain = {
  dots: false,
  // className: "slider variable-width",
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  //   nextArrow: <SampleNextArrow />,
  nextArrow: <Arrow btnClass="slider__arrows-btn next" img={ArrowNext} />,
  // prevArrow: <SamplePrevArrow />,
  prevArrow: <Arrow btnClass="slider__arrows-btn prev" img={ArrowPrev} />,
  //   prevArrow: <SamplePrevArrow />,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default settingsMain;
