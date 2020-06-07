import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { AppWrapper, ContentWrapper, CircleCursor } from "./App.styles";
import Cursor from "./components/Cursor";

const App = () => {
  return (
    <>
      <AppWrapper>
        <Cursor />
        <Navbar />
        <ContentWrapper>
          <Main />
        </ContentWrapper>
      </AppWrapper>
    </>
  );
};

export default App;
