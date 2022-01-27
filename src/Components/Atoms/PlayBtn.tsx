import React from "react";
import styled from "styled-components";
import { hoverColor, playColor } from "../Utils/Colors";

interface Props {
  callBack: React.MouseEventHandler<HTMLButtonElement>;
}

const Wrapper = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  height: 40px;
  width: 40px;
  color: ${playColor};
  border: 1px solid ${playColor};
  border-radius: 22px;
  transition: all 0.35s;
  margin: 0 16px;
  &:hover {
    background-color: ${playColor};
    color: ${hoverColor};
  }
`;

const PlayBtn: React.FC<Props> = ({ children, callBack }) => {
  return <Wrapper onClick={callBack}>{children}</Wrapper>;
};

export default PlayBtn;
