import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 90%;
  max-width: 340px;
  margin: auto;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (min-width: 1300px) {
    max-width: 1250px;
    height: 112px;
    border-bottom: 1px solid #e4e9f2;
  }

  .left-section {
    @media (min-width: 1300px) {
      width: 600px;
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
    }
  }

  .menu {
    cursor: pointer;
    @media (min-width: 1300px) {
      display: none;
    }
  }

  .logo {
    @media (min-width: 1300px) {
      height: 20px;
      margin-top: 46px;
    }
  }

  .desktop-menu {
    display: none;
    @media (min-width: 1300px) {
      display: flex;
      width: 400px;
      justify-content: space-between;
    }

    div {
      height: 112px;
      display: flex;
      align-items: center;
      transition: 0.2s;
      &:hover {
        border-bottom: 4px solid #ff7e1b;
        cursor: pointer;
      }
    }
  }

  .logo {
    margin-left: 16px;
  }

  .cart {
    margin-right: 22px;
    cursor: pointer;
  }

  .amount {
    text-align: center;
    position: absolute;
    background-color: #ff7e1b;
    width: 19px;
    height: 13px;
    border-radius: 6.5px;
    color: white;
    font-size: 10px;
    font-weight: 800;
    margin-top: -30px;
    margin-left: 12px;
  }

  .right-section {
    @media (min-width: 1300px) {
      display: flex;
      align-items: center;
    }
    
    .avatar {
      width: 24px;
      @media (min-width: 1300px) {
        width: 50px;

        &:hover {
          cursor: pointer;
          border: 2px solid #ff7e1b;
          border-radius: 100%;
        
        }
      }
    }
  }
`;

export default HeaderWrapper;
