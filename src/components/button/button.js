import React from "react";
import { ButtonContainer } from "./button.styled";
const Button = (props) => {
  return (
    <ButtonContainer
      width={props.width}
      height={props.height}
      fsize={props.fsize}
    >
      {props.content}
    </ButtonContainer>
  );
};

export default Button;
