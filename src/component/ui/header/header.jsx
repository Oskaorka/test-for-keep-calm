import React from "react";
import GetImages from "../../imageBlock/getImages";
import Logo from "../../../images/logo.svg";
import Call from "../../../images/call.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <GetImages
              wrapperClassImg="header__wrapper-logo"
              pathImg={Logo}
              title="logo"
            />
            <div className="header__contact">+7 (495) 495-49-54</div>
            <div className="header__contact-img">
              <GetImages pathImg={Call} title="call" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <nav className="header__nav">
          <Link className="header__nav-link" to="/">
            Lorem
          </Link>
          <Link className="header__nav-link" to="/ipsum">
            Ipsum
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
