import React, { useEffect, useState } from "react";
import styled from "styled-components";
// @ts-ignore
import fakeData from "./sites.json";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ComponentWrapper = styled("div")`
  max-width: 850px;
  margin: auto;
  border: 1px solid black;
  border-bottom: none;
  margin-bottom: 2rem;
`;

const Item = styled("div")`
  display: grid;
  grid-template-columns: 10fr 1fr 1fr;
  > div {
    padding: 0.25rem 0.5rem;
    border-bottom: 1px solid black;
  }
  .urlRow {
    display: flex;
    align-items: center;
    font-size: 1.05rem;
  }
  .timeRow {
    border-left: 1px solid black;
    font-size: 1.15rem;
  }
  .btnRow {
    border-left: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    > button {
      font-size: 0.85rem;
      cursor: pointer;
    }
  }
`;

const AddedSites = () => {
  const [items, setItems] = useState<fakeData[]>();

  useEffect(() => {
    setItems(fakeData);
    // console.log(fakeData);
  }, []);

  function getItems() {
    if (items === undefined) {
      return;
    }
    return items.map((item, index) => {
      return (
        <Item>
          <div className="urlRow">{item.url}</div>
          <div className="timeRow">{item.time}</div>
          <div className="btnRow">
            <button>
              <EditIcon />
            </button>
            <button>
              <DeleteForeverIcon />
            </button>
          </div>
        </Item>
      );
    });
  }

  return <ComponentWrapper>{getItems()}</ComponentWrapper>;
};

export default AddedSites;
