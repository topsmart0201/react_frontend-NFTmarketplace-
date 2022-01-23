import styled from "styled-components";
export const InputContainer = styled.input`
  max-width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-size: ${(props) => props.fsize}px;
  color: black;
  background-color: grey;
  border-radius: 20px;
  border: none;
  padding: 0 15px;
  box-sizing: border-box;
  ::placeholder {
    color: black;
    font-size: 18px;
    padding: 0 10px;
  }
  :focus {
    border: none !important;
  }
`;
