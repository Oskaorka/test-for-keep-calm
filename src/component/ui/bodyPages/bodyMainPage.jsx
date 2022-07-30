import React from "react";
import GetImages from "../../imageBlock/getImages";
import Julia from "../../../images/img1.png";
import Tanya from "../../../images/img2.png";
import TextField from "../textField/textField";

const BodyMain = () => {
  return (
    <div className="about">
      <div className="container">
        <TextField classText="about__title" />
      </div>
      <div className="about__wrapper">
        <div className="about__card about__card-top">
          <div className="about__card__wrapper-text">
            <p className="about__card-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="about__card-descr">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum/ Incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat.
            </p>
          </div>
          <GetImages
            wrapperClassImg="about__image-Julia"
            pathImg={Julia}
            title="Julia"
          />
        </div>
        <div className="about__card container p">
          <GetImages
            wrapperClassImg="about__image-Tanya"
            pathImg={Tanya}
            title="Tanya"
          />
          <div className="about__card-sub">
            <p className="about__card-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="about__card-descr">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyMain;
