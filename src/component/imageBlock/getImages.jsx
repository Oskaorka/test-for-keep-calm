import React from "react";

const GetImages = ({ pathImg, title, wrapperClassImg, onClick }) => {
  return (
    <div className={wrapperClassImg}>
      <img onClick={onClick} src={pathImg} alt={title} />
    </div>
  );
};

export default GetImages;
