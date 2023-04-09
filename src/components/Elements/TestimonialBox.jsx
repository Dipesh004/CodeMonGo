import React from "react";
import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";

export default function TestimonialBox({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
}) {
  return (
    <Wrapper
      style={{
        boxShadow: "rgb(100,100,100)0px 0px 16px",
        transition: "transform 0.2s ease-in-out",
      }}
      className="darkBg radius8  flexColumn up-on-hover"
    >
      <QuoteWrapper>
        <QuoteIcon />
      </QuoteWrapper>
      <p
        className="whiteColor font13"
        style={{ paddingBottom: "15px", fontSize: "14px" }}
      >
        {text1}
      </p>
      <p
        className="whiteColor font13"
        style={{ paddingBottom: "15px", fontSize: "14px" }}
      >
        {text2}
      </p>
      <p
        className="whiteColor font13"
        style={{ paddingBottom: "15px", fontSize: "14px" }}
      >
        {text3}
      </p>
      <p
        className="whiteColor font13"
        style={{ paddingBottom: "15px", fontSize: "14px" }}
      >
        {text4}
      </p>
      <p
        className="whiteColor font13"
        style={{ paddingBottom: "15px", fontSize: "14px" }}
      >
        {text5}
      </p>
      <p
        className="whiteColor font13"
        style={{ paddingBottom: "15px", fontSize: "14px" }}
      >
        {text6}
      </p>
      <p
        className="whiteColor font13"
        style={{ paddingBottom: "15px", fontSize: "14px" }}
      >
        {text7}
      </p>
      <p
        className="whiteColor font13"
        style={{ paddingBottom: "15px", fontSize: "14px" }}
      >
        {text8}
      </p>
      <p
        className="whiteColor font13"
        style={{ paddingBottom: "15px", fontSize: "14px" }}
      >
        {text9}
      </p>
      {/* <p className="orangeColor font13" style={{alignSelf: 'flex-end'}}>
        <em>{author}</em>
      </p> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 14px 30px;
  margin-top: 30px;
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -40px;
`;
