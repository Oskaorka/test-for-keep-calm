import React from "react";
import GetImages from "../../imageBlock/getImages";
const Arrow = ({ onClick, img, btnClass }) => {
  return (
    <button className={btnClass} onClick={onClick}>
      <GetImages pathImg={img} />
    </button>
  );
};

export default Arrow;
