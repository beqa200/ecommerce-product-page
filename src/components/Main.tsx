import { MainWrapper } from "../styled-components";
import Slider from "./Slider";
import { useState } from "react";
import {
  minus,
  plus,
  cart,
  image1,
  image2,
  image3,
  image4,
  image1Thumb,
  image2Thumb,
  image3Thumb,
  image4Thumb,
} from "../images";
const Main = (props: MainPropsType) => {
  const [img, setImg] = useState<any>(0);
  const imagesArr = [image1Thumb, image2Thumb, image3Thumb, image4Thumb];
  const MainImagesArr = [image1, image2, image3, image4];

  const imageSetter = (num: Number) => {
    setImg(num);
  };

  return (
    <MainWrapper action={props.action}>
      <div className="slider">
        <Slider />
      </div>

      <div className="desktop-slider">
        <img
          src={MainImagesArr[img]}
          onClick={() => {
            props.setAction(2);
          }}
        />
        <div className="images">
          {imagesArr.map((image) => {
            return (
              <img
                key={imagesArr.indexOf(image)}
                src={image}
                className={
                  img == imagesArr.indexOf(image) ? "isActive" : "isNotActive"
                }
                onClick={() => {
                  imageSetter(imagesArr.indexOf(image));
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="content">
        <section className="info">
          <p className="company">Sneaker Company</p>
          <h2 className="product">Fall Limited Edition Sneakers</h2>
          <p className="details">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="price">
            <h2 className="current">$125.00</h2>
            <p className="percent">50%</p>
            <p className="previous">$250.00</p>
          </div>
        </section>
        <section className="add-cart">
          <div className="amount">
            <div
              onClick={() => {
                if (props.num > 0) {
                  props.setNum(props.num - 1);
                }
              }}
            >
              <img src={minus} className="minus" />
            </div>

            <p>{props.num}</p>
            <div
              onClick={() => {
                props.setNum(props.num + 1);
              }}
            >
              <img src={plus} className="plus" />
            </div>
          </div>
          <button
            onClick={() => {
              props.setCount(props.num);
            }}
          >
            <img src={cart} />
            Add to cart
          </button>
        </section>
      </div>
    </MainWrapper>
  );
};

export default Main;
