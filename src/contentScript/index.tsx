import React, { createContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Loading from "../Components/Atoms/Loading";
import SiteUnsupported from "../Components/Atoms/SiteUnsupported";
import App from "./App";

export interface globalContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<globalContext | null>(null);

const Wrapper = styled("div")`
  min-width: fit-content;
  background-color: #2c3e50;
  padding: 16px;
  position: fixed;
  bottom: 48px;
  right: 48px;
  border-radius: 5px;
  z-index: 1000;
`;

const index = () => {
  const [unSupported, setUnSupported] = useState(false);
  const [loading, setLoading] = useState(false);

  const providerValue = useMemo(
    () => ({ loading, setLoading }),
    [loading, setLoading]
  );

  useEffect(() => {
    const host = window.location.hostname;
    if (host === "www.facebook.com") {
      setLoading(false);
      setUnSupported(true);
    } else {
      setLoading(false);
      setUnSupported(false);
    }
  }, []);

  return (
    <GlobalContext.Provider value={providerValue}>
      <Wrapper>
        {unSupported ? (
          <>
            {loading && <Loading />}
            <SiteUnsupported />
          </>
        ) : (
          <App />
        )}
      </Wrapper>
    </GlobalContext.Provider>
  );
};

export default index;
