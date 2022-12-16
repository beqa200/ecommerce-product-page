import styled from "styled-components";

type PropsTypes = {
  action: Number | undefined;
};

const BodyWrapper = styled.div`
  .forDark {
    background-color: white;
    opacity: ${(props: PropsTypes) =>
      props.action == 1 || props.action == 2 ? "0.3" : "1"};
    transition: 0.5s;
    height: 100%;
    pointer-events: ${(props: PropsTypes) =>
      props.action == 1 || props.action == 2 ? "none" : "auto"};

    @media (min-width: 1300px) {
      height: 100vh;
      overflow-y: hidden;
    }
  }

  .desktop-slider2 {
    width: 550px;
    margin: calc(-50% + 150px) calc(50% - 225px);
    display: ${(props) => (props.action == 2 ? "block" : "none")};
    position: fixed;
    .close {
      width: 20px;
      float: right;
      margin-top: -30px;

      &:hover {
        cursor: pointer;
        filter: invert(54%) sepia(38%) saturate(1911%) hue-rotate(347deg)
          brightness(101%) contrast(101%);
      }
    }
  }
`;

export default BodyWrapper;
