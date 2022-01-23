import styled from "styled-components";
export const CardContainer = styled.div`
  width: 330px;
  height: 480px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  margin: 7px;
`;
export const SelectButton = styled.div`
  width: 100%;
`;
export const CardImage = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
  width: 100%;
  height: 350px;
`;
export const CardContent = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
export const CardDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  font-size: 10px;
  padding: 10px;
  img{
    border-radius:50%;
  }
`;
export const CardButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
