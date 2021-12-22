import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const SiteInput = styled("div")`
  display: flex;
  > input {
    font-size: 1.15rem;
    padding: 0.25rem 0.5rem;
    outline: none;
    border-right: none;
  }
  .numberInput {
    width: 45px;
    outline: none;
    /* border-left: none; */
  }
  > button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const AddSite = () => {
  return (
    <SiteInput>
      <input type="text" placeholder="Enter URL" />
      <input type="number" className="numberInput" />
      <button>
        <AddCircleOutlineIcon />
      </button>
    </SiteInput>
  );
};

export default AddSite;
