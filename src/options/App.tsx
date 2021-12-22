import React from "react";
import styled from "styled-components";
import AddedSites from "./AddedSites/AddedSites";
import AddSite from "./AddSite/AddSite";

const PageWrapper = styled("div")`
  max-width: 1320px;
  margin: auto;
`;

const Title = styled("h1")`
  text-align: center;
  font-size: 2.5rem;
`;

const App = () => {
  return (
    <PageWrapper>
      <Title>Site Limiter</Title>
      <AddedSites />
      <AddSite />
    </PageWrapper>
  );
};

export default App;
