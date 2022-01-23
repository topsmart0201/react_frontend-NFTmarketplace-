import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  margin: 0 100px;
  align-items: center;
  position: relative;
  opacitiy:0;
  .menu_icon {
    font-size: 25px;
    color: white;
    position: fixed;
    right: 50px;
    top: 40px;
  }
  @media screen and (max-width: 750px) {
    margin-top: 10px;
    flex-direction: column;
  }
`;
export const Mark = styled.i`
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 700;
  color: white;
  align-items:center;
  display:flex;
  span{
    margin-right:15px;
  }
`;
export const LinkContainer = styled.div`
  .close_icon {
    font-size: 25px;
    color: white;
    position: fixed;
    right: 50px;
    z-index: 5;
  }
`;
export const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  color: white;
  text-transform: capitalize;
  @media screen and (max-width: 1315px) {
    z-index: 3;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 320px;
    height: 100vh;
    padding: 50px 0 0 50px;
    box-sizing: border-box;
  }
`;
export const LinkItem = styled.div`
  margin: 0 15px;
  cursor: pointer;
  @media screen and (max-width: 1315px) {
    margin: 15px 0;
  }
`;
export const HeaderButton = styled.div`
  @media screen and (max-width: 1355px) {
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 4;
    top: 260px;
    margin-right: 70px;
  }
`;
