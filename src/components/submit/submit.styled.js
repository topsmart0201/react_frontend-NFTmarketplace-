import styled from "styled-components";
export const CustomSearch = styled.div`
  position: relative;
  .search_icon {
    color: #3db97b;
    font-size: 16px;
    position: absolute;
    left: 10px;
    top: 15px;
  }
`;
export const SubmitContent = styled.input`
  width: 460px;
  height: 40px;
  border-radius: 100px;
  border: 1px solid #1a1a1a;
  background-color: rgba(50, 50, 50, 10);
  padding: 0 40px;
  color: white;
  font-size: 16px;
  ::placeholder {
    font-size: 18px;
  }
`;
