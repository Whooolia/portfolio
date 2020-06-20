import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 830px;
  font-family: "Muli", sans-serif;
  font-weight: 800;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`;

const MainText = styled.p`
  font-size: 4rem;
`;

const ProfilePicture = styled.img`
  height: 500px;
  width: 400px;
`;

const MainTitle = styled.h2`
  font-family: "Archivo", sans-serif;
  font-size: 8rem;
  margin: 0;
  position: absolute;
  left: 80px;
  top: 120px;
`;

const MainSubTitle = styled.p`
  /* font-family: "Unna", sans-serif; */
  font-family: "Jost", sans-serif;
  font-size: 1.3rem;
  font-weight: 300;
  position: absolute;
  left: 240px;
  top: 240px;
  width: 300px;
`;

const MainTitleWithLocation = styled(MainTitle)`
  top: 620px;
  left: 940px;
  font-size: 3rem;
  width: 400px;
`;

const Arrow = styled.a`
  width: 60px;
  height: 60px;
  color: #f4d349;
  transform: translateX(-50%);
  transition: 1s ease;
  font-size: 3rem;
  text-align: center;
  overflow: hidden;

  &:hover {
    color: #736429;
    /* background-color: lightgrey;
    border-radius: 50%;
    opacity: 0.4; */
  }

  animation: bounce-arrow 3s infinite linear;
  @keyframes bounce-arrow {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

export {
  MainContainer,
  IconWrapper,
  MainText,
  ProfilePicture,
  MainTitle,
  MainSubTitle,
  MainTitleWithLocation,
  Arrow,
};
