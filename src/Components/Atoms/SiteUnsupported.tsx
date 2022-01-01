import React from "react";
import styled from "styled-components";
import { primaryText } from "../Utils/Colors";

const Wrapper = styled.div`
  background-color: #2f3640;
  min-width: fit-content;
  font-size: 1.15rem;
  color: ${primaryText};
`;

const SiteUnsupported = () => {
  return <Wrapper>This site is unsupported :(</Wrapper>;
};

export default SiteUnsupported;
