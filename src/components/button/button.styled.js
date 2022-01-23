import styled from "styled-components";
export const ButtonContainer = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-size: ${(props) => props.fsize}px;
  background-color: #3db97b;
  border-radius: 30px;
  color: white;
  display: flex;
  
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
//text-transform: uppercase;