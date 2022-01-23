import styled from "styled-components";
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: rgba(56 52 52 / 60%);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: relative;
  transition: all 0.9s;
  box-sizing: border-box;
`;
export const FilterTitle = styled.div`
  font-size: 35px;
  color: white;
  font-weight: 600;
  text-align: center;
  margin: 30px 0 20px 0;
`;
export const FilterItem = styled.div`
  border-top: 1px solid #3db97b;
  border-bottom: 1px solid #3db97b;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  box-sizing: border-box;
  span {
    font-size: 27px;
  }
`;
export const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px 0;
  align-items: center;
  font-size: 18px;
  color: white;
  cursor: pointer; 
`;
export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  * {
    align-items: center;
    margin: 10px auto;
  }
  span{
    margin: 17px;
  }
`;
export const CheckButton = styled.div`
  width: 130px;
  height: 33px;
  font-size: 16px;
  color: white;
  background-color: grey;
  border-radius: 15px;
  padding: 1px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  :hover {
    background-color: #3db97b;
  }
  span {
    color: white;
    font-size: 18px;
  }
`;
