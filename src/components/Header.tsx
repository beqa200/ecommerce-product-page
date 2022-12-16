import { Cart } from "../components";
import { HeaderWrapper } from "../styled-components";
import { menuIcon, logo, cart, avatar } from "../images";
import { useState } from "react";
const Header = (props: HeaderPropsType) => {
  const [iscart, setIsCart] = useState<Boolean>(false);

  return (
    <HeaderWrapper>
      <div className="left-section">
        <img
          src={menuIcon}
          className="menu"
          onClick={() => {
            props.setAction(1);
          }}
        />

        <div className="desktop-menu">
          <div>
            <p>Collections</p>
          </div>
          <div>
            <p>Men</p>
          </div>
          <div>
            <p>Women</p>
          </div>
          <div>
            <p>About</p>
          </div>
          <div>
            <p>Contact</p>
          </div>
        </div>
        <img src={logo} className="logo" />
      </div>
      <div className="right-section">
        <img
          src={cart}
          className="cart"
          onClick={() => {
            setIsCart(!iscart);
          }}
        />
        <p
          className="amount"
          style={{ display: props.count == 0 ? "none" : "block" }}
        >
          {props.count}
        </p>
        <img src={avatar} className="avatar" />
      </div>
      <Cart
        count={props.count}
        setCount={props.setCount}
        cart={iscart}
        setCart={setIsCart}
        setNum={props.setNum}
      />
    </HeaderWrapper>
  );
};

export default Header;
