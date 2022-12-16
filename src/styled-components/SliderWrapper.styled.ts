import styled from "styled-components";

type PropsType = {
  action: Number;
};
const SliderWrapper = styled.div`
  width: 100%;
  max-width: 375px;

  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  @media (min-width: 1300px) {
    max-width: 550px;
  }

  .images {
    width: 100%;
    height: 320px;
    @media (min-width: 1300px) {
      height: 550px;
      width: 550px;
      border-radius: 15px;
    }
  }
  .switcher {
    position: absolute;
    display: flex;
    width: 90%;
    margin-left: 5%;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: white;
      border-radius: 100%;
      cursor: pointer;
    }
  }
`;

export default SliderWrapper;
