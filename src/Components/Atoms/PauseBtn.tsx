import React from "react";
import styled from "styled-components";
import { hoverColor, pauseColor } from "../Utils/Colors";

const Wrapper = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  color: ${pauseColor};
  border: 1px solid ${pauseColor};
  border-radius: 22px;
  transition: all 0.35s;
  &:hover {
    background-color: ${pauseColor};
    color: ${hoverColor};
  }
`;

const PauseBtn: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PauseBtn;
