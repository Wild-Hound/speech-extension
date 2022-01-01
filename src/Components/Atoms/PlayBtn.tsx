import React, { ReactNode } from "react";
import styled from "styled-components";
import { hoverColor, playColor } from "../Utils/Colors";

const Wrapper = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  height: 2.5rem;
  width: 2.5rem;
  color: ${playColor};
  border: 1px solid ${playColor};
  border-radius: 22px;
  transition: all 0.35s;
  margin: 0 1rem;
  &:hover {
    background-color: ${playColor};
    color: ${hoverColor};
  }
`;

interface Props {}

const PlayBtn: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PlayBtn;
