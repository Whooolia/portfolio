import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faMedium,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../../static/jihyun.png";
import {
  MainContainer,
  IconWrapper,
  MainText,
  ProfilePicture,
  MainTitle,
  MainSubTitle,
  MainTitleWithLocation,
  Arrow,
} from "./Main.styles";
import { NavbarItem } from "../Navbar/Navbar.styles";

const Main = () => {
  return (
    <>
      <MainContainer>
        <MainTitle>JIHYUN</MainTitle>

        <MainSubTitle>
          I'm a software engineer with background in Hotel & Tourism Management.
          I love traveling, photography, and cooking.
        </MainSubTitle>
        <ProfilePicture src={profilePicture} alt="profile picture" />

        {/* <MainText>
          Hi, I’m Jihyun Hwang. A Korean software engineer, currently based in
          London.
        </MainText> */}
        <IconWrapper>
          {/* TODO: REFACTOR */}
          {/* <FontAwesomeIcon
            icon={faMedium}
            style={{ margin: "0 10px", height: "30px", width: "30px" }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/whoooolia/")
            }
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ margin: "0 10px", height: "30px", width: "30px" }}
            onClick={() => window.open("https://medium.com/@tpdms2779")}
          />
          <FontAwesomeIcon
            icon={faGithub}
            style={{ margin: "0 10px", height: "30px", width: "30px" }}
            onClick={() => window.open("https://github.com/Whooolia")}
          /> */}
        </IconWrapper>
        <MainTitleWithLocation>
          Software engineer based in London
        </MainTitleWithLocation>
        <Link href="/work">
          <Arrow>
            {/* <a> */}
            <FontAwesomeIcon
              icon={faAngleDown}
              className="animatedArrow"
              // onClick={}
            />
            {/* </a> */}
          </Arrow>
        </Link>
      </MainContainer>
    </>
  );
};

export default Main;
