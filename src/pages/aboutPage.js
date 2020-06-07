import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { AppWrapper, ContentWrapper } from "../App.styles";

const AboutPage = () => {
  return (
    <>
      <AppWrapper>
        <Navbar />
        <ContentWrapper>
          <About />
        </ContentWrapper>
      </AppWrapper>
    </>
  );
};

export default AboutPage;
