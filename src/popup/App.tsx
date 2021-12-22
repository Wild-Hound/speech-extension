import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const GlobalWrapper = styled("div")`
  width: 200px;
  min-width: fit-content;
  /* background-color: #2f3542; */
  padding: 1rem;
`;
const Title = styled("h2")`
  margin: 0;
  font-size: 1.25rem;
  color: #2f3542;
  text-align: center;
`;
const SiteInput = styled("div")`
  margin: 1rem 0;
  display: flex;
  /* align-items: end; */
  > button {
    padding: 0.25rem;
    font-size: 0.85rem;
    cursor: pointer;
  }
  > input {
    font-size: 1.25rem;
  }
`;

const App = () => {
  return (
    <GlobalWrapper>
      <Title>Atomic Habit</Title>
      <SiteInput>
        <input type="text" />
        <button>
          <AddCircleOutlineIcon />
        </button>
      </SiteInput>
    </GlobalWrapper>
  );
};

export default App;
