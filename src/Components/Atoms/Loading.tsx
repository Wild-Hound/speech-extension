import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { primaryText } from "../Utils/Colors";

const Wrapper = styled.div`
  background-color: #2c3e50;
  width: 200px;
  font-size: 40px;
  text-align: center;
  padding: 16px 0;
  color: ${primaryText};
`;

const Spinner = styled.div`
  animation: spin 2s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const spinnerIcon = <FontAwesomeIcon icon={faSpinner} />;

const Loading = () => {
  return (
    <Wrapper>
      <Spinner>{spinnerIcon}</Spinner>
    </Wrapper>
  );
};

export default Loading;
