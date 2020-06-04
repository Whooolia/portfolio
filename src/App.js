import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { AppWrapper, ContentWrapper } from "./App.styles";

const App = () => {
  return (
    <>
      <AppWrapper>
        <Navbar />
        <ContentWrapper>
          <LandingPage />
        </ContentWrapper>
      </AppWrapper>
    </>
  );
};

export default App;
