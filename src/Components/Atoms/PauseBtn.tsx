import React from "react";
import styled from "styled-components";
import { hoverColor, pauseColor } from "../Utils/Colors";

const Wrapper = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  height: 32px;
  width: 32px;
  color: ${pauseColor};
  border: 1px solid ${pauseColor};
  border-radius: 22px;
  transition: all 0.35s;
  &:hover {
    background-color: ${pauseColor};
    color: ${hoverColor};
  }
`;

interface Props {
  callback: React.MouseEventHandler<HTMLButtonElement>;
}

const PauseBtn: React.FC<Props> = ({ children, callback }) => {
  return <Wrapper onClick={callback}>{children}</Wrapper>;
};

export default PauseBtn;
