import React from "react";
import { InputContainer } from "./input.styled";
const Input = (props) => {
  return (
    <InputContainer
      type={props.type}
      width={props.width}
      height={props.height}
      placeholder={props.placeholder}
      fsize={props.fsize}
    ></InputContainer>
  );
};

export default Input;
