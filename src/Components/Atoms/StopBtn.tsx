import React from "react";
import styled from "styled-components";
import { hoverColor, stopColor } from "../Utils/Colors";

const Wrapper = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  height: 32px;
  width: 32px;
  color: ${stopColor};
  border: 1px solid ${stopColor};
  border-radius: 22px;
  transition: all 0.35s;
  &:hover {
    background-color: ${stopColor};
    color: ${hoverColor};
  }
`;

const StopBtn: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StopBtn;
