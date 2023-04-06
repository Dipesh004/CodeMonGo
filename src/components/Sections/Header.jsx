import React from "react";
import styled from "styled-components";
// Components
// import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
// import CountdownTimer from "./CountdownTimer";
import { FlipDate } from "./CountdownTimer";
// import FlipDate from "./CountdownTimer";
// import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
// import { FlipDate } from "./CountdownTimer";

export default function Header() {
  // const endTime = new Date("2023-05-31T23:59:59.999Z");
  const endDate = new Date("2023-04-10T23:59:59.999Z");
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter" style={{ color: "white" }}>
        <div>
          <h1
            className="extraBold font60"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            CodeMonGo
          </h1>
          <HeaderP className="font16 " style={{ maxWidth: "auto !important" }}>
            Welcome to the Ultimate Frontend Battle: CodeMonGo! This exciting
            online coding contest is designed to challenge the skills and
            creativity of front-end developers who are proficient in Three.js,
            Next.js, and React Native. Are you ready to put your talent to the
            test and compete against fellow developers from around the world?
            Get ready to showcase your expertise and develop cutting-edge
            applications that will leave a lasting impression on the tech
            community!
          </HeaderP>
          <p className="font30">Are you ready to take on the challenge?</p>
          <h1 className="timer">
            <FlipDate value={"2023-06-30T11:30:00.999Z"} />
            {/* <CountdownTimer endDate={endDate} /> */}
          </h1>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8"
            src={HeaderImage}
            alt="office"
            style={{
              zIndex: 9,
              boxShadow: "rgb(29, 29, 29, 40%) 0px 0px 16px",
            }}
          />
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
