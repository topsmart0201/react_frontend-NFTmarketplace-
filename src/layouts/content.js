import React from "react";

import { ContextContainer } from "./content.styled";
const Context = ({ children }) => {
  return <ContextContainer>{children}</ContextContainer>;
};

export default Context;
