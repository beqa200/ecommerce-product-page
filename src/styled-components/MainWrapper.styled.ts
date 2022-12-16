import styled from "styled-components";

type PropsTypes = {
  action: Number;
};
const MainWrapper = styled.div`
  height: ${(props: PropsTypes) => (props.action == 1 ? "90.5vh" : "")};
  overflow-y: ${(props: PropsTypes) => (props.action == 1 ? "hidden" : "auto")};
  @media (min-width: 1300px) {
    margin-top: -45px;
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .slider {
    @media (min-width: 1300px) {
      display: none;
    }
  }

  .desktop-slider {
    display: none;
    @media (min-width: 1300px) {
      display: block;
      width: 445px;

      img {
        max-width: 100%;
        border-radius: 15px;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }

      .images {
        display: flex;
        justify-content: space-between;
        margin-top: 32px;

        .isActive {
          padding: 1px;
          opacity: 0.6;
          border: 2px solid #ff7e1b;
          border-radius: 10px;
        }

        img {
          width: 88px;
          border-radius: 10px;
          &:hover {
            opacity: 0.6;
            cursor: pointer;
          }
        }
      }
    }
  }

  .content {
    @media (min-width: 1300px) {
      margin-bottom: -70px;
    }
    .info {
      width: 350px;
      margin: auto;

      .company {
        font-size: 13px;
        color: #ff7e1b;
        font-weight: 700;
        letter-spacing: 1.8px;
        margin-top: 24px;
      }

      h2 {
        font-size: 28px;
        font-weight: 800;
        margin-top: 19px;
        color: #1d2026;
      }

      p {
        margin-top: 15px;
        color: #69707d;
        line-height: 25px;
      }

      .price {
        margin-top: 28px;
        h2,
        p {
          display: inline;
          font-weight: 800;
        }

        .current {
          font-size: 28px;
        }

        .percent {
          margin-left: 24px;
          padding: 7px 7px 4px 7px;
          background: #ffeee2;
          color: #ff7e1b;
          font-size: 16px;
          border-radius: 6px;
        }
        .previous {
          float: right;
          font-size: 16px;
          color: #b6bcc8;
          text-decoration: line-through;
          margin-top: 10px;
        }
      }
    }

    .add-cart {
      width: 350px;
      margin: auto;
      margin-top: 27px;
      .amount {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        background-color: #f6f8fd;
        height: 56px;
        border-radius: 10px;
        div {
          height: 70%;
          width: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          &:hover {
            opacity: 0.6;
          }
        }
        .minus {
          height: 5px;
        }

        p {
          font-size: 16px;
          font-weight: 800;
          color: #1d2026;
        }

        .plus {
          height: 13px;
        }
      }

      button {
        background-color: #ff7e1b;
        width: 100%;
        height: 56px;
        border: none;
        border-radius: 10px;
        color: white;
        font-size: 16px;
        font-weight: 800;
        margin-top: 16px;
        margin-bottom: 88px;
        box-shadow: 0px 20px 50px -20px #ff7e1b;
        cursor: pointer;
        img {
          filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(197deg)
            brightness(203%) contrast(103%);
          margin-bottom: -4px;
          margin-right: 15px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

export default MainWrapper;
