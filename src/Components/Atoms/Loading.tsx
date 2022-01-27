import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { primaryText } from "../Utils/Colors";
import ReactLoading from "react-loading";

const Wrapper = styled.div`
  background-color: #2c3e50;
  width: 150px;
  font-size: 32px;
  text-align: center;
  padding: 16px 0;
  color: ${primaryText};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: fit-content;
  > div {
    margin: auto;
  }
`;

const Loading = () => {
  return (
    <Wrapper>
      <ReactLoading type="spin" color="#1abc9c" height={65} width={65} />
    </Wrapper>
  );
};

export default Loading;
