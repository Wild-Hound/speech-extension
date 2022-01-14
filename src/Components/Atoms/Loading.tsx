import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { primaryText } from "../Utils/Colors";
import ReactLoading from "react-loading";

const Wrapper = styled.div`
  background-color: #2c3e50;
  width: 200px;
  font-size: 40px;
  text-align: center;
  padding: 16px 0;
  color: ${primaryText};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Loading = () => {
  return (
    <Wrapper>
      <ReactLoading type="spin" color="#1abc9c" height={65} width={65} />
    </Wrapper>
  );
};

export default Loading;
