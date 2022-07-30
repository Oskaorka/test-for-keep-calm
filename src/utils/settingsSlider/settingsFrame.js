import Arrow from "../../component/ui/bodyPages/arrow";
import ArrowNext from "../../images/arrow/next-white-arrow.png";
import ArrowPrev from "../../images/arrow/prev-white-arrow.png";
const settingsFrame = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <Arrow btnClass="slider__arrows-btn next-white" img={ArrowNext} />,
  prevArrow: <Arrow btnClass="slider__arrows-btn prev-white" img={ArrowPrev} />,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
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
export default settingsFrame;
