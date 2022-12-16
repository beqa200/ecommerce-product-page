import { useState } from "react";
import {
  image1,
  image2,
  image3,
  image4,
  iconNext,
  iconPrevious,
} from "../images";
import { SliderWrapper } from "../styled-components";

const Slider = () => {
  const [imageCount, setImageCount] = useState(0);
  let image = image1;

  switch (imageCount) {
    case 0:
      image = image1;
      break;
    case 1:
      image = image2;
      break;
    case 2:
      image = image3;
      break;
    case 3:
      image = image4;
      break;
  }

  return (
    <SliderWrapper>
      <img src={image} className="images" />
      <div className="switcher">
        <div
          onClick={() => {
            if (imageCount > 0 && imageCount <= 4) {
              setImageCount(imageCount - 1);
            }
          }}
        >
          <img src={iconPrevious} className="previous" />
        </div>
        <div
          onClick={() => {
            if (imageCount >= 0 && imageCount < 4) {
              setImageCount(imageCount + 1);
            }
          }}
        >
          {" "}
          <img src={iconNext} className="next" />
        </div>
      </div>
    </SliderWrapper>
  );
};

export default Slider;
