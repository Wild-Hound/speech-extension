import React from "react";
import styled from "styled-components";
import { hoverColor, playColor } from "../Utils/Colors";
import { metaData } from "../Utils/Types";

interface Props {
  callBack: (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setMetaData: React.Dispatch<React.SetStateAction<metaData>>
  ) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMetadata: React.Dispatch<React.SetStateAction<metaData>>;
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

const PlayBtn: React.FC<Props> = ({
  children,
  callBack,
  setLoading,
  setMetadata,
}) => {
  return (
    <Wrapper onClick={(e) => callBack(setLoading, setMetadata)}>
      {children}
    </Wrapper>
  );
};

export default PlayBtn;
