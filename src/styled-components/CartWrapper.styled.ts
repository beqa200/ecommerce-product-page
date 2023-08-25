import styled from "styled-components";
import { cart } from "../images";

type PropsType = {
  count: Number;
  cart: Boolean;
};

const CartWrapper = styled.div`
  display: ${(props: PropsType) => (props.cart == true ? "block" : "none")};
  position: absolute;
  background-color: white;
  width: 360px;
  height: 256px;
  margin-top: 340px;
  z-index: 1;
  margin-left: calc(50% - 180px);
  border-radius: 10px;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);

  @media (min-width: 1300px) {
    margin-left: calc(50% + 180px);
  }

  .header {
    height: 40px;
    border-bottom: 1px solid #e4e9f2;

    p {
      margin-top: 24px;
      margin-left: 24px;
      font-size: 16px;
      font-weight: 800;
    }
  }

  .content {
    display: ${(props: PropsType) => (props.count == 0 ? "none" : "block")};

    .flex {
      display: flex;
      width: 90%;
      margin: 24px auto;
      justify-content: space-between;
      align-items: center;

      .product {
        width: 50px;
        border-radius: 4px;
      }

      p {
        font-size: 16px;
        color: #69707d;
        line-height: 26px;
      }

      .total {
        color: #1d2026;
        font-weight: 800;
      }

      .prices {
        width: 170px;
        display: flex;
        justify-content: space-around;
      }

      .trash {
        height: 20px;
      }
    }

    button {
      background-color: #ff7e1b;
      margin: 24px 18px;
      width: 90%;
      height: 56px;
      border: none;
      border-radius: 10px;
      color: white;
      font-size: 16px;
      font-weight: 800;
      margin-top: 16px;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  .content2 {
    height: 190px;
    display: ${(props: PropsType) => (props.count == 0 ? "flex" : "none")};
    align-items: center;
    justify-content: center;
  }
`;

export default CartWrapper;
