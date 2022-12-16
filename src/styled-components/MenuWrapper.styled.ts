import styled from "styled-components";

type PropsTypes = {
  action: Number | undefined;
};

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 250px;
  background-color: white;
  margin-left: -270px;

  @media (min-width: 1300px) {
    display: none;
  }

  animation: ${(props: PropsTypes) =>
    props.action == 1
      ? "comeIn 0.5s ease-in 0s 1 alternate forwards"
      : "comeOut 0.5s ease-out 0s 1 alternate"};

  @keyframes comeIn {
    0% {
      margin-left: -270px;
    }
    100% {
      margin-left: 0px;
    }
  }

  @keyframes comeOut {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: -270px;
    }
  }

  img {
    margin-left: 25px;
    margin-top: 25px;
    margin-bottom: 53px;
    cursor: pointer;
  }

  p {
    margin-left: 25px;
    margin-top: 20px;
    font-size: 18px;
    color: #1d2026;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default MenuWrapper;
