import React from "react";
import GetImages from "../../imageBlock/getImages";
import Slider from "react-slick";
import TextField from "../textField/textField";
import Slide1 from "../../../images/sliders/slide-1.png";
import Slide2 from "../../../images/sliders/slide-2.png";
import Slide3 from "../../../images/sliders/slide-3.png";
import Slide4 from "../../../images/sliders/slide-4.png";
import Slide5 from "../../../images/sliders/slide-5.png";
import { useState } from "react";
import settings from "../../../utils/settingsSlider/settingsSlider";

const SliderPage = () => {
  const arrImg = [
    { image: Slide1, title: "slide-1" },
    { image: Slide2, title: "slide-2" },
    { image: Slide3, title: "slide-3" },
    { image: Slide4, title: "slide-4" },
    { image: Slide5, title: "slide-5" },
  ];

  const [imgModal, setImgModal] = useState(null);
  const [classModal, setClassModal] = useState(false);
  const handleClickModal = (e) => {
    setImgModal(e.target.src);
    setClassModal(true);
    if (imgModal) {
    }
  };
  const CloseModal = (event) => {
    console.log(event.target);
    console.log(event);
    if (event.target && event.target.matches("div.slider__modal.show")) {
      setClassModal(false);
    }
  };

  return (
    <div className="slider">
      <div className="container">
        <TextField classText="about__title about__title-slider" />
        <Slider {...settings.Main}>
          {arrImg.map((elem, i) => {
            return (
              <div className="slider-image" key={elem.title}>
                <GetImages
                  pathImg={elem.image}
                  title={elem.title}
                  onClick={handleClickModal}
                />
                {(i === 1 ? (
                  <div className="slider-image__descr">
                    <p className="slider-image__descr_card slider-image__descr_card-bottom">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                ) : null) ||
                  (i === 4 ? (
                    <div className="slider-image__descr slider-image__descr-rightblck">
                      <p className="slider-image__descr_card slider-image__descr_card-right">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  ) : null)}
              </div>
            );
          })}
        </Slider>
      </div>
      <div
        onClick={CloseModal}
        className={classModal ? "slider__modal show" : "slider__modal hide"}
      >
        <div className="slider__modal-descr">
          Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum
        </div>
        <div className="slider__modal-wrapper">
          <Slider {...settings.Frame}>
            {arrImg.map((elem) => {
              return (
                <div key={elem.title}>
                  <div className="slider-image" key={elem.title}>
                    <GetImages
                      pathImg={elem.image}
                      title={elem.title}
                      onClick={handleClickModal}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
